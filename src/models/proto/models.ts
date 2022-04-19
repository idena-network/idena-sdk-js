/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'models';

export interface ProtoTransaction {
  data: ProtoTransaction_Data | undefined;
  signature: Uint8Array;
  useRlp: boolean;
}

export interface ProtoTransaction_Data {
  nonce: number;
  epoch: number;
  type: number;
  to: Uint8Array;
  amount: Uint8Array;
  maxFee: Uint8Array;
  tips: Uint8Array;
  payload: Uint8Array;
}

export interface ProtoDeployContractAttachment {
  CodeHash: Uint8Array;
  args: Uint8Array[];
}

export interface ProtoCallContractAttachment {
  method: string;
  args: Uint8Array[];
}

function createBaseProtoTransaction(): ProtoTransaction {
  return { data: undefined, signature: new Uint8Array(), useRlp: false };
}

export const ProtoTransaction = {
  encode(
    message: ProtoTransaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data !== undefined) {
      ProtoTransaction_Data.encode(
        message.data,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.useRlp === true) {
      writer.uint32(24).bool(message.useRlp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtoTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): ProtoTransaction {
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

  toJSON(message: ProtoTransaction): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ProtoTransaction_Data.toJSON(message.data)
        : undefined);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.useRlp !== undefined && (obj.useRlp = message.useRlp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtoTransaction>, I>>(
    object: I,
  ): ProtoTransaction {
    const message = createBaseProtoTransaction();
    message.data =
      object.data !== undefined && object.data !== null
        ? ProtoTransaction_Data.fromPartial(object.data)
        : undefined;
    message.signature = object.signature ?? new Uint8Array();
    message.useRlp = object.useRlp ?? false;
    return message;
  },
};

function createBaseProtoTransaction_Data(): ProtoTransaction_Data {
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

export const ProtoTransaction_Data = {
  encode(
    message: ProtoTransaction_Data,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProtoTransaction_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): ProtoTransaction_Data {
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

  toJSON(message: ProtoTransaction_Data): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.epoch !== undefined && (obj.epoch = Math.round(message.epoch));
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.to !== undefined &&
      (obj.to = base64FromBytes(
        message.to !== undefined ? message.to : new Uint8Array(),
      ));
    message.amount !== undefined &&
      (obj.amount = base64FromBytes(
        message.amount !== undefined ? message.amount : new Uint8Array(),
      ));
    message.maxFee !== undefined &&
      (obj.maxFee = base64FromBytes(
        message.maxFee !== undefined ? message.maxFee : new Uint8Array(),
      ));
    message.tips !== undefined &&
      (obj.tips = base64FromBytes(
        message.tips !== undefined ? message.tips : new Uint8Array(),
      ));
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtoTransaction_Data>, I>>(
    object: I,
  ): ProtoTransaction_Data {
    const message = createBaseProtoTransaction_Data();
    message.nonce = object.nonce ?? 0;
    message.epoch = object.epoch ?? 0;
    message.type = object.type ?? 0;
    message.to = object.to ?? new Uint8Array();
    message.amount = object.amount ?? new Uint8Array();
    message.maxFee = object.maxFee ?? new Uint8Array();
    message.tips = object.tips ?? new Uint8Array();
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

function createBaseProtoDeployContractAttachment(): ProtoDeployContractAttachment {
  return { CodeHash: new Uint8Array(), args: [] };
}

export const ProtoDeployContractAttachment = {
  encode(
    message: ProtoDeployContractAttachment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.CodeHash.length !== 0) {
      writer.uint32(10).bytes(message.CodeHash);
    }
    for (const v of message.args) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProtoDeployContractAttachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoDeployContractAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CodeHash = reader.bytes();
          break;
        case 2:
          message.args.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProtoDeployContractAttachment {
    return {
      CodeHash: isSet(object.CodeHash)
        ? bytesFromBase64(object.CodeHash)
        : new Uint8Array(),
      args: Array.isArray(object?.args)
        ? object.args.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: ProtoDeployContractAttachment): unknown {
    const obj: any = {};
    message.CodeHash !== undefined &&
      (obj.CodeHash = base64FromBytes(
        message.CodeHash !== undefined ? message.CodeHash : new Uint8Array(),
      ));
    if (message.args) {
      obj.args = message.args.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.args = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtoDeployContractAttachment>, I>>(
    object: I,
  ): ProtoDeployContractAttachment {
    const message = createBaseProtoDeployContractAttachment();
    message.CodeHash = object.CodeHash ?? new Uint8Array();
    message.args = object.args?.map((e) => e) || [];
    return message;
  },
};

function createBaseProtoCallContractAttachment(): ProtoCallContractAttachment {
  return { method: '', args: [] };
}

export const ProtoCallContractAttachment = {
  encode(
    message: ProtoCallContractAttachment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.method !== '') {
      writer.uint32(10).string(message.method);
    }
    for (const v of message.args) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProtoCallContractAttachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoCallContractAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.method = reader.string();
          break;
        case 2:
          message.args.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProtoCallContractAttachment {
    return {
      method: isSet(object.method) ? String(object.method) : '',
      args: Array.isArray(object?.args)
        ? object.args.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: ProtoCallContractAttachment): unknown {
    const obj: any = {};
    message.method !== undefined && (obj.method = message.method);
    if (message.args) {
      obj.args = message.args.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.args = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtoCallContractAttachment>, I>>(
    object: I,
  ): ProtoCallContractAttachment {
    const message = createBaseProtoCallContractAttachment();
    message.method = object.method ?? '';
    message.args = object.args?.map((e) => e) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(''));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
