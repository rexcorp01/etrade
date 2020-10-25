import { Button, Colors, Position, Tooltip } from '@blueprintjs/core';
import { ColDef, ColumnApi, ColumnState, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ApplyColumnStateParams } from 'ag-grid-community/dist/lib/columnController/columnApi';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react/lib/agGridReact';
import { Actions, Model, TabNode } from 'flexlayout-react';
import * as grpcWeb from 'grpc-web';
import log from 'loglevel';
import React, { Component } from 'react';
import ReactCountryFlag from "react-country-flag";
import v4 from 'uuid';
import { Destinations } from '../../common/destinations';
import { ExecutionVenueClient } from '../../serverapi/ExecutionvenueServiceClientPb';
import { CancelOrderParams } from '../../serverapi/executionvenue_pb';
import { Empty } from '../../serverapi/modelcommon_pb';
import { Order, OrderStatus, Side } from '../../serverapi/order_pb';
import { ListingService } from '../../services/ListingService';
import { OrderService } from '../../services/OrderService';
import { GlobalColours } from '../Container/Colours';
import { OrderContext } from "../Container/Contexts";
import { AgGridColumnChooserController, ChildOrderBlotterController, ExecutionsController, OrderHistoryBlotterController, TicketController } from "../Container/Controllers";
import Login from '../Login';
import { getColIdsInOrder, TableViewConfig, TableViewProperties } from '../TableView/TableView';
import OrderBlotter, { OrderBlotterState } from './OrderBlotter';
import { OrdersView, OrderView } from './OrderView';


const fieldName = (name: keyof OrderView) => name;

export  class CountryFlagRenderer extends Component<any,any> {
  constructor(props:any) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }


  render() {
    return <span><ReactCountryFlag countryCode={this.state.value}/> {this.state.value}</span>;
  }
}



const columnDefs: ColDef[] = [
  {
    headerName: 'Version',
    field: fieldName('version'),
    width: 80,

  },
  {
    headerName: 'Id',
    field: fieldName('id'),
    width: 170
  },
  {
    headerName: 'Side',
    field: fieldName('side'),
    width: 180,
    cellStyle: function (params: any) {
      let orderView: OrderView = params.data

      if (orderView.getOrder().getSide() === Side.BUY) {
        return { backgroundColor: GlobalColours.BUYBKG };
      } else {
        return { backgroundColor: GlobalColours.SELLBKG };
      }
    }
  },
  {
    headerName: 'Symbol',
    field: fieldName('symbol'),
    width: 170
  },
  {
    headerName: 'Mic',
    field: fieldName('mic'),
    width: 170
  },
  {
    headerName: 'Country',
    field: fieldName('countryCode'),
    width: 170,
    cellRenderer: 'countryFlagRenderer'

  },
  {
    headerName: 'Quantity',
    field: fieldName('quantity'),
    width: 170
  },
  {
    headerName: 'Price',
    field: fieldName('price'),
    width: 170
  },
  {
    headerName: 'Status',
    field: fieldName('status'),
    width: 170,
    cellStyle: function (params: any) {
      let orderView: OrderView = params.data

      if (orderView) {
        switch (orderView.getOrder().getStatus()) {
          case OrderStatus.LIVE:
            return { backgroundColor: Colors.GREEN3 }
          case OrderStatus.CANCELLED:
            return { backgroundColor: Colors.RED3 }
          case OrderStatus.FILLED:
            return { backgroundColor: Colors.BLUE3 }

        }
      }
    }
  },
  {
    headerName: 'Target Status',
    field: fieldName('targetStatus'),
    width: 170,
    cellStyle: function (params: any) {
      let orderView: OrderView = params.data

      if (orderView.getOrder().getTargetstatus() !== OrderStatus.NONE) {
        return { backgroundColor: Colors.ORANGE3 }
      }
    }
  },
  {
    headerName: 'Rem. Qty',
    field: fieldName('remainingQuantity'),
    width: 170
  },
  {
    headerName: 'Exp. Qty',
    field: fieldName('exposedQuantity'),
    width: 170
  },
  {
    headerName: 'Traded Qty',
    field: fieldName('tradedQuantity'),
    width: 170
  },
  {
    headerName: 'Avg Price',
    field: fieldName('avgTradePrice'),
    width: 170
  },
  {
    headerName: 'Listing Id',
    field: fieldName('listingId'),
    width: 170
  },
  {
    headerName: 'Created',
    field: fieldName('created'),
    width: 170
  },
  {
    headerName: 'Destination',
    field: fieldName('destination'),
    width: 170
  },
  {
    headerName: 'Owner',
    field: fieldName('owner'),
    width: 170
  },
  {
    headerName: 'Error',
    field: fieldName('errorMsg'),
    width: 170,
    cellStyle: function (params: any) {
      let orderView: OrderView = params.data

      if (orderView.errorMsg.length >0) {
        return { backgroundColor: Colors.RED3 }
      }
    }
  },
  {
    headerName: 'Created By',
    field: fieldName('createdBy'),
    width: 170
  },
  {
    headerName: 'Parameters',
    field: fieldName('parameters'),
    width: 170
  },

];





