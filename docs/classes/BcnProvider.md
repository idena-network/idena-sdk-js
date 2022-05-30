[idena-sdk-js](../README.md) / BcnProvider

# Class: BcnProvider

## Hierarchy

- `BaseProvider`

  ↳ **`BcnProvider`**

## Table of contents

### Constructors

- [constructor](BcnProvider.md#constructor)

### Properties

- [\_httpProvider](BcnProvider.md#_httpprovider)

### Methods

- [block](BcnProvider.md#block)
- [blockAt](BcnProvider.md#blockat)
- [buildTx](BcnProvider.md#buildtx)
- [doRequest](BcnProvider.md#dorequest)
- [estimateTx](BcnProvider.md#estimatetx)
- [feePerGas](BcnProvider.md#feepergas)
- [lastBlock](BcnProvider.md#lastblock)
- [receipt](BcnProvider.md#receipt)
- [sendTx](BcnProvider.md#sendtx)
- [transaction](BcnProvider.md#transaction)
- [create](BcnProvider.md#create)

## Constructors

### constructor

• **new BcnProvider**(`httpProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpProvider` | `AxiosInstance` |

#### Overrides

BaseProvider.constructor

#### Defined in

[providers/bcnProvider.ts:13](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L13)

## Properties

### \_httpProvider

• `Protected` **\_httpProvider**: `AxiosInstance`

#### Inherited from

BaseProvider.\_httpProvider

#### Defined in

[providers/provider.ts:5](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/provider.ts#L5)

## Methods

### block

▸ **block**(`hash`): `Promise`<[`JsonBlock`](JsonBlock.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<[`JsonBlock`](JsonBlock.md)\>

#### Defined in

[providers/bcnProvider.ts:70](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L70)

___

### blockAt

▸ **blockAt**(`num`): `Promise`<[`JsonBlock`](JsonBlock.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`Promise`<[`JsonBlock`](JsonBlock.md)\>

#### Defined in

[providers/bcnProvider.ts:61](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L61)

___

### buildTx

▸ **buildTx**(`data`): `Promise`<[`Transaction`](Transaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<{ `amount`: `string` ; `epoch`: `number` ; `from`: `string` ; `maxFee`: `string` ; `nonce`: `number` ; `payload`: `Uint8Array` \| `number`[] ; `tips`: `string` ; `to`: `string` ; `type`: [`TransactionType`](../enums/TransactionType.md)  }\> |

#### Returns

`Promise`<[`Transaction`](Transaction.md)\>

#### Defined in

[providers/bcnProvider.ts:17](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L17)

___

### doRequest

▸ **doRequest**(`obj`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `obj.id?` | `number` |
| `obj.method` | `string` |
| `obj.params` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

BaseProvider.doRequest

#### Defined in

[providers/provider.ts:11](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/provider.ts#L11)

___

### estimateTx

▸ **estimateTx**(`tx`): `Promise`<{ `receipt`: [`JsonReceipt`](JsonReceipt.md) ; `txFee`: `string` ; `txHash`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](Transaction.md) |

#### Returns

`Promise`<{ `receipt`: [`JsonReceipt`](JsonReceipt.md) ; `txFee`: `string` ; `txHash`: `string`  }\>

#### Defined in

[providers/bcnProvider.ts:50](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L50)

___

### feePerGas

▸ **feePerGas**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[providers/bcnProvider.ts:106](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L106)

___

### lastBlock

▸ **lastBlock**(): `Promise`<[`JsonBlock`](JsonBlock.md)\>

#### Returns

`Promise`<[`JsonBlock`](JsonBlock.md)\>

#### Defined in

[providers/bcnProvider.ts:79](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L79)

___

### receipt

▸ **receipt**(`hash`): `Promise`<[`JsonReceipt`](JsonReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<[`JsonReceipt`](JsonReceipt.md)\>

#### Defined in

[providers/bcnProvider.ts:97](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L97)

___

### sendTx

▸ **sendTx**(`tx`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](Transaction.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[providers/bcnProvider.ts:41](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L41)

___

### transaction

▸ **transaction**(`hash`): `Promise`<[`JsonTransaction`](JsonTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<[`JsonTransaction`](JsonTransaction.md)\>

#### Defined in

[providers/bcnProvider.ts:88](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L88)

___

### create

▸ `Static` **create**(`url`, `apiKey`): [`BcnProvider`](BcnProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `apiKey` | `string` |

#### Returns

[`BcnProvider`](BcnProvider.md)

#### Defined in

[providers/bcnProvider.ts:9](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/bcnProvider.ts#L9)
