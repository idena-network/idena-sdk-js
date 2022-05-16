import { Transaction, TransactionType } from '../models';
import type { AxiosInstance } from 'axios';
import { createAxiosInstance } from './utils';
import { BaseProvider } from './provider';
import { toHexString } from '../utils';

export class BcnProvider extends BaseProvider {
  static create(url: string, apiKey: string) {
    return new BcnProvider(createAxiosInstance(url, apiKey));
  }

  constructor(httpProvider: AxiosInstance) {
    super(httpProvider);
  }

  public async buildTx(
    data: Partial<{
      from: string;
      to: string;
      epoch: number;
      nonce: number;
      type: TransactionType;
      amount: string;
      maxFee: string;
      tips: string;
      payload: number[] | Uint8Array;
    }>,
  ): Promise<Transaction> {
    const params: any = data;
    if (data.payload) params.payload = toHexString(data.payload, true);
    params.useProto = true;

    const result = await this.doRequest({
      method: 'bcn_getRawTx',
      params: [params],
    });
    return new Transaction().fromHex(result);
  }

  public async sendTx(tx: Transaction): Promise<string> {
    const result = await this.doRequest({
      method: 'sendRawTx',
      params: [tx.toHex(true)],
    });

    return result;
  }
}
