[idena-sdk-js](../README.md) / CallContractAttachment

# Class: CallContractAttachment

## Table of contents

### Constructors

- [constructor](CallContractAttachment.md#constructor)

### Properties

- [\_args](CallContractAttachment.md#_args)
- [\_method](CallContractAttachment.md#_method)

### Accessors

- [args](CallContractAttachment.md#args)
- [method](CallContractAttachment.md#method)

### Methods

- [fromBytes](CallContractAttachment.md#frombytes)
- [getParsedArgs](CallContractAttachment.md#getparsedargs)
- [setParsedArgs](CallContractAttachment.md#setparsedargs)
- [toBytes](CallContractAttachment.md#tobytes)

## Constructors

### constructor

• **new CallContractAttachment**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<{ `args`: `Uint8Array`[] ; `method`: `string`  }\> |

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:9

## Properties

### \_args

• `Private` **\_args**: `Uint8Array`[]

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:7

___

### \_method

• `Private` **\_method**: `string`

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:6

## Accessors

### args

• `get` **args**(): `Uint8Array`[]

#### Returns

`Uint8Array`[]

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:26

• `set` **args**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Uint8Array`[] |

#### Returns

`void`

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:22

___

### method

• `get` **method**(): `string`

#### Returns

`string`

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:18

• `set` **method**(`method`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |

#### Returns

`void`

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:14

## Methods

### fromBytes

▸ **fromBytes**(`bytes`): [`CallContractAttachment`](CallContractAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`CallContractAttachment`](CallContractAttachment.md)

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:38

___

### getParsedArgs

▸ **getParsedArgs**(`formats`): [`ContractArgument`](../interfaces/ContractArgument.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `formats` | [`ContractArgumentFormat`](../enums/ContractArgumentFormat.md)[] |

#### Returns

[`ContractArgument`](../interfaces/ContractArgument.md)[]

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:30

___

### setParsedArgs

▸ **setParsedArgs**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ContractArgument`](../interfaces/ContractArgument.md)[] |

#### Returns

`void`

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:34

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

models/transactions/attachments/contracts/callContractAttachment.ts:47
