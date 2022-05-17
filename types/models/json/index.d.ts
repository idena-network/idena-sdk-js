export declare class JsonBlock {
    coinbase: string;
    hash: string;
    parentHash: string;
    height: number;
    root: string;
    identityRoot: string;
    ipfsCid: string;
    transactions: string[];
    flags: string[];
    isEmpty: boolean;
    offlineAddress: string;
    constructor(coinbase: string, hash: string, parentHash: string, height: number, root: string, identityRoot: string, ipfsCid: string, transactions: string[], flags: string[], isEmpty: boolean, offlineAddress: string);
}
export declare class JsonTransaction {
    hash: string;
    type: string;
    from: string;
    to: string;
    amount: string;
    tips: string;
    maxFee: string;
    nonce: number;
    epoch: number;
    payload: string;
    blockHash: string;
    usedFee: string;
    timestamp: number;
    constructor(hash: string, type: string, from: string, to: string, amount: string, tips: string, maxFee: string, nonce: number, epoch: number, payload: string, blockHash: string, usedFee: string, timestamp: number);
}
//# sourceMappingURL=index.d.ts.map