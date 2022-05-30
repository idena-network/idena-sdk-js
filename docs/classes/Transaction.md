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
- [gas](Transaction.md#gas)
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
- [fromHex](Transaction.md#fromhex)
- [fromJson](Transaction.md#fromjson)
- [sign](Transaction.md#sign)
- [toBytes](Transaction.md#tobytes)
- [toHex](Transaction.md#tohex)
- [fromBytes](Transaction.md#frombytes-1)
- [fromHex](Transaction.md#fromhex-1)

## Constructors

### constructor

• **new Transaction**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<{ `amount`: `string` \| `number` \| `BN` \| `Uint8Array` ; `epoch`: `number` ; `maxFee`: `string` \| `number` \| `BN` \| `Uint8Array` ; `nonce`: `number` ; `payload`: `Uint8Array` \| `number`[] ; `tips`: `string` \| `number` \| `BN` \| `Uint8Array` ; `to`: `string` \| `Uint8Array` ; `type`: [`TransactionType`](../enums/TransactionType.md)  }\> |

#### Defined in

[models/transactions/transaction.ts:46](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L46)

## Properties

### \_amount

• `Private` **\_amount**: ``null`` \| `BN` = `null`

#### Defined in

[models/transactions/transaction.ts:39](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L39)

___

### \_epoch

• `Private` **\_epoch**: `number` = `0`

#### Defined in

[models/transactions/transaction.ts:36](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L36)

___

### \_maxFee

• `Private` **\_maxFee**: ``null`` \| `BN` = `null`

#### Defined in

[models/transactions/transaction.ts:40](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L40)

___

### \_nonce

• `Private` **\_nonce**: `number` = `0`

#### Defined in

[models/transactions/transaction.ts:35](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L35)

___

### \_payload

• `Private` **\_payload**: ``null`` \| `Uint8Array` = `null`

#### Defined in

[models/transactions/transaction.ts:42](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L42)

___

### \_signature

• `Private` **\_signature**: ``null`` \| `Uint8Array` = `null`

#### Defined in

[models/transactions/transaction.ts:44](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L44)

___

### \_tips

• `Private` **\_tips**: ``null`` \| `BN` = `null`

#### Defined in

[models/transactions/transaction.ts:41](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L41)

___

### \_to

• `Private` **\_to**: ``null`` \| `Uint8Array` = `null`

#### Defined in

[models/transactions/transaction.ts:38](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L38)

___

### \_type

• `Private` **\_type**: `number` = `0`

#### Defined in

[models/transactions/transaction.ts:37](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L37)

## Accessors

### amount

• `get` **amount**(): ``null`` \| `BN`

#### Returns

``null`` \| `BN`

#### Defined in

[models/transactions/transaction.ts:106](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L106)

• `set` **amount**(`amount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | ``null`` \| `string` \| `number` \| `BN` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

[models/transactions/transaction.ts:102](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L102)

___

### epoch

• `get` **epoch**(): `number`

#### Returns

`number`

#### Defined in

[models/transactions/transaction.ts:80](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L80)

• `set` **epoch**(`epoch`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `epoch` | `number` |

#### Returns

`void`

#### Defined in

[models/transactions/transaction.ts:76](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L76)

___

### gas

• `get` **gas**(): `number`

#### Returns

`number`

#### Defined in

[models/transactions/transaction.ts:156](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L156)

___

### hash

• `get` **hash**(): `string`

#### Returns

`string`

#### Defined in

[models/transactions/transaction.ts:138](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L138)

___

### maxFee

• `get` **maxFee**(): ``null`` \| `BN`

#### Returns

``null`` \| `BN`

#### Defined in

[models/transactions/transaction.ts:114](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L114)

• `set` **maxFee**(`maxFee`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxFee` | ``null`` \| `string` \| `number` \| `BN` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

[models/transactions/transaction.ts:110](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L110)

___

### nonce

• `get` **nonce**(): `number`

#### Returns

`number`

#### Defined in

[models/transactions/transaction.ts:72](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L72)

• `set` **nonce**(`nonce`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nonce` | `number` |

#### Returns

`void`

#### Defined in

[models/transactions/transaction.ts:68](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L68)

___

### payload

• `get` **payload**(): ``null`` \| `Uint8Array`

#### Returns

``null`` \| `Uint8Array`

#### Defined in

[models/transactions/transaction.ts:130](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L130)

• `set` **payload**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | ``null`` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

[models/transactions/transaction.ts:126](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L126)

___

### sender

• `get` **sender**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[models/transactions/transaction.ts:142](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L142)

___

### signature

• `get` **signature**(): ``null`` \| `Uint8Array`

#### Returns

``null`` \| `Uint8Array`

#### Defined in

[models/transactions/transaction.ts:134](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L134)

___

### tips

• `get` **tips**(): ``null`` \| `BN`

#### Returns

``null`` \| `BN`

#### Defined in

[models/transactions/transaction.ts:122](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L122)

• `set` **tips**(`tips`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tips` | ``null`` \| `string` \| `number` \| `BN` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

[models/transactions/transaction.ts:118](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L118)

___

### to

• `get` **to**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[models/transactions/transaction.ts:98](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L98)

• `set` **to**(`to`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | ``null`` \| `string` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

[models/transactions/transaction.ts:92](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L92)

___

### type

• `get` **type**(): `number`

#### Returns

`number`

#### Defined in

[models/transactions/transaction.ts:88](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L88)

• `set` **type**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TransactionType`](../enums/TransactionType.md) |

#### Returns

`void`

#### Defined in

[models/transactions/transaction.ts:84](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L84)

## Methods

### \_createProtoTxData

▸ `Private` **_createProtoTxData**(): `ProtoTransaction_Data`

#### Returns

`ProtoTransaction_Data`

#### Defined in

[models/transactions/transaction.ts:254](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L254)

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

[models/transactions/transaction.ts:191](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L191)

___

### fromHex

▸ **fromHex**(`hex`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[models/transactions/transaction.ts:187](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L187)

___

### fromJson

▸ **fromJson**(`jsonTx`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonTx` | [`JsonTransaction`](JsonTransaction.md) |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[models/transactions/transaction.ts:211](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L211)

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

[models/transactions/transaction.ts:242](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L242)

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[models/transactions/transaction.ts:234](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L234)

___

### toHex

▸ **toHex**(`withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `withPrefix` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

[models/transactions/transaction.ts:250](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L250)

___

### fromBytes

▸ `Static` **fromBytes**(`bytes`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[models/transactions/transaction.ts:183](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L183)

___

### fromHex

▸ `Static` **fromHex**(`hex`): [`Transaction`](Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`Transaction`](Transaction.md)

#### Defined in

[models/transactions/transaction.ts:179](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/transactions/transaction.ts#L179)
