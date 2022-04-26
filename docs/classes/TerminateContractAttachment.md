[idena-sdk-js](../README.md) / TerminateContractAttachment

# Class: TerminateContractAttachment

## Table of contents

### Constructors

- [constructor](TerminateContractAttachment.md#constructor)

### Properties

- [\_args](TerminateContractAttachment.md#_args)

### Accessors

- [args](TerminateContractAttachment.md#args)

### Methods

- [fromBytes](TerminateContractAttachment.md#frombytes)
- [getParsedArgs](TerminateContractAttachment.md#getparsedargs)
- [setParsedArgs](TerminateContractAttachment.md#setparsedargs)
- [toBytes](TerminateContractAttachment.md#tobytes)

## Constructors

### constructor

• **new TerminateContractAttachment**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<{ `args`: `Uint8Array`[]  }\> |

#### Defined in

models/transactions/attachments/contracts/terminateContractAttachment.ts:8

## Properties

### \_args

• `Private` **\_args**: `Uint8Array`[]

#### Defined in

models/transactions/attachments/contracts/terminateContractAttachment.ts:6

## Accessors

### args

• `get` **args**(): `Uint8Array`[]

#### Returns

`Uint8Array`[]

#### Defined in

models/transactions/attachments/contracts/terminateContractAttachment.ts:16

• `set` **args**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Uint8Array`[] |

#### Returns

`void`

#### Defined in

models/transactions/attachments/contracts/terminateContractAttachment.ts:12

## Methods

### fromBytes

▸ **fromBytes**(`bytes`): [`TerminateContractAttachment`](TerminateContractAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`TerminateContractAttachment`](TerminateContractAttachment.md)

#### Defined in

models/transactions/attachments/contracts/terminateContractAttachment.ts:28

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

models/transactions/attachments/contracts/terminateContractAttachment.ts:20

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

models/transactions/attachments/contracts/terminateContractAttachment.ts:24

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

models/transactions/attachments/contracts/terminateContractAttachment.ts:36
