[idena-sdk-js](../README.md) / Transaction

# Class: Transaction

## Table of contents

### Constructors

- [constructor](Transaction.md#constructor)

### Properties

- [\_amount](Transaction.md#_amount)
- [\_epoch](Transaction.md#_epoch)
- [\_maxFee](Transaction.md#_maxfee)
- [\_nonce](Transaction.md#_nonce)
- [\_payload](Transaction.md#_payload)
- [\_signature](Transaction.md#_signature)
- [\_tips](Transaction.md#_tips)
- [\_to](Transaction.md#_to)
- [\_type](Transaction.md#_type)

### Accessors

- [amount](Transaction.md#amount)
- [epoch](Transaction.md#epoch)
- [hash](Transaction.md#hash)
- [maxFee](Transaction.md#maxfee)
- [nonce](Transaction.md#nonce)
- [payload](Transaction.md#payload)
- [sender](Transaction.md#sender)
- [signature](Transaction.md#signature)
- [tips](Transaction.md#tips)
- [to](Transaction.md#to)
- [type](Transaction.md#type)

### Methods

- [\_createProtoTxData](Transaction.md#_createprototxdata)
- [fromBytes](Transaction.md#frombytes)
- [sign](Transaction.md#sign)
- [toBytes](Transaction.md#tobytes)

## Constructors

### constructor

• **new Transaction**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<{ `amount`: `string` \| `number` \| `Uint8Array` \| `BN` ; `epoch`: `number` ; `maxFee`: `string` \| `number` \| `Uint8Array` \| `BN` ; `nonce`: `number` ; `payload`: `Uint8Array` ; `tips`: `string` \| `number` \| `Uint8Array` \| `BN` ; `to`: `string` \| `Uint8Array` ; `type`: `number`  }\> |

#### Defined in

models/transactions/transaction.ts:44

## Properties

### \_amount

• `Private` **\_amount**: ``null`` \| `BN` = `null`

#### Defined in

models/transactions/transaction.ts:37

___

### \_epoch

• `Private` **\_epoch**: `number` = `0`

#### Defined in

models/transactions/transaction.ts:34

___

### \_maxFee

• `Private` **\_maxFee**: ``null`` \| `BN` = `null`

#### Defined in

models/transactions/transaction.ts:38

___

### \_nonce

• `Private` **\_nonce**: `number` = `0`

#### Defined in

models/transactions/transaction.ts:33

___

### \_payload

• `Private` **\_payload**: ``null`` \| `Uint8Array` = `null`

#### Defined in

models/transactions/transaction.ts:40

___

### \_signature

• `Private` **\_signature**: ``null`` \| `Uint8Array` = `null`

#### Defined in

models/transactions/transaction.ts:42

___

### \_tips

• `Private` **\_tips**: ``null`` \| `BN` = `null`

#### Defined in

models/transactions/transaction.ts:39

___

### \_to

• `Private` **\_to**: ``null`` \| `Uint8Array` = `null`

#### Defined in

models/transactions/transaction.ts:36

___

### \_type

• `Private` **\_type**: `number` = `0`

#### Defined in

models/transactions/transaction.ts:35

## Accessors

### amount

• `get` **amount**(): ``null`` \| `BN`

#### Returns

``null`` \| `BN`

#### Defined in

models/transactions/transaction.ts:104

• `set` **amount**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | ``null`` \| `string` \| `number` \| `Uint8Array` \| `BN` |

#### Returns

`void`

#### Defined in

models/transactions/transaction.ts:100

___

### epoch

• `get` **epoch**(): `number`

#### Returns

`number`

#### Defined in

models/transactions/transaction.ts:78

• `set` **epoch**(`epoch`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `epoch` | `number` |

#### Returns

`void`

#### Defined in

models/transactions/transaction.ts:74

___

### hash

• `get` **hash**(): `string`

#### Returns

`string`

#### Defined in

models/transactions/transaction.ts:136

___

### maxFee

• `get` **maxFee**(): ``null`` \| `BN`

#### Returns

``null`` \| `BN`

#### Defined in

models/transactions/transaction.ts:112

• `set` **maxFee**(`maxFee`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxFee` | ``null`` \| `string` \| `number` \| `Uint8Array` \| `BN` |

#### Returns

`void`

#### Defined in

models/transactions/transaction.ts:108

___

### nonce

• `get` **nonce**(): `number`

#### Returns

`number`

#### Defined in

models/transactions/transaction.ts:70

• `set` **nonce**(`nonce`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nonce` | `number` |

#### Returns

`void`

#### Defined in

models/transactions/transaction.ts:66

___

### payload

• `get` **payload**(): ``null`` \| `Uint8Array`

#### Returns

``null`` \| `Uint8Array`

#### Defined in

models/transactions/transaction.ts:128

• `set` **payload**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | ``null`` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

models/transactions/transaction.ts:124

___

### sender

• `get` **sender**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

models/transactions/transaction.ts:140

___

### signature

• `get` **signature**(): ``null`` \| `Uint8Array`

#### Returns

``null`` \| `Uint8Array`

#### Defined in

models/transactions/transaction.ts:132

___

### tips

• `get` **tips**(): ``null`` \| `BN`

#### Returns

``null`` \| `BN`

#### Defined in

models/transactions/transaction.ts:120

• `set` **tips**(`tips`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tips` | ``null`` \| `string` \| `number` \| `Uint8Array` \| `BN` |

#### Returns

`void`

#### Defined in

models/transactions/transaction.ts:116

___

### to

• `get` **to**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

models/transactions/transaction.ts:96

• `set` **to**(`to`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | ``null`` \| `string` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

models/transactions/transaction.ts:90

___

### type

• `get` **type**(): `number`

#### Returns

`number`

#### Defined in

models/transactions/transaction.ts:86

• `set` **type**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TransactionType`](../enums/TransactionType.md) |

#### Returns

`void`

#### Defined in

models/transactions/transaction.ts:82

## Methods

### \_createProtoTxData

▸ `Private` **_createProtoTxData**(): `ProtoTransaction_Data`

#### Returns

`ProtoTransaction_Data`

#### Defined in

models/transactions/transaction.ts:184

___

### fromBytes

▸ **fromBytes**(`bytes`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

models/transactions/transaction.ts:150

___

### sign

▸ **sign**(`key`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `Uint8Array` \| `number`[] |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

models/transactions/transaction.ts:176

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

models/transactions/transaction.ts:168
