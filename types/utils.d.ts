import BN from 'bn.js';
export declare const DNA_BASE = "1000000000000000000";
export declare function stripHexPrefix(str: string): string;
export declare function hexToUint8Array(hexString: string): Uint8Array;
export declare function toHexString(byteArray: Uint8Array | number[], withPrefix?: boolean): string;
export declare function floatToDna(value: string): BN;
export declare function dnaToFloat(value: BN | string): string;
//# sourceMappingURL=utils.d.ts.map