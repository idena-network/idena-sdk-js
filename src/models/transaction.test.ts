import { BN } from 'bn.js';
import { TransactionType } from '.';
import { hexToUint8Array } from '../utils';
import { Transaction } from './transaction';

describe('transaction', () => {
  it('can be encoded and decoded', () => {
    const tx = new Transaction({
      epoch: 5,
      nonce: 11,
      type: TransactionType.ActivationTx,
      to: '0x010203',
      amount: new BN(10),
      maxFee: new BN(11),
      tips: new BN(12),
      payload: new Uint8Array([1, 2, 3]),
    });

    const parsed = new Transaction().fromBytes(tx.toBytes());

    expect(parsed.epoch).toBe(tx.epoch);
    expect(parsed.nonce).toBe(tx.nonce);
    expect(parsed.type).toBe(tx.type);
    expect(parsed.to).toBe(tx.to);
    expect(parsed.amount?.toString()).toBe(tx.amount?.toString());
    expect(parsed.maxFee?.toString()).toBe(tx.maxFee?.toString());
    expect(parsed.tips?.toString()).toBe(tx.tips?.toString());
    expect(parsed.payload).toStrictEqual(tx.payload);
  });

  it('signature test', () => {
    const tx = new Transaction({
      epoch: 101,
      nonce: 55,
      type: TransactionType.SubmitFlipTx,
      to: '0x01351c321aa2a8832c32c00745e352eb8a6782bc',
      amount: new BN(999),
      maxFee: new BN(555),
      tips: new BN(111),
      payload: new Uint8Array([0x11, 0x12, 0x13]),
    }).sign(__PRIVATE_KEY__);

    const nodeSignature =
      '29aa296e27542801de9d955594f9fafa47e0f2c0c035c760e3593dbb34cb360c321f6b5c5704c7ac68d74b3b73043b78b00583036fd7ecbd664ecb7df0dc910c01';

    expect(tx.signature).toStrictEqual(hexToUint8Array(nodeSignature));
    expect(tx.sender).toBe(__ADDRESS__);
  });
});
