[idena-sdk-js](../README.md) / DeployContractAttachment

# Class: DeployContractAttachment

## Table of contents

### Constructors

- [constructor](DeployContractAttachment.md#constructor)

### Properties

- [\_args](DeployContractAttachment.md#_args)
- [\_codeHash](DeployContractAttachment.md#_codehash)

### Accessors

- [args](DeployContractAttachment.md#args)
- [codeHash](DeployContractAttachment.md#codehash)

### Methods

- [fromBytes](DeployContractAttachment.md#frombytes)
- [getParsedArgs](DeployContractAttachment.md#getparsedargs)
- [setParsedArgs](DeployContractAttachment.md#setparsedargs)
- [toBytes](DeployContractAttachment.md#tobytes)

## Constructors

### constructor

• **new DeployContractAttachment**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<{ `args`: `Uint8Array`[] ; `codeHash`: [`EmbeddedContractType`](../enums/EmbeddedContractType.md)  }\> |

#### Defined in

models/transactions/attachments/contracts/deployContractAttachment.ts:13

## Properties

### \_args

• `Private` **\_args**: `Uint8Array`[]

#### Defined in

models/transactions/attachments/contracts/deployContractAttachment.ts:11

___

### \_codeHash

• `Private` **\_codeHash**: [`EmbeddedContractType`](../enums/EmbeddedContractType.md)

#### Defined in

models/transactions/attachments/contracts/deployContractAttachment.ts:10

## Accessors

### args

• `get` **args**(): `Uint8Array`[]

#### Returns

`Uint8Array`[]

#### Defined in

models/transactions/attachments/contracts/deployContractAttachment.ts:32

• `set` **args**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Uint8Array`[] |

#### Returns

`void`

#### Defined in

models/transactions/attachments/contracts/deployContractAttachment.ts:28

___

### codeHash

• `get` **codeHash**(): `number`

#### Returns

`number`

#### Defined in

models/transactions/attachments/contracts/deployContractAttachment.ts:24

• `set` **codeHash**(`codeHash`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeHash` | `number` |

#### Returns

`void`

#### Defined in

models/transactions/attachments/contracts/deployContractAttachment.ts:20

## Methods

### fromBytes

▸ **fromBytes**(`bytes`): [`DeployContractAttachment`](DeployContractAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`DeployContractAttachment`](DeployContractAttachment.md)

#### Defined in

models/transactions/attachments/contracts/deployContractAttachment.ts:44

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

models/transactions/attachments/contracts/deployContractAttachment.ts:36

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

models/transactions/attachments/contracts/deployContractAttachment.ts:40

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

models/transactions/attachments/contracts/deployContractAttachment.ts:53
