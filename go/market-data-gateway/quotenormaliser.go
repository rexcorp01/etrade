package main

import (
	"github.com/ettec/open-trading-platform/go/market-data-gateway/internal/fix/marketdata"
	"github.com/ettec/open-trading-platform/go/market-data-gateway/internal/model"
	"log"
	"os"
)

type quoteNormaliser struct {
	symbolToListingId map[string]int
	idToQuote         map[int]*model.ClobQuote
	inboundChan       <-chan mdupdate
	outboundChan      chan<- *model.ClobQuote
	closeChan         chan bool
	log               *log.Logger
}

func newQuoteNormaliser(inboundChan <-chan mdupdate,
	outboundChan chan<- *model.ClobQuote) *quoteNormaliser {

	q := &quoteNormaliser{
		symbolToListingId: make(map[string]int),
		idToQuote:         make(map[int]*model.ClobQuote),
		inboundChan:       inboundChan,
		outboundChan:      outboundChan,
		closeChan:         make(chan bool, 1),
		log:               log.New(os.Stdout, "quoteNormaliser:", log.LstdFlags),
	}
	go q.processUpdates()

	return q
}

func (n *quoteNormaliser) close() {
	n.closeChan <- true
}

func (n *quoteNormaliser) processUpdates()  {

	   Loop:
	   	for {
	   		select {
	   		case u := <-n.inboundChan:
	   			if u.listingIdToSymbol != nil {
	   				n.symbolToListingId[u.listingIdToSymbol.symbol] = u.listingIdToSymbol.listingId
	   			}

	   			if u.refresh != nil {
	   				for _, incGrp := range u.refresh.MdIncGrp {
	   					symbol := incGrp.GetInstrument().GetSymbol()
	   					bids := incGrp.MdEntryType == marketdata.MDEntryTypeEnum_MD_ENTRY_TYPE_BID
	   					if listingId, ok := n.symbolToListingId[symbol]; ok {
	   						if fullQuote, ok := n.idToQuote[listingId]; ok {
	   							updatedQuote := updateQuote(fullQuote, incGrp, bids)
								n.idToQuote[listingId] = updatedQuote
	   							n.outboundChan <- updatedQuote
	   						} else {
	   							newQuote := newClobQuote(listingId)
	   							n.idToQuote[listingId] = newQuote
	   							n.outboundChan <- updateQuote(newQuote, incGrp, bids)
	   						}
	   					} else {
	   						n.log.Println("no listing found for symbol:", symbol)
	   					}
	   				}
	   			}
	   		case <-n.closeChan:
	   			break Loop
	   		}
	   	}

}

func newClobQuote(listingId int) *model.ClobQuote {
	bids := make([]*model.ClobLine,0)
	offers := make([]*model.ClobLine,0)

	return &model.ClobQuote{
		ListingId:            int32(listingId),
		Bids:                 bids,
		Offers:               offers,
	}
}

func updateQuote(quote *model.ClobQuote, update *marketdata.MDIncGrp, bids bool) *model.ClobQuote {

	newQuote := model.ClobQuote{
		ListingId:            quote.ListingId,
	}

	if bids  {
		newQuote.Offers = quote.Offers
		newQuote.Bids = updateClobLines(quote.Bids, update, bids)
	} else {
		newQuote.Bids = quote.Bids
		newQuote.Offers = updateClobLines(quote.Offers, update, bids)
	}

	return &newQuote
}


func updateClobLines(lines []*model.ClobLine, update *marketdata.MDIncGrp, bids bool) []*model.ClobLine {

	updateAction := update.GetMdUpdateAction()
	newClobLines := make([]*model.ClobLine, 0, len(lines)+1)

	compareTest := 1
	if bids {
		compareTest = -1
	}


	switch updateAction {
	case marketdata.MDUpdateActionEnum_MD_UPDATE_ACTION_NEW:
		inserted := false

		newLine := &model.ClobLine{
			Size:    &model.Decimal64{Mantissa: update.MdEntrySize.Mantissa, Exponent: update.MdEntrySize.Exponent},
			Price:   &model.Decimal64{Mantissa: update.MdEntryPx.Mantissa, Exponent: update.MdEntryPx.Exponent},
			EntryId: update.MdEntryId,
		}

		for _, line := range lines {
			compareResult := model.Compare(*line.Price, model.Decimal64(*update.GetMdEntryPx()))
			if !inserted && compareResult == compareTest {
				newClobLines = append(newClobLines, newLine)
				inserted = true
			}
			newClobLines = append(newClobLines, line)
		}

		if !inserted {
			newClobLines = append(newClobLines, newLine)
		}

	case marketdata.MDUpdateActionEnum_MD_UPDATE_ACTION_CHANGE:
		inserted := false

		newLine := &model.ClobLine{
			Size:    &model.Decimal64{Mantissa: update.MdEntrySize.Mantissa, Exponent: update.MdEntrySize.Exponent},
			Price:   &model.Decimal64{Mantissa: update.MdEntryPx.Mantissa, Exponent: update.MdEntryPx.Exponent},
			EntryId: update.MdEntryId,
		}

		for _, line := range lines {
			compareResult := model.Compare(*line.Price, model.Decimal64(*update.GetMdEntryPx()))
			if !inserted && compareResult == compareTest {
				newClobLines = append(newClobLines, newLine)
				inserted = true
			}
			if line.EntryId != newLine.EntryId {
				newClobLines = append(newClobLines, line)
			}

		}

		if !inserted {
			newClobLines = append(newClobLines, newLine)
		}

	case marketdata.MDUpdateActionEnum_MD_UPDATE_ACTION_DELETE:
		for _, line := range lines {
			if line.EntryId != update.MdEntryId {
				newClobLines = append(newClobLines, line)
			}
		}
	}

	return newClobLines

}

func (q *fullQuote) onIncRefresh(inc *marketdata.MDIncGrp) *snapshot {

	id := inc.GetMdEntryId()
	updateAction := inc.GetMdUpdateAction()

	switch updateAction {
	case marketdata.MDUpdateActionEnum_MD_UPDATE_ACTION_NEW:
		fallthrough
	case marketdata.MDUpdateActionEnum_MD_UPDATE_ACTION_CHANGE:
		fullGrp := marketdata.MDFullGrp{
			MdEntryPx:   inc.GetMdEntryPx(),
			MdEntrySize: inc.GetMdEntrySize(),
			MdEntryId:   inc.GetMdEntryId(),
			MdEntryType: inc.GetMdEntryType(),
		}
		q.entryIdToEntry[id] = &fullGrp
	case marketdata.MDUpdateActionEnum_MD_UPDATE_ACTION_DELETE:
		delete(q.entryIdToEntry, id)
	}

	entries := make([]*marketdata.MDFullGrp, len(q.entryIdToEntry))
	idx := 0
	for _, value := range q.entryIdToEntry {
		entries[idx] = value
		idx++
	}

	return &snapshot{
		Instrument: q.instrument,
		MdFullGrp:  entries,
	}
}