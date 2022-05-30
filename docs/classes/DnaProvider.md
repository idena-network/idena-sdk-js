[idena-sdk-js](../README.md) / DnaProvider

# Class: DnaProvider

## Hierarchy

- `BaseProvider`

  ↳ **`DnaProvider`**

## Table of contents

### Constructors

- [constructor](DnaProvider.md#constructor)

### Properties

- [\_httpProvider](DnaProvider.md#_httpprovider)

### Methods

- [balance](DnaProvider.md#balance)
- [doRequest](DnaProvider.md#dorequest)
- [epoch](DnaProvider.md#epoch)
- [identity](DnaProvider.md#identity)
- [create](DnaProvider.md#create)

## Constructors

### constructor

• **new DnaProvider**(`httpProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpProvider` | `AxiosInstance` |

#### Overrides

BaseProvider.constructor

#### Defined in

[providers/dnaProvider.ts:11](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/dnaProvider.ts#L11)

## Properties

### \_httpProvider

• `Protected` **\_httpProvider**: `AxiosInstance`

#### Inherited from

BaseProvider.\_httpProvider

#### Defined in

[providers/provider.ts:5](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/provider.ts#L5)

## Methods

### balance

▸ **balance**(`address`): `Promise`<[`JsonBalance`](JsonBalance.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`JsonBalance`](JsonBalance.md)\>

#### Defined in

[providers/dnaProvider.ts:15](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/dnaProvider.ts#L15)

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

### epoch

▸ **epoch**(): `Promise`<[`JsonEpoch`](JsonEpoch.md)\>

#### Returns

`Promise`<[`JsonEpoch`](JsonEpoch.md)\>

#### Defined in

[providers/dnaProvider.ts:33](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/dnaProvider.ts#L33)

___

### identity

▸ **identity**(`address?`): `Promise`<[`JsonIdentity`](JsonIdentity.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`JsonIdentity`](JsonIdentity.md)\>

#### Defined in

[providers/dnaProvider.ts:24](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/dnaProvider.ts#L24)

___

### create

▸ `Static` **create**(`url`, `apiKey`): [`DnaProvider`](DnaProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `apiKey` | `string` |

#### Returns

[`DnaProvider`](DnaProvider.md)

#### Defined in

[providers/dnaProvider.ts:7](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/dnaProvider.ts#L7)
