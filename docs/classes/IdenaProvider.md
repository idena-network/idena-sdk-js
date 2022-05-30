[idena-sdk-js](../README.md) / IdenaProvider

# Class: IdenaProvider

## Hierarchy

- `BaseProvider`

  ↳ **`IdenaProvider`**

## Table of contents

### Constructors

- [constructor](IdenaProvider.md#constructor)

### Properties

- [\_bcnProvider](IdenaProvider.md#_bcnprovider)
- [\_contractProvider](IdenaProvider.md#_contractprovider)
- [\_dnaProvider](IdenaProvider.md#_dnaprovider)
- [\_httpProvider](IdenaProvider.md#_httpprovider)

### Accessors

- [Blockchain](IdenaProvider.md#blockchain)
- [Contract](IdenaProvider.md#contract)
- [Dna](IdenaProvider.md#dna)

### Methods

- [doRequest](IdenaProvider.md#dorequest)
- [create](IdenaProvider.md#create)

## Constructors

### constructor

• **new IdenaProvider**(`httpProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpProvider` | `AxiosInstance` |

#### Overrides

BaseProvider.constructor

#### Defined in

[providers/idenaProvider.ts:29](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/idenaProvider.ts#L29)

## Properties

### \_bcnProvider

• `Private` **\_bcnProvider**: [`BcnProvider`](BcnProvider.md)

#### Defined in

[providers/idenaProvider.ts:9](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/idenaProvider.ts#L9)

___

### \_contractProvider

• `Private` **\_contractProvider**: [`ContractProvider`](ContractProvider.md)

#### Defined in

[providers/idenaProvider.ts:10](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/idenaProvider.ts#L10)

___

### \_dnaProvider

• `Private` **\_dnaProvider**: `DnaProvider`

#### Defined in

[providers/idenaProvider.ts:11](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/idenaProvider.ts#L11)

___

### \_httpProvider

• `Protected` **\_httpProvider**: `AxiosInstance`

#### Inherited from

BaseProvider.\_httpProvider

#### Defined in

[providers/provider.ts:5](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/provider.ts#L5)

## Accessors

### Blockchain

• `get` **Blockchain**(): [`BcnProvider`](BcnProvider.md)

#### Returns

[`BcnProvider`](BcnProvider.md)

#### Defined in

[providers/idenaProvider.ts:13](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/idenaProvider.ts#L13)

___

### Contract

• `get` **Contract**(): [`ContractProvider`](ContractProvider.md)

#### Returns

[`ContractProvider`](ContractProvider.md)

#### Defined in

[providers/idenaProvider.ts:17](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/idenaProvider.ts#L17)

___

### Dna

• `get` **Dna**(): `DnaProvider`

#### Returns

`DnaProvider`

#### Defined in

[providers/idenaProvider.ts:21](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/idenaProvider.ts#L21)

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

[providers/provider.ts:11](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/provider.ts#L11)

___

### create

▸ `Static` **create**(`url`, `apiKey`): [`IdenaProvider`](IdenaProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `apiKey` | `string` |

#### Returns

[`IdenaProvider`](IdenaProvider.md)

#### Defined in

[providers/idenaProvider.ts:25](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/providers/idenaProvider.ts#L25)
