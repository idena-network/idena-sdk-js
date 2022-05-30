[idena-sdk-js](../README.md) / ContractProvider

# Class: ContractProvider

## Hierarchy

- `BaseProvider`

  ↳ **`ContractProvider`**

## Table of contents

### Constructors

- [constructor](ContractProvider.md#constructor)

### Properties

- [\_httpProvider](ContractProvider.md#_httpprovider)

### Methods

- [doRequest](ContractProvider.md#dorequest)
- [iterateMap](ContractProvider.md#iteratemap)
- [readData](ContractProvider.md#readdata)
- [readMap](ContractProvider.md#readmap)
- [readonlyCall](ContractProvider.md#readonlycall)
- [create](ContractProvider.md#create)

## Constructors

### constructor

• **new ContractProvider**(`httpProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpProvider` | `AxiosInstance` |

#### Overrides

BaseProvider.constructor

#### Defined in

[providers/contractProvider.ts:15](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/contractProvider.ts#L15)

## Properties

### \_httpProvider

• `Protected` **\_httpProvider**: `AxiosInstance`

#### Inherited from

BaseProvider.\_httpProvider

#### Defined in

[providers/provider.ts:5](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/provider.ts#L5)

## Methods

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

### iterateMap

▸ **iterateMap**(`address`, `mapName`, `keyFormat`, `valueFormat`, `limit?`, `continuationToken?`): `Promise`<[`JsonIterateMap`](JsonIterateMap.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `mapName` | `string` | `undefined` |
| `keyFormat` | [`ContractArgumentFormat`](../enums/ContractArgumentFormat.md) | `undefined` |
| `valueFormat` | [`ContractArgumentFormat`](../enums/ContractArgumentFormat.md) | `undefined` |
| `limit` | `number` | `10` |
| `continuationToken` | `string` | `'0x'` |

#### Returns

`Promise`<[`JsonIterateMap`](JsonIterateMap.md)\>

#### Defined in

[providers/contractProvider.ts:60](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/contractProvider.ts#L60)

___

### readData

▸ **readData**(`address`, `key`, `format`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `key` | `string` |
| `format` | [`ContractArgumentFormat`](../enums/ContractArgumentFormat.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[providers/contractProvider.ts:19](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/contractProvider.ts#L19)

___

### readMap

▸ **readMap**(`address`, `mapName`, `key`, `format`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `mapName` | `string` |
| `key` | `string` |
| `format` | [`ContractArgumentFormat`](../enums/ContractArgumentFormat.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[providers/contractProvider.ts:46](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/contractProvider.ts#L46)

___

### readonlyCall

▸ **readonlyCall**(`address`, `method`, `format`, `args`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `method` | `string` |
| `format` | [`ContractArgumentFormat`](../enums/ContractArgumentFormat.md) |
| `args` | [`ContractArgument`](../interfaces/ContractArgument.md)[] |

#### Returns

`Promise`<`string`\>

#### Defined in

[providers/contractProvider.ts:32](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/contractProvider.ts#L32)

___

### create

▸ `Static` **create**(`url`, `apiKey`): [`ContractProvider`](ContractProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `apiKey` | `string` |

#### Returns

[`ContractProvider`](ContractProvider.md)

#### Defined in

[providers/contractProvider.ts:11](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/contractProvider.ts#L11)
