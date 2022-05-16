import type { AxiosInstance } from 'axios';
import { BcnProvider } from './bcnProvider';
import { createAxiosInstance } from './utils';

export class IdenaProvider {
  private _bcnProvider: BcnProvider;

  public get Blockchain(): BcnProvider {
    return this._bcnProvider;
  }

  static create(url: string, apiKey: string): IdenaProvider {
    return new IdenaProvider(createAxiosInstance(url, apiKey));
  }

  constructor(httpProvider: AxiosInstance) {
    this._bcnProvider = new BcnProvider(httpProvider);
  }
}
