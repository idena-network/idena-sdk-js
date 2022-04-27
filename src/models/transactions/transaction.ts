import { ProtoTransaction, ProtoTransaction_Data } from '../proto/models';
import BN from 'bn.js';
import { hexToUint8Array, toHexString } from '../../utils';
import sha3 from 'js-sha3';
import { sender, sign } from '../../crypto';

export enum TransactionType {
  SendTx = 0x0,
  ActivationTx = 0x1,
  InviteTx = 0x2,
  KillTx = 0x3,
  SubmitFlipTx = 0x4,
  SubmitAnswersHashTx = 0x5,
  SubmitShortAnswersTx = 0x6,
  SubmitLongAnswersTx = 0x7,
  EvidenceTx = 0x8,
  OnlineStatusTx = 0x9,
  KillInviteeTx = 0xa,
  ChangeGodAddressTx = 0xb,
  BurnTx = 0xc,
  ChangeProfileTx = 0xd,
  DeleteFlipTx = 0xe,
  DeployContractTx = 0xf,
  CallContractTx = 0x10,
  TerminateContractTx = 0x11,
  DelegateTx = 0x12,
  UndelegateTx = 0x13,
  KillDelegatorTx = 0x14,
  StoreToIpfsTx = 0x15,
}

export class Transaction {
  private _nonce = 0;
  private _epoch = 0;
  private _type: TransactionType | number = 0;
  private _to: Uint8Array | null = null;
  private _amount: BN | null = null;
  private _maxFee: BN | null = null;
  private _tips: BN | null = null;
  private _payload: Uint8Array | null = null;

  private _signature: Uint8Array | null = null;

  constructor(
    init?: Partial<{
      nonce: number;
      epoch: number;
      type: TransactionType;
      to: Uint8Array | string;
      amount: Uint8Array | string | number | BN;
      maxFee: Uint8Array | string | number | BN;
      tips: Uint8Array | string | number | BN;
      payload: Uint8Array;
    }>,
  ) {
    this.nonce = init?.nonce ?? 0;
    this.epoch = init?.epoch ?? 0;
    this.type = init?.type ?? 0;
    this.to = init?.to ?? null;
    this.amount = init?.amount ?? null;
    this.maxFee = init?.maxFee ?? null;
    this.tips = init?.tips ?? null;
    this.payload = init?.payload ?? null;
  }

  public set nonce(nonce: number) {
    this._nonce = nonce;
  }

  public get nonce(): number {
    return this._nonce;
  }

  public set epoch(epoch: number) {
    this._epoch = epoch;
  }

  public get epoch(): number {
    return this._epoch;
  }

  public set type(type: TransactionType) {
    this._type = type;
  }

  public get type(): number {
    return this._type;
  }

  public set to(to: string | Uint8Array | null) {
    if (to === null) this._to = null;
    else if (to instanceof Uint8Array) this._to = to;
    else this._to = hexToUint8Array(to);
  }

  public get to(): string | null {
    return this._to ? toHexString(this._to) : null;
  }

  public set amount(amount: number | string | BN | Uint8Array | null) {
    this._amount = amount !== null ? new BN(amount) : null;
  }

  public get amount(): BN | null {
    return this._amount;
  }

  public set maxFee(maxFee: number | string | BN | Uint8Array | null) {
    this._maxFee = maxFee !== null ? new BN(maxFee) : null;
  }

  public get maxFee(): BN | null {
    return this._maxFee;
  }

  public set tips(tips: number | string | BN | Uint8Array | null) {
    this._tips = tips !== null ? new BN(tips) : null;
  }

  public get tips(): BN | null {
    return this._tips;
  }

  public set payload(payload: Uint8Array | null) {
    this._payload = payload;
  }

  public get payload(): Uint8Array | null {
    return this._payload ? new Uint8Array(this._payload) : null;
  }

  public get signature(): Uint8Array | null {
    return this._signature;
  }

  get hash() {
    return Buffer.from(sha3.keccak_256.array(this.toBytes())).toString('hex');
  }

  get sender() {
    if (!this._signature) return null;

    const data = ProtoTransaction_Data.encode(
      this._createProtoTxData(),
    ).finish();

    return sender(data, this._signature, true);
  }

  public fromBytes(bytes: Uint8Array): Transaction {
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

  public toBytes(): Uint8Array {
    const tx = ProtoTransaction.fromPartial({
      data: this._createProtoTxData(),
      signature: this._signature ?? new Uint8Array(),
    });
    return ProtoTransaction.encode(tx).finish();
  }

  public sign(key: string | Uint8Array | number[]): Transaction {
    const data = ProtoTransaction_Data.encode(
      this._createProtoTxData(),
    ).finish();
    this._signature = sign(data, key);
    return this;
  }

  public toHex(withPrefix = true): string {
    return toHexString(this.toBytes(), withPrefix);
  }

  private _createProtoTxData(): ProtoTransaction_Data {
    return ProtoTransaction_Data.fromPartial({
      epoch: this._epoch,
      nonce: this._nonce,
      type: this._type,
      to: this._to ?? new Uint8Array(),
      amount: new Uint8Array(this._amount?.toArray() ?? []),
      maxFee: new Uint8Array(this._maxFee?.toArray() ?? []),
      tips: new Uint8Array(this._tips?.toArray() ?? []),
      payload: this._payload ?? new Uint8Array(),
    });
  }
}