interface ParentOrderBlotterAgGridState  {
  selectedOrders: Array<Order>
  orders: OrderView[]
}

interface ParentOrderBlotterAgGridProps  {
  node: TabNode,
  model: Model,
  orderContext: OrderContext
  orderService: OrderService
  childOrderBlotterController: ChildOrderBlotterController
  orderHistoryBlotterController: OrderHistoryBlotterController
  executionsController: ExecutionsController
  ticketController: TicketController
  listingService: ListingService
  colController : AgGridColumnChooserController
}



export default class ParentOrderBlotterAgGrid extends React.Component<ParentOrderBlotterAgGridProps,  ParentOrderBlotterAgGridState>{

  private view : OrdersView

  gridApi?: GridApi;
  gridColumnApi?: ColumnApi;
  initialColConfig?: ColumnState[];

  executionVenueService = new ExecutionVenueClient(Login.grpcContext.serviceUrl, null, null)
  listingService: ListingService
  childOrderBlotterController: ChildOrderBlotterController
  orderHistoryBlotterController: OrderHistoryBlotterController
  executionsController: ExecutionsController
  ticketController: TicketController
  colController : AgGridColumnChooserController

  orderMap: Map<string, number>;

  orderService: OrderService

  id: string;


  constructor(props: ParentOrderBlotterAgGridProps) {
    super(props);

    this.id = v4();

    this.view = new OrdersView( props.listingService, ()=>{this.setState({ ...this.state, orders: this.view.getOrders() })})

    let view = new Array<OrderView>()

    this.initialColConfig = props.node.getConfig()


    let blotterState: ParentOrderBlotterAgGridState = {
      orders: view,
      selectedOrders: new Array<Order>(),
    }

    this.state = blotterState;

    props.node.setEventListener("save", (p) => {

      if (this.gridColumnApi) {
        let colState = this.gridColumnApi.getColumnState()
        props.model.doAction(Actions.updateNodeAttributes(props.node.getId(), { config: colState }))
      }

    }

    );

    this.listingService = props.listingService
    this.childOrderBlotterController = props.childOrderBlotterController
    this.orderHistoryBlotterController = props.orderHistoryBlotterController
    this.executionsController = props.executionsController
    this.ticketController = props.ticketController
    this.orderService = props.orderService
    this.colController = props.colController

    this.orderMap = new Map<string, number>();

    this.onGridReady = this.onGridReady.bind(this);
    this.onSelectionChanged = this.onSelectionChanged.bind(this)

  }


  
  protected editVisibleColumns = () => {

    if( this.gridColumnApi )  {

      
      this.colController.open(this.getTableName(), this.gridColumnApi.getColumnState(),
      this.gridColumnApi.getAllColumns(), (newColumnsState: ColumnState[] | undefined)=> {
        if( newColumnsState) {
          let colState: ApplyColumnStateParams = {
            state: newColumnsState,
            applyOrder: true
          }
          this.gridColumnApi?.applyColumnState(colState)
        }
      })
    }
    
  }


  protected getTableName(): string {
    return "Order Blotter"
  }

  public componentDidMount(): void {
    this.orderService.SubscribeToAllParentOrders((order: Order) => {
      this.addOrUpdateOrder(order)
      this.onSelectionChanged()
    })
  }


  protected addOrUpdateOrder(order: Order) {
    this.view.addOrUpdateOrder(order)
    this.setState({ ...this.state, orders: this.view.getOrders() })
    
    
  }

  showOrderHistory = (orders: IterableIterator<Order>) => {
    let order = orders.next()

    /*
    let cols = this.state.columns
    let colOrderIds = getColIdsInOrder(cols);

    let config: TableViewConfig = {
      columnWidths: this.state.columnWidths,
      columnOrder: colOrderIds
    }

    this.orderHistoryBlotterController.openBlotter(order.value, config,
      window.innerWidth)
      */
  }



