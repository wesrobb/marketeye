/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.main.PriceEntry', null, global);
goog.exportSymbol('proto.main.PricesRequest', null, global);
goog.exportSymbol('proto.main.PricesResponse', null, global);

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
proto.main.PricesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PricesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.main.PricesRequest.displayName = 'proto.main.PricesRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PricesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PricesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PricesRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.main.PricesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    exchange: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shortcode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.main.PricesRequest}
 */
proto.main.PricesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PricesRequest;
  return proto.main.PricesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PricesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PricesRequest}
 */
proto.main.PricesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortcode(value);
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
proto.main.PricesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PricesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PricesRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.main.PricesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShortcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string exchange = 1;
 * @return {string}
 */
proto.main.PricesRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.main.PricesRequest.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string shortcode = 2;
 * @return {string}
 */
proto.main.PricesRequest.prototype.getShortcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.main.PricesRequest.prototype.setShortcode = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.main.PriceEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PriceEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.main.PriceEntry.displayName = 'proto.main.PriceEntry';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PriceEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PriceEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PriceEntry} msg The msg instance to transform.
 * @return {!Object}
 */
proto.main.PriceEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    open: jspb.Message.getFieldWithDefault(msg, 1, 0),
    close: jspb.Message.getFieldWithDefault(msg, 2, 0),
    high: jspb.Message.getFieldWithDefault(msg, 3, 0),
    low: jspb.Message.getFieldWithDefault(msg, 4, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 5, 0),
    unixtimestamp: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.main.PriceEntry}
 */
proto.main.PriceEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PriceEntry;
  return proto.main.PriceEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PriceEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PriceEntry}
 */
proto.main.PriceEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOpen(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClose(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHigh(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLow(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnixtimestamp(value);
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
proto.main.PriceEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PriceEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PriceEntry} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.main.PriceEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpen();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getClose();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHigh();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLow();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUnixtimestamp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 open = 1;
 * @return {number}
 */
proto.main.PriceEntry.prototype.getOpen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.main.PriceEntry.prototype.setOpen = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 close = 2;
 * @return {number}
 */
proto.main.PriceEntry.prototype.getClose = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.main.PriceEntry.prototype.setClose = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 high = 3;
 * @return {number}
 */
proto.main.PriceEntry.prototype.getHigh = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.main.PriceEntry.prototype.setHigh = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 low = 4;
 * @return {number}
 */
proto.main.PriceEntry.prototype.getLow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.main.PriceEntry.prototype.setLow = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 volume = 5;
 * @return {number}
 */
proto.main.PriceEntry.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.main.PriceEntry.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 unixTimestamp = 6;
 * @return {number}
 */
proto.main.PriceEntry.prototype.getUnixtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.main.PriceEntry.prototype.setUnixtimestamp = function(value) {
  jspb.Message.setField(this, 6, value);
};



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
proto.main.PricesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.PricesResponse.repeatedFields_, null);
};
goog.inherits(proto.main.PricesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.main.PricesResponse.displayName = 'proto.main.PricesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.PricesResponse.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PricesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PricesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PricesResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.main.PricesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    exchange: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketopenmin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    marketclosemin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timezoneoffsetmin: jspb.Message.getFieldWithDefault(msg, 4, 0),
    priceentryintervalsec: jspb.Message.getFieldWithDefault(msg, 5, 0),
    priceentriesList: jspb.Message.toObjectList(msg.getPriceentriesList(),
    proto.main.PriceEntry.toObject, includeInstance)
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
 * @return {!proto.main.PricesResponse}
 */
proto.main.PricesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PricesResponse;
  return proto.main.PricesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PricesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PricesResponse}
 */
proto.main.PricesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarketopenmin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarketclosemin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimezoneoffsetmin(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriceentryintervalsec(value);
      break;
    case 6:
      var value = new proto.main.PriceEntry;
      reader.readMessage(value,proto.main.PriceEntry.deserializeBinaryFromReader);
      msg.addPriceentries(value);
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
proto.main.PricesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PricesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PricesResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.main.PricesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketopenmin();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMarketclosemin();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTimezoneoffsetmin();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPriceentryintervalsec();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPriceentriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.main.PriceEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional string exchange = 1;
 * @return {string}
 */
proto.main.PricesResponse.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.main.PricesResponse.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 marketOpenMin = 2;
 * @return {number}
 */
proto.main.PricesResponse.prototype.getMarketopenmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.main.PricesResponse.prototype.setMarketopenmin = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 marketCloseMin = 3;
 * @return {number}
 */
proto.main.PricesResponse.prototype.getMarketclosemin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.main.PricesResponse.prototype.setMarketclosemin = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 timezoneOffsetMin = 4;
 * @return {number}
 */
proto.main.PricesResponse.prototype.getTimezoneoffsetmin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.main.PricesResponse.prototype.setTimezoneoffsetmin = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 priceEntryIntervalSec = 5;
 * @return {number}
 */
proto.main.PricesResponse.prototype.getPriceentryintervalsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.main.PricesResponse.prototype.setPriceentryintervalsec = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * repeated PriceEntry priceEntries = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.main.PriceEntry>}
 */
proto.main.PricesResponse.prototype.getPriceentriesList = function() {
  return /** @type{!Array.<!proto.main.PriceEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.PriceEntry, 6));
};


/** @param {!Array.<!proto.main.PriceEntry>} value */
proto.main.PricesResponse.prototype.setPriceentriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.main.PriceEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.PriceEntry}
 */
proto.main.PricesResponse.prototype.addPriceentries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.main.PriceEntry, opt_index);
};


proto.main.PricesResponse.prototype.clearPriceentriesList = function() {
  this.setPriceentriesList([]);
};


goog.object.extend(exports, proto.main);