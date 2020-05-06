// Code generated by protoc-gen-go. DO NOT EDIT.
// source: viewservice.proto

package model

import (
	context "context"
	fmt "fmt"
	"github.com/ettec/open-trading-platform/go/model"
	proto "github.com/golang/protobuf/proto"
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

type SubscribeToOrdersWithRootOriginatorIdArgs struct {
	After                *model.Timestamp `protobuf:"bytes,1,opt,name=after,proto3" json:"after,omitempty"`
	RootOriginatorId     string           `protobuf:"bytes,2,opt,name=rootOriginatorId,proto3" json:"rootOriginatorId,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *SubscribeToOrdersWithRootOriginatorIdArgs) Reset() {
	*m = SubscribeToOrdersWithRootOriginatorIdArgs{}
}
func (m *SubscribeToOrdersWithRootOriginatorIdArgs) String() string { return proto.CompactTextString(m) }
func (*SubscribeToOrdersWithRootOriginatorIdArgs) ProtoMessage()    {}
func (*SubscribeToOrdersWithRootOriginatorIdArgs) Descriptor() ([]byte, []int) {
	return fileDescriptor_ec42da24455bcc25, []int{0}
}

func (m *SubscribeToOrdersWithRootOriginatorIdArgs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SubscribeToOrdersWithRootOriginatorIdArgs.Unmarshal(m, b)
}
func (m *SubscribeToOrdersWithRootOriginatorIdArgs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SubscribeToOrdersWithRootOriginatorIdArgs.Marshal(b, m, deterministic)
}
func (m *SubscribeToOrdersWithRootOriginatorIdArgs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SubscribeToOrdersWithRootOriginatorIdArgs.Merge(m, src)
}
func (m *SubscribeToOrdersWithRootOriginatorIdArgs) XXX_Size() int {
	return xxx_messageInfo_SubscribeToOrdersWithRootOriginatorIdArgs.Size(m)
}
func (m *SubscribeToOrdersWithRootOriginatorIdArgs) XXX_DiscardUnknown() {
	xxx_messageInfo_SubscribeToOrdersWithRootOriginatorIdArgs.DiscardUnknown(m)
}

var xxx_messageInfo_SubscribeToOrdersWithRootOriginatorIdArgs proto.InternalMessageInfo

func (m *SubscribeToOrdersWithRootOriginatorIdArgs) GetAfter() *model.Timestamp {
	if m != nil {
		return m.After
	}
	return nil
}

func (m *SubscribeToOrdersWithRootOriginatorIdArgs) GetRootOriginatorId() string {
	if m != nil {
		return m.RootOriginatorId
	}
	return ""
}

type GetOrderHistoryArgs struct {
	OrderId              string   `protobuf:"bytes,1,opt,name=orderId,proto3" json:"orderId,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetOrderHistoryArgs) Reset()         { *m = GetOrderHistoryArgs{} }
func (m *GetOrderHistoryArgs) String() string { return proto.CompactTextString(m) }
func (*GetOrderHistoryArgs) ProtoMessage()    {}
func (*GetOrderHistoryArgs) Descriptor() ([]byte, []int) {
	return fileDescriptor_ec42da24455bcc25, []int{1}
}

func (m *GetOrderHistoryArgs) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetOrderHistoryArgs.Unmarshal(m, b)
}
func (m *GetOrderHistoryArgs) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetOrderHistoryArgs.Marshal(b, m, deterministic)
}
func (m *GetOrderHistoryArgs) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetOrderHistoryArgs.Merge(m, src)
}
func (m *GetOrderHistoryArgs) XXX_Size() int {
	return xxx_messageInfo_GetOrderHistoryArgs.Size(m)
}
func (m *GetOrderHistoryArgs) XXX_DiscardUnknown() {
	xxx_messageInfo_GetOrderHistoryArgs.DiscardUnknown(m)
}

var xxx_messageInfo_GetOrderHistoryArgs proto.InternalMessageInfo

func (m *GetOrderHistoryArgs) GetOrderId() string {
	if m != nil {
		return m.OrderId
	}
	return ""
}