  showExecutions = (orders: IterableIterator<Order>) => {
    let order = orders.next()
    this.executionsController.open(order.value,
      window.innerWidth)
  }


  showChildOrders = (orders: IterableIterator<Order>) => {

    let order = orders.next()

    let childOrders = this.orderService.GetChildOrders(order.value)

    /*
    let cols = this.state.columns
    let colOrderIds = getColIdsInOrder(cols);

    let config: TableViewConfig = {
      columnWidths: this.state.columnWidths,
      columnOrder: colOrderIds
    }

    this.childOrderBlotterController.openBlotter(order.value, childOrders, config,
      window.innerWidth)
    */
  }

  cancelOrder = (orders: Array<Order>) => {

    orders.forEach(order => {


      this.listingService.GetListing(order.getListingid(), (listing) => {
        let params = new CancelOrderParams()
        params.setOrderid(order.getId())
        params.setListingid(listing.getId())
        params.setOwnerid(order.getOwnerid())

        this.executionVenueService.cancelOrder(params, Login.grpcContext.grpcMetaData, (err: grpcWeb.Error, response: Empty) => {
          if (err) {
            log.error("error cancelling order", err)
          }
        })

      })


    });

  }

  modifyOrder = (order: Order) => {

    let listing = this.listingService.GetListingImmediate(order.getListingid())

    if (listing) {
      this.ticketController.openModifyOrderTicket(order, listing)
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    if (this.initialColConfig) {


      let colState: ApplyColumnStateParams = {
        state: this.initialColConfig,
        applyOrder: true
      }

      this.gridColumnApi.applyColumnState(colState)
    }

  };


  onSelectionChanged() {

    let selectedOrders = new Array<Order>()
    if (this.gridApi) {
      var selectedRows = this.gridApi.getSelectedRows();

      selectedRows.forEach(function (selectedRow, index) {

        let orderView: OrderView = selectedRow

        selectedOrders.push(orderView.getOrder())

      });

    }

    let newState: ParentOrderBlotterAgGridState = {
      ...this.state, ...{
        selectedOrders: selectedOrders,
      }
    }

    this.setState(newState)

  };


  public render() {

    let selectedOrders = this.state.selectedOrders
    let cancelleableOrders = OrderBlotter.cancelleableOrders(this.state.selectedOrders)


    return (
      <div style={{ width: "100%", height: "100%", display: 'flex', flexDirection: 'column', alignItems: "centre" }}>
        <div className="bp3-dark" style={{ display: 'flex', flexDirection: 'row', paddingTop: 0, alignItems: "left" }}>
          <div style={{ flexGrow: 1 }}>
            <Button minimal={true} icon="delete" text="Cancel Orders" onClick={() => this.cancelOrder(cancelleableOrders)} disabled={cancelleableOrders.length === 0} />
            <Button minimal={true} icon="edit" text="Modify Order" onClick={() => this.modifyOrder(cancelleableOrders[0])} disabled={cancelleableOrders.length !== 1 ||
              cancelleableOrders[0].getOwnerid() === Destinations.VWAP || cancelleableOrders[0].getOwnerid() === Destinations.SMARTROUTER} />
            <Button minimal={true} icon="fork" text="Child Orders" onClick={() => this.showChildOrders(selectedOrders.values())} disabled={selectedOrders.length !== 1} />
            <Button minimal={true} icon="bring-data" text="Order History" onClick={() => this.showOrderHistory(selectedOrders.values())} disabled={selectedOrders.length !== 1} />
            <Button minimal={true} icon="tick" text="Executions" onClick={() => this.showExecutions(selectedOrders.values())} disabled={selectedOrders.length !== 1} />
          </div>
          <div >
            <Tooltip
              content={<span>Edit Visible Columns</span>}
              position={Position.LEFT_BOTTOM}
              usePortal={false}

            >
              <Button minimal={true} icon="manually-entered-data" onClick={() => this.editVisibleColumns()} />
            </Tooltip>
          </div>
        </div>

        <div className="ag-theme-balham-dark" style={{ width: "100%", height: "100%" }}>
          <AgGridReact
            rowSelection={'multiple'}
            onSelectionChanged={this.onSelectionChanged}

            frameworkComponents={{
                countryFlagRenderer: CountryFlagRenderer,
            }}

            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true
            }}
            columnDefs={columnDefs}
            rowData={this.state.orders}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>

    );
  }

}



