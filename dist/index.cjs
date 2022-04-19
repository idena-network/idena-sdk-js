/*!
 * idena-sdk-js v0.0.1
 * (c) idena
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Long = require('long');
var _m0 = require('protobufjs/minimal');
var BN = require('bn.js');
var sha3 = require('js-sha3');
var secp256k1 = require('secp256k1');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var Long__default = /*#__PURE__*/_interopDefaultLegacy(Long);
var _m0__namespace = /*#__PURE__*/_interopNamespace(_m0);
var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);
var sha3__default = /*#__PURE__*/_interopDefaultLegacy(sha3);
var secp256k1__default = /*#__PURE__*/_interopDefaultLegacy(secp256k1);

/* eslint-disable */
function createBaseProtoTransaction() {
    return { data: undefined, signature: new Uint8Array(), useRlp: false };
}
const ProtoTransaction = {
    encode(message, writer = _m0__namespace.Writer.create()) {
        if (message.data !== undefined) {
            ProtoTransaction_Data.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        if (message.useRlp === true) {
            writer.uint32(24).bool(message.useRlp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0__namespace.Reader ? input : new _m0__namespace.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtoTransaction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = ProtoTransaction_Data.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                case 3:
                    message.useRlp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: isSet(object.data)
                ? ProtoTransaction_Data.fromJSON(object.data)
                : undefined,
            signature: isSet(object.signature)
                ? bytesFromBase64(object.signature)
                : new Uint8Array(),
            useRlp: isSet(object.useRlp) ? Boolean(object.useRlp) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = message.data
                ? ProtoTransaction_Data.toJSON(message.data)
                : undefined);
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.useRlp !== undefined && (obj.useRlp = message.useRlp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProtoTransaction();
        message.data =
            object.data !== undefined && object.data !== null
                ? ProtoTransaction_Data.fromPartial(object.data)
                : undefined;
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.useRlp = (_b = object.useRlp) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseProtoTransaction_Data() {
    return {
        nonce: 0,
        epoch: 0,
        type: 0,
        to: new Uint8Array(),
        amount: new Uint8Array(),
        maxFee: new Uint8Array(),
        tips: new Uint8Array(),
        payload: new Uint8Array(),
    };
}
const ProtoTransaction_Data = {
    encode(message, writer = _m0__namespace.Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint32(message.nonce);
        }
        if (message.epoch !== 0) {
            writer.uint32(16).uint32(message.epoch);
        }
        if (message.type !== 0) {
            writer.uint32(24).uint32(message.type);
        }
        if (message.to.length !== 0) {
            writer.uint32(34).bytes(message.to);
        }
        if (message.amount.length !== 0) {
            writer.uint32(42).bytes(message.amount);
        }
        if (message.maxFee.length !== 0) {
            writer.uint32(50).bytes(message.maxFee);
        }
        if (message.tips.length !== 0) {
            writer.uint32(58).bytes(message.tips);
        }
        if (message.payload.length !== 0) {
            writer.uint32(66).bytes(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0__namespace.Reader ? input : new _m0__namespace.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtoTransaction_Data();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint32();
                    break;
                case 2:
                    message.epoch = reader.uint32();
                    break;
                case 3:
                    message.type = reader.uint32();
                    break;
                case 4:
                    message.to = reader.bytes();
                    break;
                case 5:
                    message.amount = reader.bytes();
                    break;
                case 6:
                    message.maxFee = reader.bytes();
                    break;
                case 7:
                    message.tips = reader.bytes();
                    break;
                case 8:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            type: isSet(object.type) ? Number(object.type) : 0,
            to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
            amount: isSet(object.amount)
                ? bytesFromBase64(object.amount)
                : new Uint8Array(),
            maxFee: isSet(object.maxFee)
                ? bytesFromBase64(object.maxFee)
                : new Uint8Array(),
            tips: isSet(object.tips)
                ? bytesFromBase64(object.tips)
                : new Uint8Array(),
            payload: isSet(object.payload)
                ? bytesFromBase64(object.payload)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
        message.epoch !== undefined && (obj.epoch = Math.round(message.epoch));
        message.type !== undefined && (obj.type = Math.round(message.type));
        message.to !== undefined &&
            (obj.to = base64FromBytes(message.to !== undefined ? message.to : new Uint8Array()));
        message.amount !== undefined &&
            (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
        message.maxFee !== undefined &&
            (obj.maxFee = base64FromBytes(message.maxFee !== undefined ? message.maxFee : new Uint8Array()));
        message.tips !== undefined &&
            (obj.tips = base64FromBytes(message.tips !== undefined ? message.tips : new Uint8Array()));
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseProtoTransaction_Data();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : 0;
        message.epoch = (_b = object.epoch) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.to = (_d = object.to) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.amount = (_e = object.amount) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.maxFee = (_f = object.maxFee) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.tips = (_g = object.tips) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.payload = (_h = object.payload) !== null && _h !== void 0 ? _h : new Uint8Array();
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(''));
}
if (_m0__namespace.util.Long !== Long__default["default"]) {
    _m0__namespace.util.Long = Long__default["default"];
    _m0__namespace.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}

function isHexPrefixed(str) {
    return str.slice(0, 2) === '0x';
}
function stripHexPrefix(str) {
    if (typeof str !== 'string') {
        return str;
    }
    return isHexPrefixed(str) ? str.slice(2) : str;
}
function hexToUint8Array(hexString) {
    const str = stripHexPrefix(hexString);
    const arrayBuffer = new Uint8Array(str.length / 2);
    for (let i = 0; i < str.length; i += 2) {
        const byteValue = parseInt(str.substring(i, i + 2), 16);
        arrayBuffer[i / 2] = byteValue;
    }
    return arrayBuffer;
}
function toHexString(byteArray, withPrefix = false) {
    return ((withPrefix ? '0x' : '') +
        Array.from(byteArray, function (byte) {
            return `0${(byte & 0xff).toString(16)}`.slice(-2);
        }).join(''));
}

function getKeyArray(key) {
    return typeof key === 'string' ? hexToUint8Array(key) : new Uint8Array(key);
}
function privateKeyToPublicKey(key, withPrefix = false) {
    const pubKey = secp256k1__default["default"].publicKeyCreate(getKeyArray(key), false);
    return toHexString(pubKey, withPrefix);
}
function publicKeyToAddress(publicKey, withPrefix = true) {
    return toHexString(sha3__default["default"].keccak_256.array(getKeyArray(publicKey).slice(1)).slice(12), withPrefix);
}
function privateKeyToAddress(key, withPrefix = true) {
    if (!key) {
        return '0x0000000000000000000000000000000000000000';
    }
    const pubKey = secp256k1__default["default"].publicKeyCreate(getKeyArray(key), false);
    return publicKeyToAddress(pubKey, withPrefix);
}
function sender(data, signature, withPrefix = true) {
    const hash = sha3__default["default"].keccak_256.array(data);
    const pubKey = secp256k1__default["default"].ecdsaRecover(new Uint8Array(signature).slice(0, -1), Number(signature[signature.length - 1]), new Uint8Array(hash), false);
    return publicKeyToAddress(pubKey, withPrefix);
}
function sign(data, key) {
    const hash = sha3__default["default"].keccak_256.array(data);
    const { signature, recid } = secp256k1__default["default"].ecdsaSign(new Uint8Array(hash), typeof key === 'string' ? hexToUint8Array(key) : new Uint8Array(key));
    return new Uint8Array([...signature, recid]);
}

exports.TransactionType = void 0;
(function (TransactionType) {
    TransactionType[TransactionType["SendTx"] = 0] = "SendTx";
    TransactionType[TransactionType["ActivationTx"] = 1] = "ActivationTx";
    TransactionType[TransactionType["InviteTx"] = 2] = "InviteTx";
    TransactionType[TransactionType["KillTx"] = 3] = "KillTx";
    TransactionType[TransactionType["SubmitFlipTx"] = 4] = "SubmitFlipTx";
    TransactionType[TransactionType["SubmitAnswersHashTx"] = 5] = "SubmitAnswersHashTx";
    TransactionType[TransactionType["SubmitShortAnswersTx"] = 6] = "SubmitShortAnswersTx";
    TransactionType[TransactionType["SubmitLongAnswersTx"] = 7] = "SubmitLongAnswersTx";
    TransactionType[TransactionType["EvidenceTx"] = 8] = "EvidenceTx";
    TransactionType[TransactionType["OnlineStatusTx"] = 9] = "OnlineStatusTx";
    TransactionType[TransactionType["KillInviteeTx"] = 10] = "KillInviteeTx";
    TransactionType[TransactionType["ChangeGodAddressTx"] = 11] = "ChangeGodAddressTx";
    TransactionType[TransactionType["BurnTx"] = 12] = "BurnTx";
    TransactionType[TransactionType["ChangeProfileTx"] = 13] = "ChangeProfileTx";
    TransactionType[TransactionType["DeleteFlipTx"] = 14] = "DeleteFlipTx";
    TransactionType[TransactionType["DeployContractTx"] = 15] = "DeployContractTx";
    TransactionType[TransactionType["CallContractTx"] = 16] = "CallContractTx";
    TransactionType[TransactionType["TerminateContractTx"] = 17] = "TerminateContractTx";
    TransactionType[TransactionType["DelegateTx"] = 18] = "DelegateTx";
    TransactionType[TransactionType["UndelegateTx"] = 19] = "UndelegateTx";
    TransactionType[TransactionType["KillDelegatorTx"] = 20] = "KillDelegatorTx";
    TransactionType[TransactionType["StoreToIpfsTx"] = 21] = "StoreToIpfsTx";
})(exports.TransactionType || (exports.TransactionType = {}));
class Transaction {
    constructor(init) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this._nonce = 0;
        this._epoch = 0;
        this._type = 0;
        this._to = null;
        this._amount = null;
        this._maxFee = null;
        this._tips = null;
        this._payload = null;
        this._signature = null;
        this.nonce = (_a = init === null || init === void 0 ? void 0 : init.nonce) !== null && _a !== void 0 ? _a : 0;
        this.epoch = (_b = init === null || init === void 0 ? void 0 : init.epoch) !== null && _b !== void 0 ? _b : 0;
        this.type = (_c = init === null || init === void 0 ? void 0 : init.type) !== null && _c !== void 0 ? _c : 0;
        this.to = (_d = init === null || init === void 0 ? void 0 : init.to) !== null && _d !== void 0 ? _d : null;
        this.amount = (_e = init === null || init === void 0 ? void 0 : init.amount) !== null && _e !== void 0 ? _e : null;
        this.maxFee = (_f = init === null || init === void 0 ? void 0 : init.maxFee) !== null && _f !== void 0 ? _f : null;
        this.tips = (_g = init === null || init === void 0 ? void 0 : init.tips) !== null && _g !== void 0 ? _g : null;
        this.payload = (_h = init === null || init === void 0 ? void 0 : init.payload) !== null && _h !== void 0 ? _h : null;
    }
    set nonce(nonce) {
        this._nonce = nonce;
    }
    get nonce() {
        return this._nonce;
    }
    set epoch(epoch) {
        this._epoch = epoch;
    }
    get epoch() {
        return this._epoch;
    }
    set type(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
    set to(to) {
        if (to === null)
            this._to = null;
        else if (to instanceof Uint8Array)
            this._to = to;
        else
            this._to = hexToUint8Array(to);
    }
    get to() {
        return this._to ? toHexString(this._to) : null;
    }
    set amount(amount) {
        this._amount = amount !== null ? new BN__default["default"](amount) : null;
    }
    get amount() {
        return this._amount;
    }
    set maxFee(maxFee) {
        this._maxFee = maxFee !== null ? new BN__default["default"](maxFee) : null;
    }
    get maxFee() {
        return this._maxFee;
    }
    set tips(tips) {
        this._tips = tips !== null ? new BN__default["default"](tips) : null;
    }
    get tips() {
        return this._tips;
    }
    set payload(payload) {
        this._payload = payload;
    }
    get payload() {
        return this._payload ? new Uint8Array(this._payload) : null;
    }
    get signature() {
        return this._signature;
    }
    get hash() {
        return Buffer.from(sha3__default["default"].keccak_256.array(this.toBytes())).toString('hex');
    }
    get sender() {
        if (!this._signature)
            return null;
        const data = ProtoTransaction_Data.encode(this._createProtoTxData()).finish();
        return sender(data, this._signature, true);
    }
    fromBytes(bytes) {
        const protoTx = ProtoTransaction.decode(bytes);
        const protoTxData = protoTx.data;
        if (protoTxData) {
            this.nonce = protoTxData.nonce;
            this.epoch = protoTxData.epoch;
            this.type = protoTxData.type;
            this.to = protoTxData.to;
            this.amount = protoTxData.amount;
            this.maxFee = protoTxData.maxFee;
            this.tips = protoTxData.tips;
            this.payload = protoTxData.payload;
        }
        return this;
    }
    toBytes() {
        var _a;
        const tx = ProtoTransaction.fromPartial({
            data: this._createProtoTxData(),
            signature: (_a = this._signature) !== null && _a !== void 0 ? _a : new Uint8Array(),
        });
        return ProtoTransaction.encode(tx).finish();
    }
    sign(key) {
        const data = ProtoTransaction_Data.encode(this._createProtoTxData()).finish();
        this._signature = sign(data, key);
        return this;
    }
    _createProtoTxData() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ProtoTransaction_Data.fromPartial({
            epoch: this._epoch,
            nonce: this._nonce,
            type: this._type,
            to: (_a = this._to) !== null && _a !== void 0 ? _a : new Uint8Array(),
            amount: (_c = (_b = this._amount) === null || _b === void 0 ? void 0 : _b.toBuffer()) !== null && _c !== void 0 ? _c : new Uint8Array(),
            maxFee: (_e = (_d = this._maxFee) === null || _d === void 0 ? void 0 : _d.toBuffer()) !== null && _e !== void 0 ? _e : new Uint8Array(),
            tips: (_g = (_f = this._tips) === null || _f === void 0 ? void 0 : _f.toBuffer()) !== null && _g !== void 0 ? _g : new Uint8Array(),
            payload: (_h = this._payload) !== null && _h !== void 0 ? _h : new Uint8Array(),
        });
    }
}

exports.Transaction = Transaction;
exports.hexToUint8Array = hexToUint8Array;
exports.privateKeyToAddress = privateKeyToAddress;
exports.privateKeyToPublicKey = privateKeyToPublicKey;
exports.publicKeyToAddress = publicKeyToAddress;
exports.sender = sender;
exports.sign = sign;
exports.stripHexPrefix = stripHexPrefix;
exports.toHexString = toHexString;
//# sourceMappingURL=index.cjs.map
