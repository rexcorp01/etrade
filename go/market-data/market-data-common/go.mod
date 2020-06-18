module github.com/ettech/open-trading-platform/go/market-data/market-data-common

go 1.13

require (
	github.com/emicklei/go-restful v0.0.0-20170410110728-ff4f55a20633
	github.com/ettec/open-trading-platform/go/common v0.0.0
	github.com/ettec/open-trading-platform/go/model v0.0.0
	github.com/golang/protobuf v1.4.0
	github.com/google/uuid v1.1.1
	github.com/prometheus/client_golang v1.6.0
	github.com/segmentio/kafka-go v0.3.4
	google.golang.org/grpc v1.25.1
	k8s.io/client-go v0.17.4
	k8s.io/klog v1.0.0
)

replace github.com/ettec/open-trading-platform/go/model v0.0.0 => ../../model

replace github.com/ettec/open-trading-platform/go/common v0.0.0 => ../../common