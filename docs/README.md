idena-sdk-js

# idena-sdk-js

## Table of contents

### Enumerations

- [ContractArgumentFormat](enums/ContractArgumentFormat.md)
- [EmbeddedContractType](enums/EmbeddedContractType.md)
- [TransactionType](enums/TransactionType.md)

### Classes

- [BcnProvider](classes/BcnProvider.md)
- [CallContractAttachment](classes/CallContractAttachment.md)
- [ContractProvider](classes/ContractProvider.md)
- [DeployContractAttachment](classes/DeployContractAttachment.md)
- [IdenaProvider](classes/IdenaProvider.md)
- [JsonBalance](classes/JsonBalance.md)
- [JsonBlock](classes/JsonBlock.md)
- [JsonEpoch](classes/JsonEpoch.md)
- [JsonIdentity](classes/JsonIdentity.md)
- [JsonIterateMap](classes/JsonIterateMap.md)
- [JsonIterateMapItem](classes/JsonIterateMapItem.md)
- [JsonReceipt](classes/JsonReceipt.md)
- [JsonTransaction](classes/JsonTransaction.md)
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
- [calculateGasCost](README.md#calculategascost)
- [dnaToFloatString](README.md#dnatofloatstring)
- [floatStringToDna](README.md#floatstringtodna)
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

[utils.ts:6](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/utils.ts#L6)

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

[models/transactions/attachments/contracts/utils.ts:13](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/utils.ts#L13)

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

[models/transactions/attachments/contracts/utils.ts:106](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/utils.ts#L106)

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

[models/transactions/attachments/contracts/utils.ts:97](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/utils.ts#L97)

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

[models/transactions/attachments/contracts/utils.ts:160](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/attachments/contracts/utils.ts#L160)

___

### calculateGasCost

▸ **calculateGasCost**(`feePerGas`, `gas`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePerGas` | `string` \| `BN` |
| `gas` | `number` |

#### Returns

`string`

#### Defined in

[utils.ts:54](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/utils.ts#L54)

___

### dnaToFloatString

▸ **dnaToFloatString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `BN` |

#### Returns

`string`

#### Defined in

[utils.ts:49](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/utils.ts#L49)

___

### floatStringToDna

▸ **floatStringToDna**(`value`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`BN`

#### Defined in

[utils.ts:44](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/utils.ts#L44)

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

[utils.ts:19](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/utils.ts#L19)

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

[crypto.ts:27](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/crypto.ts#L27)

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

[crypto.ts:9](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/crypto.ts#L9)

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

[crypto.ts:17](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/crypto.ts#L17)

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

[crypto.ts:40](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/crypto.ts#L40)

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

[crypto.ts:56](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/crypto.ts#L56)

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

[utils.ts:12](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/utils.ts#L12)

___

### toHexString

▸ **toHexString**(`byteArray`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `byteArray` | `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

[utils.ts:32](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/utils.ts#L32)