type Orders struct {
	Orders               []*model.Order `protobuf:"bytes,1,rep,name=orders,proto3" json:"orders,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *Orders) Reset()         { *m = Orders{} }
func (m *Orders) String() string { return proto.CompactTextString(m) }
func (*Orders) ProtoMessage()    {}
func (*Orders) Descriptor() ([]byte, []int) {
	return fileDescriptor_ec42da24455bcc25, []int{2}
}

func (m *Orders) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Orders.Unmarshal(m, b)
}
func (m *Orders) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Orders.Marshal(b, m, deterministic)
}
func (m *Orders) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Orders.Merge(m, src)
}
func (m *Orders) XXX_Size() int {
	return xxx_messageInfo_Orders.Size(m)
}
func (m *Orders) XXX_DiscardUnknown() {
	xxx_messageInfo_Orders.DiscardUnknown(m)
}

var xxx_messageInfo_Orders proto.InternalMessageInfo

func (m *Orders) GetOrders() []*model.Order {
	if m != nil {
		return m.Orders
	}
	return nil
}

func init() {
	proto.RegisterType((*SubscribeToOrdersWithRootOriginatorIdArgs)(nil), "viewservice.SubscribeToOrdersWithRootOriginatorIdArgs")
	proto.RegisterType((*GetOrderHistoryArgs)(nil), "viewservice.GetOrderHistoryArgs")
	proto.RegisterType((*Orders)(nil), "viewservice.Orders")
}

func init() { proto.RegisterFile("viewservice.proto", fileDescriptor_ec42da24455bcc25) }

var fileDescriptor_ec42da24455bcc25 = []byte{
	// 284 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x51, 0x4d, 0x4b, 0xc3, 0x40,
	0x10, 0xed, 0x2a, 0x6d, 0xe9, 0x44, 0xb0, 0xdd, 0x5e, 0x42, 0x4e, 0x21, 0xa8, 0x44, 0x0f, 0x51,
	0x22, 0x78, 0xd7, 0x8b, 0xd6, 0x4b, 0x21, 0x2d, 0x0a, 0xde, 0xf2, 0x31, 0xd6, 0x05, 0xd3, 0xa9,
	0xb3, 0x6b, 0x8b, 0x27, 0xff, 0xa0, 0x3f, 0x4a, 0xdc, 0xad, 0xd0, 0x54, 0x0f, 0x3d, 0xce, 0x7b,
	0xbb, 0xef, 0xbd, 0x79, 0x03, 0x83, 0xa5, 0xc2, 0x95, 0x46, 0x5e, 0xaa, 0x12, 0x93, 0x05, 0x93,
	0x21, 0xe9, 0x6d, 0x40, 0xc1, 0xa0, 0xa6, 0x0a, 0x5f, 0x4b, 0xaa, 0x6b, 0x9a, 0x3b, 0x3e, 0xf0,
	0x88, 0x2b, 0x64, 0x37, 0x44, 0x9f, 0x70, 0x3a, 0x79, 0x2f, 0x74, 0xc9, 0xaa, 0xc0, 0x29, 0x8d,
	0x7f, 0x18, 0xfd, 0xa8, 0xcc, 0x4b, 0x46, 0x64, 0xc6, 0xac, 0x66, 0x6a, 0x9e, 0x1b, 0xe2, 0x51,
	0x75, 0xcd, 0x33, 0x2d, 0x4f, 0xa0, 0x9d, 0x3f, 0x1b, 0x64, 0x5f, 0x84, 0x22, 0xf6, 0xd2, 0x7e,
	0x62, 0xc5, 0x93, 0xa9, 0xaa, 0x51, 0x9b, 0xbc, 0x5e, 0x64, 0x8e, 0x96, 0x67, 0xd0, 0xe7, 0xad,
	0xff, 0xfe, 0x5e, 0x28, 0xe2, 0x5e, 0xf6, 0x07, 0x8f, 0xce, 0x61, 0x78, 0x8b, 0xc6, 0x1a, 0xdf,
	0x29, 0x6d, 0x88, 0x3f, 0xac, 0x95, 0x0f, 0x5d, 0x1b, 0x73, 0x54, 0x59, 0xb3, 0x5e, 0xf6, 0x3b,
	0x46, 0x09, 0x74, 0x5c, 0x4c, 0x79, 0x04, 0x1d, 0x0b, 0x6a, 0x5f, 0x84, 0xfb, 0xb1, 0x97, 0x1e,
	0xac, 0xf3, 0x58, 0x3a, 0x5b, 0x73, 0xe9, 0x97, 0x00, 0xef, 0x41, 0xe1, 0x6a, 0xe2, 0x1a, 0x91,
	0x6f, 0x70, 0xbc, 0xd3, 0xc6, 0xf2, 0x2a, 0xd9, 0xec, 0x76, 0xe7, 0x96, 0x82, 0x46, 0x8c, 0xa8,
	0x75, 0x21, 0xe4, 0x3d, 0x1c, 0x6e, 0xed, 0x28, 0xc3, 0x86, 0xf8, 0x3f, 0x0d, 0x04, 0xc3, 0xc6,
	0x0b, 0xe7, 0x19, 0xb5, 0x6e, 0xba, 0x4f, 0x6d, 0x2b, 0x5f, 0x74, 0xec, 0x01, 0x2f, 0xbf, 0x03,
	0x00, 0x00, 0xff, 0xff, 0xd3, 0x57, 0xb4, 0xc0, 0x02, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ViewServiceClient is the client API for ViewService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ViewServiceClient interface {
	SubscribeToOrdersWithRootOriginatorId(ctx context.Context, in *SubscribeToOrdersWithRootOriginatorIdArgs, opts ...grpc.CallOption) (ViewService_SubscribeToOrdersWithRootOriginatorIdClient, error)
	GetOrderHistory(ctx context.Context, in *GetOrderHistoryArgs, opts ...grpc.CallOption) (*Orders, error)
}

type viewServiceClient struct {
	cc *grpc.ClientConn
}

func NewViewServiceClient(cc *grpc.ClientConn) ViewServiceClient {
	return &viewServiceClient{cc}
}

func (c *viewServiceClient) SubscribeToOrdersWithRootOriginatorId(ctx context.Context, in *SubscribeToOrdersWithRootOriginatorIdArgs, opts ...grpc.CallOption) (ViewService_SubscribeToOrdersWithRootOriginatorIdClient, error) {
	stream, err := c.cc.NewStream(ctx, &_ViewService_serviceDesc.Streams[0], "/viewservice.ViewService/SubscribeToOrdersWithRootOriginatorId", opts...)
	if err != nil {
		return nil, err
	}
	x := &viewServiceSubscribeToOrdersWithRootOriginatorIdClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ViewService_SubscribeToOrdersWithRootOriginatorIdClient interface {
	Recv() (*model.Order, error)
	grpc.ClientStream
}

type viewServiceSubscribeToOrdersWithRootOriginatorIdClient struct {
	grpc.ClientStream
}

func (x *viewServiceSubscribeToOrdersWithRootOriginatorIdClient) Recv() (*model.Order, error) {
	m := new(model.Order)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *viewServiceClient) GetOrderHistory(ctx context.Context, in *GetOrderHistoryArgs, opts ...grpc.CallOption) (*Orders, error) {
	out := new(Orders)
	err := c.cc.Invoke(ctx, "/viewservice.ViewService/GetOrderHistory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ViewServiceServer is the server API for ViewService service.
type ViewServiceServer interface {
	SubscribeToOrdersWithRootOriginatorId(*SubscribeToOrdersWithRootOriginatorIdArgs, ViewService_SubscribeToOrdersWithRootOriginatorIdServer) error
	GetOrderHistory(context.Context, *GetOrderHistoryArgs) (*Orders, error)
}

// UnimplementedViewServiceServer can be embedded to have forward compatible implementations.
type UnimplementedViewServiceServer struct {
}

func (*UnimplementedViewServiceServer) SubscribeToOrdersWithRootOriginatorId(req *SubscribeToOrdersWithRootOriginatorIdArgs, srv ViewService_SubscribeToOrdersWithRootOriginatorIdServer) error {
	return status.Errorf(codes.Unimplemented, "method SubscribeToOrdersWithRootOriginatorId not implemented")
}
func (*UnimplementedViewServiceServer) GetOrderHistory(ctx context.Context, req *GetOrderHistoryArgs) (*Orders, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrderHistory not implemented")
}

func RegisterViewServiceServer(s *grpc.Server, srv ViewServiceServer) {
	s.RegisterService(&_ViewService_serviceDesc, srv)
}

func _ViewService_SubscribeToOrdersWithRootOriginatorId_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(SubscribeToOrdersWithRootOriginatorIdArgs)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ViewServiceServer).SubscribeToOrdersWithRootOriginatorId(m, &viewServiceSubscribeToOrdersWithRootOriginatorIdServer{stream})
}

type ViewService_SubscribeToOrdersWithRootOriginatorIdServer interface {
	Send(*model.Order) error
	grpc.ServerStream
}

type viewServiceSubscribeToOrdersWithRootOriginatorIdServer struct {
	grpc.ServerStream
}

func (x *viewServiceSubscribeToOrdersWithRootOriginatorIdServer) Send(m *model.Order) error {
	return x.ServerStream.SendMsg(m)
}

func _ViewService_GetOrderHistory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOrderHistoryArgs)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ViewServiceServer).GetOrderHistory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viewservice.ViewService/GetOrderHistory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ViewServiceServer).GetOrderHistory(ctx, req.(*GetOrderHistoryArgs))
	}
	return interceptor(ctx, in, info, handler)
}

var _ViewService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "viewservice.ViewService",
	HandlerType: (*ViewServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetOrderHistory",
			Handler:    _ViewService_GetOrderHistory_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "SubscribeToOrdersWithRootOriginatorId",
			Handler:       _ViewService_SubscribeToOrdersWithRootOriginatorId_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "viewservice.proto",
}
