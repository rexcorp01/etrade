// Code generated by protoc-gen-go. DO NOT EDIT.
// source: fixsimmarketdataservice.proto

package fixsim

import (
	marketdata "github.com/ettec/open-trading-platform/go/market-data-gateway/internal/fix/marketdata"
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	empty "github.com/golang/protobuf/ptypes/empty"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Party struct {
	PartyId              string   `protobuf:"bytes,1,opt,name=partyId,proto3" json:"partyId,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Party) Reset()         { *m = Party{} }
func (m *Party) String() string { return proto.CompactTextString(m) }
func (*Party) ProtoMessage()    {}
func (*Party) Descriptor() ([]byte, []int) {
	return fileDescriptor_bce990059aaa8241, []int{0}
}

func (m *Party) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Party.Unmarshal(m, b)
}
func (m *Party) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Party.Marshal(b, m, deterministic)
}
func (m *Party) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Party.Merge(m, src)
}
func (m *Party) XXX_Size() int {
	return xxx_messageInfo_Party.Size(m)
}
func (m *Party) XXX_DiscardUnknown() {
	xxx_messageInfo_Party.DiscardUnknown(m)
}

var xxx_messageInfo_Party proto.InternalMessageInfo

func (m *Party) GetPartyId() string {
	if m != nil {
		return m.PartyId
	}
	return ""
}

func init() {
	proto.RegisterType((*Party)(nil), "marketdataservice.Party")
}

func init() { proto.RegisterFile("fixsimmarketdataservice.proto", fileDescriptor_bce990059aaa8241) }

var fileDescriptor_bce990059aaa8241 = []byte{
	// 258 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x90, 0x31, 0x4f, 0xc3, 0x30,
	0x10, 0x85, 0x9b, 0x81, 0x56, 0xf5, 0x04, 0x1e, 0x20, 0x0a, 0xaa, 0x04, 0x99, 0x3a, 0xb9, 0xa8,
	0xac, 0x4c, 0x50, 0x90, 0x3a, 0x20, 0x41, 0xb2, 0xb1, 0x39, 0xee, 0xa5, 0x3d, 0x11, 0xc7, 0xe1,
	0x7c, 0x41, 0xe9, 0xdf, 0xe2, 0x17, 0xa2, 0xc6, 0xaa, 0x8a, 0x68, 0xb7, 0x3b, 0xbf, 0xa7, 0xf7,
	0x3e, 0x9f, 0x98, 0x94, 0xd8, 0x79, 0xb4, 0x56, 0xd3, 0x27, 0xf0, 0x4a, 0xb3, 0xf6, 0x40, 0xdf,
	0x68, 0x40, 0x35, 0xe4, 0xd8, 0xc9, 0x8b, 0x23, 0x21, 0x39, 0x3f, 0x3c, 0x05, 0x53, 0x72, 0xbd,
	0x76, 0x6e, 0x5d, 0xc1, 0xac, 0xdf, 0x8a, 0xb6, 0x9c, 0x81, 0x6d, 0x78, 0x1b, 0xc4, 0xf4, 0x56,
	0x9c, 0xbd, 0x69, 0xe2, 0xad, 0x8c, 0xc5, 0xa8, 0xd9, 0x0d, 0xcb, 0x55, 0x1c, 0xdd, 0x44, 0xd3,
	0x71, 0xb6, 0x5f, 0xe7, 0x3f, 0x91, 0xb8, 0x7a, 0xc1, 0x2e, 0x47, 0xfb, 0xda, 0x47, 0x2f, 0x34,
	0xeb, 0x3c, 0xb4, 0xc9, 0x85, 0x18, 0xe7, 0x6d, 0xe1, 0x0d, 0x61, 0x01, 0x72, 0xa2, 0x0e, 0x86,
	0x3f, 0x63, 0x06, 0x5f, 0x2d, 0x78, 0x4e, 0x2e, 0x55, 0x00, 0x51, 0x7b, 0x10, 0xf5, 0xbc, 0x03,
	0x49, 0x07, 0xf2, 0x5d, 0x8c, 0x9e, 0x5c, 0x5d, 0x83, 0x61, 0x19, 0xab, 0xe3, 0xbf, 0xf6, 0x80,
	0xc9, 0xf4, 0x74, 0xfa, 0xb2, 0x36, 0x04, 0x16, 0x6a, 0xd6, 0x55, 0x06, 0x25, 0x81, 0xdf, 0xa4,
	0x83, 0xbb, 0xe8, 0xf1, 0x41, 0xcc, 0x8d, 0xb3, 0x0a, 0x98, 0xc1, 0x6c, 0x54, 0x89, 0x5d, 0x88,
	0xf5, 0x68, 0xdb, 0x4a, 0xb3, 0xa3, 0x7f, 0x35, 0x40, 0x4a, 0x37, 0xf8, 0x31, 0x0c, 0xe7, 0x2e,
	0x86, 0x3d, 0xe2, 0xfd, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xb7, 0x1e, 0x8a, 0x62, 0x7f, 0x01,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// FixSimMarketDataServiceClient is the client API for FixSimMarketDataService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FixSimMarketDataServiceClient interface {
	Subscribe(ctx context.Context, in *marketdata.MarketDataRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	Connect(ctx context.Context, in *Party, opts ...grpc.CallOption) (FixSimMarketDataService_ConnectClient, error)
}

type fixSimMarketDataServiceClient struct {
	cc *grpc.ClientConn
}

func NewFixSimMarketDataServiceClient(cc *grpc.ClientConn) FixSimMarketDataServiceClient {
	return &fixSimMarketDataServiceClient{cc}
}

func (c *fixSimMarketDataServiceClient) Subscribe(ctx context.Context, in *marketdata.MarketDataRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/marketdataservice.FixSimMarketDataService/Subscribe", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fixSimMarketDataServiceClient) Connect(ctx context.Context, in *Party, opts ...grpc.CallOption) (FixSimMarketDataService_ConnectClient, error) {
	stream, err := c.cc.NewStream(ctx, &_FixSimMarketDataService_serviceDesc.Streams[0], "/marketdataservice.FixSimMarketDataService/Connect", opts...)
	if err != nil {
		return nil, err
	}
	x := &fixSimMarketDataServiceConnectClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type FixSimMarketDataService_ConnectClient interface {
	Recv() (*marketdata.MarketDataIncrementalRefresh, error)
	grpc.ClientStream
}

type fixSimMarketDataServiceConnectClient struct {
	grpc.ClientStream
}

func (x *fixSimMarketDataServiceConnectClient) Recv() (*marketdata.MarketDataIncrementalRefresh, error) {
	m := new(marketdata.MarketDataIncrementalRefresh)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// FixSimMarketDataServiceServer is the server API for FixSimMarketDataService service.
type FixSimMarketDataServiceServer interface {
	Subscribe(context.Context, *marketdata.MarketDataRequest) (*empty.Empty, error)
	Connect(*Party, FixSimMarketDataService_ConnectServer) error
}

// UnimplementedFixSimMarketDataServiceServer can be embedded to have forward compatible implementations.
type UnimplementedFixSimMarketDataServiceServer struct {
}

func (*UnimplementedFixSimMarketDataServiceServer) Subscribe(ctx context.Context, req *marketdata.MarketDataRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Subscribe not implemented")
}
func (*UnimplementedFixSimMarketDataServiceServer) Connect(req *Party, srv FixSimMarketDataService_ConnectServer) error {
	return status.Errorf(codes.Unimplemented, "method Connect not implemented")
}

func RegisterFixSimMarketDataServiceServer(s *grpc.Server, srv FixSimMarketDataServiceServer) {
	s.RegisterService(&_FixSimMarketDataService_serviceDesc, srv)
}

func _FixSimMarketDataService_Subscribe_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(marketdata.MarketDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FixSimMarketDataServiceServer).Subscribe(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/marketdataservice.FixSimMarketDataService/Subscribe",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FixSimMarketDataServiceServer).Subscribe(ctx, req.(*marketdata.MarketDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FixSimMarketDataService_Connect_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(Party)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(FixSimMarketDataServiceServer).Connect(m, &fixSimMarketDataServiceConnectServer{stream})
}

type FixSimMarketDataService_ConnectServer interface {
	Send(*marketdata.MarketDataIncrementalRefresh) error
	grpc.ServerStream
}

type fixSimMarketDataServiceConnectServer struct {
	grpc.ServerStream
}

func (x *fixSimMarketDataServiceConnectServer) Send(m *marketdata.MarketDataIncrementalRefresh) error {
	return x.ServerStream.SendMsg(m)
}

var _FixSimMarketDataService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "marketdataservice.FixSimMarketDataService",
	HandlerType: (*FixSimMarketDataServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Subscribe",
			Handler:    _FixSimMarketDataService_Subscribe_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Connect",
			Handler:       _FixSimMarketDataService_Connect_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "fixsimmarketdataservice.proto",
}