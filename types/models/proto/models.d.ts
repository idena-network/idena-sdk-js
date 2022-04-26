import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "models";
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
export interface ProtoTerminateContractAttachment {
    args: Uint8Array[];
}
export declare const ProtoTransaction: {
    encode(message: ProtoTransaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProtoTransaction;
    fromPartial<I extends {
        data?: {
            nonce?: number;
            epoch?: number;
            type?: number;
            to?: Uint8Array;
            amount?: Uint8Array;
            maxFee?: Uint8Array;
            tips?: Uint8Array;
            payload?: Uint8Array;
        } | undefined;
        signature?: Uint8Array;
        useRlp?: boolean;
    } & {
        data?: ({
            nonce?: number;
            epoch?: number;
            type?: number;
            to?: Uint8Array;
            amount?: Uint8Array;
            maxFee?: Uint8Array;
            tips?: Uint8Array;
            payload?: Uint8Array;
        } & {
            nonce?: number;
            epoch?: number;
            type?: number;
            to?: Uint8Array;
            amount?: Uint8Array;
            maxFee?: Uint8Array;
            tips?: Uint8Array;
            payload?: Uint8Array;
        } & Record<Exclude<keyof I["data"], keyof ProtoTransaction_Data>, never>) | undefined;
        signature?: Uint8Array;
        useRlp?: boolean;
    } & Record<Exclude<keyof I, keyof ProtoTransaction>, never>>(object: I): ProtoTransaction;
};
export declare const ProtoTransaction_Data: {
    encode(message: ProtoTransaction_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProtoTransaction_Data;
    fromPartial<I extends {
        nonce?: number;
        epoch?: number;
        type?: number;
        to?: Uint8Array;
        amount?: Uint8Array;
        maxFee?: Uint8Array;
        tips?: Uint8Array;
        payload?: Uint8Array;
    } & {
        nonce?: number;
        epoch?: number;
        type?: number;
        to?: Uint8Array;
        amount?: Uint8Array;
        maxFee?: Uint8Array;
        tips?: Uint8Array;
        payload?: Uint8Array;
    } & Record<Exclude<keyof I, keyof ProtoTransaction_Data>, never>>(object: I): ProtoTransaction_Data;
};
export declare const ProtoDeployContractAttachment: {
    encode(message: ProtoDeployContractAttachment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProtoDeployContractAttachment;
    fromPartial<I extends {
        CodeHash?: Uint8Array;
        args?: Uint8Array[];
    } & {
        CodeHash?: Uint8Array;
        args?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["args"], keyof Uint8Array[]>, never>;
    } & Record<Exclude<keyof I, keyof ProtoDeployContractAttachment>, never>>(object: I): ProtoDeployContractAttachment;
};
export declare const ProtoCallContractAttachment: {
    encode(message: ProtoCallContractAttachment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProtoCallContractAttachment;
    fromPartial<I extends {
        method?: string;
        args?: Uint8Array[];
    } & {
        method?: string;
        args?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["args"], keyof Uint8Array[]>, never>;
    } & Record<Exclude<keyof I, keyof ProtoCallContractAttachment>, never>>(object: I): ProtoCallContractAttachment;
};
export declare const ProtoTerminateContractAttachment: {
    encode(message: ProtoTerminateContractAttachment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProtoTerminateContractAttachment;
    fromPartial<I extends {
        args?: Uint8Array[];
    } & {
        args?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["args"], keyof Uint8Array[]>, never>;
    } & Record<Exclude<keyof I, "args">, never>>(object: I): ProtoTerminateContractAttachment;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=models.d.ts.map