export class JsonBlock {
  constructor(
    public coinbase: string,
    public hash: string,
    public parentHash: string,
    public height: number,
    public root: string,
    public identityRoot: string,
    public ipfsCid: string,
    public transactions: string[],
    public flags: string[],
    public isEmpty: boolean,
    public offlineAddress: string,
  ) {}
}

export class JsonTransaction {
  constructor(
    public hash: string,
    public type: string,
    public from: string,
    public to: string,
    public amount: string,
    public tips: string,
    public maxFee: string,
    public nonce: number,
    public epoch: number,
    public payload: string,
    public blockHash: string,
    public usedFee: string,
    public timestamp: number,
  ) {}
}
