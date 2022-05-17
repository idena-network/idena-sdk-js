import type { AxiosInstance } from 'axios';
import { BcnProvider } from './bcnProvider';
import { ContractProvider } from './contractProvider';
export declare class IdenaProvider {
    private _bcnProvider;
    private _contractProvider;
    get Blockchain(): BcnProvider;
    get Contract(): ContractProvider;
    static create(url: string, apiKey: string): IdenaProvider;
    constructor(httpProvider: AxiosInstance);
}
//# sourceMappingURL=idenaProvider.d.ts.map