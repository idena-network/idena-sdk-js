idena-sdk-js

# idena-sdk-js

## Table of contents

### Enumerations

- [ContractArgumentFormat](enums/ContractArgumentFormat.md)
- [EmbeddedContractType](enums/EmbeddedContractType.md)
- [TransactionType](enums/TransactionType.md)

### Classes

- [CallContractAttachment](classes/CallContractAttachment.md)
- [DeployContractAttachment](classes/DeployContractAttachment.md)
- [TerminateContractAttachment](classes/TerminateContractAttachment.md)
- [Transaction](classes/Transaction.md)

### Interfaces

- [ContractArgument](interfaces/ContractArgument.md)

### Variables

- [DNA\_BASE](README.md#dna_base)

### Functions

- [argumentFromBytes](README.md#argumentfrombytes)
- [argumentToBytes](README.md#argumenttobytes)
- [argumentsFromBytes](README.md#argumentsfrombytes)
- [argumentsToBytes](README.md#argumentstobytes)
- [hexToUint8Array](README.md#hextouint8array)
- [privateKeyToAddress](README.md#privatekeytoaddress)
- [privateKeyToPublicKey](README.md#privatekeytopublickey)
- [publicKeyToAddress](README.md#publickeytoaddress)
- [sender](README.md#sender)
- [sign](README.md#sign)
- [stripHexPrefix](README.md#striphexprefix)
- [toHexString](README.md#tohexstring)

## Variables

### DNA\_BASE

• `Const` **DNA\_BASE**: ``"1000000000000000000"``

#### Defined in

utils.ts:1

## Functions

### argumentFromBytes

▸ **argumentFromBytes**(`format`, `index`, `bytes`): [`ContractArgument`](interfaces/ContractArgument.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`ContractArgumentFormat`](enums/ContractArgumentFormat.md) |
| `index` | `number` |
| `bytes` | `Uint8Array` |

#### Returns

[`ContractArgument`](interfaces/ContractArgument.md)

#### Defined in

models/transactions/attachments/contracts/utils.ts:8

___

### argumentToBytes

▸ **argumentToBytes**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ContractArgument`](interfaces/ContractArgument.md) |

#### Returns

`Uint8Array`

#### Defined in

models/transactions/attachments/contracts/utils.ts:104

___

### argumentsFromBytes

▸ **argumentsFromBytes**(`formats`, `bytes`): [`ContractArgument`](interfaces/ContractArgument.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `formats` | [`ContractArgumentFormat`](enums/ContractArgumentFormat.md)[] |
| `bytes` | `Uint8Array`[] |

#### Returns

[`ContractArgument`](interfaces/ContractArgument.md)[]

#### Defined in

models/transactions/attachments/contracts/utils.ts:95

___

### argumentsToBytes

▸ **argumentsToBytes**(`args`): `Uint8Array`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ContractArgument`](interfaces/ContractArgument.md)[] |

#### Returns

`Uint8Array`[]

#### Defined in

models/transactions/attachments/contracts/utils.ts:161

___

### hexToUint8Array

▸ **hexToUint8Array**(`hexString`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hexString` | `string` |

#### Returns

`Uint8Array`

#### Defined in

utils.ts:14

___

### privateKeyToAddress

▸ **privateKeyToAddress**(`key`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` \| `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

crypto.ts:27

___

### privateKeyToPublicKey

▸ **privateKeyToPublicKey**(`key`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` \| `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

crypto.ts:9

___

### publicKeyToAddress

▸ **publicKeyToAddress**(`publicKey`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicKey` | `string` \| `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

crypto.ts:17

___

### sender

▸ **sender**(`data`, `signature`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `Uint8Array` \| `number`[] | `undefined` |
| `signature` | `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

crypto.ts:40

___

### sign

▸ **sign**(`data`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `number`[] |
| `key` | `string` \| `Uint8Array` \| `number`[] |

#### Returns

`Uint8Array`

#### Defined in

crypto.ts:56

___

### stripHexPrefix

▸ **stripHexPrefix**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

utils.ts:7

___

### toHexString

▸ **toHexString**(`byteArray`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `byteArray` | `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

utils.ts:27
