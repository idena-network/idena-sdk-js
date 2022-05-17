import type { AxiosInstance } from 'axios';
import { BcnProvider } from './bcnProvider';
import { ContractProvider } from './contractProvider';
import { createAxiosInstance } from './utils';

export class IdenaProvider {
  private _bcnProvider: BcnProvider;
  private _contractProvider: ContractProvider;

  public get Blockchain(): BcnProvider {
    return this._bcnProvider;
  }

  public get Contract(): ContractProvider {
    return this._contractProvider;
  }

  static create(url: string, apiKey: string): IdenaProvider {
    return new IdenaProvider(createAxiosInstance(url, apiKey));
  }

  constructor(httpProvider: AxiosInstance) {
    this._bcnProvider = new BcnProvider(httpProvider);
    this._contractProvider = new ContractProvider(httpProvider);
  }
}
