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
- [getArgs](TerminateContractAttachment.md#getargs)
- [setArgs](TerminateContractAttachment.md#setargs)
- [toBytes](TerminateContractAttachment.md#tobytes)

## Constructors

### constructor

• **new TerminateContractAttachment**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<{ `args`: `Uint8Array`[]  }\> |

#### Defined in

[models/transactions/attachments/contracts/terminateContractAttachment.ts:8](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/terminateContractAttachment.ts#L8)

## Properties

### \_args

• `Private` **\_args**: `Uint8Array`[]

#### Defined in

[models/transactions/attachments/contracts/terminateContractAttachment.ts:6](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/terminateContractAttachment.ts#L6)

## Accessors

### args

• `get` **args**(): `Uint8Array`[]

#### Returns

`Uint8Array`[]

#### Defined in

[models/transactions/attachments/contracts/terminateContractAttachment.ts:16](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/terminateContractAttachment.ts#L16)

• `set` **args**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Uint8Array`[] |

#### Returns

`void`

#### Defined in

[models/transactions/attachments/contracts/terminateContractAttachment.ts:12](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/terminateContractAttachment.ts#L12)

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

[models/transactions/attachments/contracts/terminateContractAttachment.ts:28](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/terminateContractAttachment.ts#L28)

___

### getArgs

▸ **getArgs**(`formats`): [`ContractArgument`](../interfaces/ContractArgument.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `formats` | [`ContractArgumentFormat`](../enums/ContractArgumentFormat.md)[] |

#### Returns

[`ContractArgument`](../interfaces/ContractArgument.md)[]

#### Defined in

[models/transactions/attachments/contracts/terminateContractAttachment.ts:20](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/terminateContractAttachment.ts#L20)

___

### setArgs

▸ **setArgs**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ContractArgument`](../interfaces/ContractArgument.md)[] |

#### Returns

`void`

#### Defined in

[models/transactions/attachments/contracts/terminateContractAttachment.ts:24](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/terminateContractAttachment.ts#L24)

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[models/transactions/attachments/contracts/terminateContractAttachment.ts:36](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/terminateContractAttachment.ts#L36)
