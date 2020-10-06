/* eslint-disable */
// source: orderdataservice.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var modelcommon_pb = require('./modelcommon_pb.js');
goog.object.extend(proto, modelcommon_pb);
var order_pb = require('./order_pb.js');
goog.object.extend(proto, order_pb);
goog.exportSymbol('proto.orderdataservice.GetOrderHistoryArgs', null, global);
goog.exportSymbol('proto.orderdataservice.OrderHistory', null, global);
goog.exportSymbol('proto.orderdataservice.OrderUpdate', null, global);
goog.exportSymbol('proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.displayName = 'proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.orderdataservice.GetOrderHistoryArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.orderdataservice.GetOrderHistoryArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.orderdataservice.GetOrderHistoryArgs.displayName = 'proto.orderdataservice.GetOrderHistoryArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.orderdataservice.OrderUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.orderdataservice.OrderUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.orderdataservice.OrderUpdate.displayName = 'proto.orderdataservice.OrderUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.orderdataservice.OrderHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.orderdataservice.OrderHistory.repeatedFields_, null);
};
goog.inherits(proto.orderdataservice.OrderHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.orderdataservice.OrderHistory.displayName = 'proto.orderdataservice.OrderHistory';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootoriginatorid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs}
 */
proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs;
  return proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs}
 */
proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRootoriginatorid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRootoriginatorid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string rootOriginatorId = 2;
 * @return {string}
 */
proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.prototype.getRootoriginatorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs} returns this
 */
proto.orderdataservice.SubscribeToOrdersWithRootOriginatorIdArgs.prototype.setRootoriginatorid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.orderdataservice.GetOrderHistoryArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.orderdataservice.GetOrderHistoryArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.orderdataservice.GetOrderHistoryArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderdataservice.GetOrderHistoryArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    toversion: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.orderdataservice.GetOrderHistoryArgs}
 */
proto.orderdataservice.GetOrderHistoryArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.orderdataservice.GetOrderHistoryArgs;
  return proto.orderdataservice.GetOrderHistoryArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.orderdataservice.GetOrderHistoryArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.orderdataservice.GetOrderHistoryArgs}
 */
proto.orderdataservice.GetOrderHistoryArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setToversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.orderdataservice.GetOrderHistoryArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.orderdataservice.GetOrderHistoryArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.orderdataservice.GetOrderHistoryArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderdataservice.GetOrderHistoryArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToversion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string orderId = 1;
 * @return {string}
 */
proto.orderdataservice.GetOrderHistoryArgs.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.orderdataservice.GetOrderHistoryArgs} returns this
 */
proto.orderdataservice.GetOrderHistoryArgs.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 toVersion = 2;
 * @return {number}
 */
proto.orderdataservice.GetOrderHistoryArgs.prototype.getToversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.orderdataservice.GetOrderHistoryArgs} returns this
 */
proto.orderdataservice.GetOrderHistoryArgs.prototype.setToversion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.orderdataservice.OrderUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.orderdataservice.OrderUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.orderdataservice.OrderUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderdataservice.OrderUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && order_pb.Order.toObject(includeInstance, f),
    time: (f = msg.getTime()) && modelcommon_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.orderdataservice.OrderUpdate}
 */
proto.orderdataservice.OrderUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.orderdataservice.OrderUpdate;
  return proto.orderdataservice.OrderUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.orderdataservice.OrderUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.orderdataservice.OrderUpdate}
 */
proto.orderdataservice.OrderUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new order_pb.Order;
      reader.readMessage(value,order_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 2:
      var value = new modelcommon_pb.Timestamp;
      reader.readMessage(value,modelcommon_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.orderdataservice.OrderUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.orderdataservice.OrderUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.orderdataservice.OrderUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderdataservice.OrderUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      order_pb.Order.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modelcommon_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional model.Order order = 1;
 * @return {?proto.model.Order}
 */
proto.orderdataservice.OrderUpdate.prototype.getOrder = function() {
  return /** @type{?proto.model.Order} */ (
    jspb.Message.getWrapperField(this, order_pb.Order, 1));
};


/**
 * @param {?proto.model.Order|undefined} value
 * @return {!proto.orderdataservice.OrderUpdate} returns this
*/
proto.orderdataservice.OrderUpdate.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.orderdataservice.OrderUpdate} returns this
 */
proto.orderdataservice.OrderUpdate.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.orderdataservice.OrderUpdate.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional model.Timestamp time = 2;
 * @return {?proto.model.Timestamp}
 */
proto.orderdataservice.OrderUpdate.prototype.getTime = function() {
  return /** @type{?proto.model.Timestamp} */ (
    jspb.Message.getWrapperField(this, modelcommon_pb.Timestamp, 2));
};


/**
 * @param {?proto.model.Timestamp|undefined} value
 * @return {!proto.orderdataservice.OrderUpdate} returns this
*/
proto.orderdataservice.OrderUpdate.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.orderdataservice.OrderUpdate} returns this
 */
proto.orderdataservice.OrderUpdate.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.orderdataservice.OrderUpdate.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.orderdataservice.OrderHistory.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.orderdataservice.OrderHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.orderdataservice.OrderHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.orderdataservice.OrderHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderdataservice.OrderHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    updatesList: jspb.Message.toObjectList(msg.getUpdatesList(),
    proto.orderdataservice.OrderUpdate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.orderdataservice.OrderHistory}
 */
proto.orderdataservice.OrderHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.orderdataservice.OrderHistory;
  return proto.orderdataservice.OrderHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.orderdataservice.OrderHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.orderdataservice.OrderHistory}
 */
proto.orderdataservice.OrderHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.orderdataservice.OrderUpdate;
      reader.readMessage(value,proto.orderdataservice.OrderUpdate.deserializeBinaryFromReader);
      msg.addUpdates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.orderdataservice.OrderHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.orderdataservice.OrderHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.orderdataservice.OrderHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.orderdataservice.OrderHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.orderdataservice.OrderUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OrderUpdate updates = 1;
 * @return {!Array<!proto.orderdataservice.OrderUpdate>}
 */
proto.orderdataservice.OrderHistory.prototype.getUpdatesList = function() {
  return /** @type{!Array<!proto.orderdataservice.OrderUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.orderdataservice.OrderUpdate, 1));
};


/**
 * @param {!Array<!proto.orderdataservice.OrderUpdate>} value
 * @return {!proto.orderdataservice.OrderHistory} returns this
*/
proto.orderdataservice.OrderHistory.prototype.setUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.orderdataservice.OrderUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.orderdataservice.OrderUpdate}
 */
proto.orderdataservice.OrderHistory.prototype.addUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.orderdataservice.OrderUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.orderdataservice.OrderHistory} returns this
 */
proto.orderdataservice.OrderHistory.prototype.clearUpdatesList = function() {
  return this.setUpdatesList([]);
};


goog.object.extend(exports, proto.orderdataservice);