[idena-sdk-js](../README.md) / JsonIdentity

# Class: JsonIdentity

## Table of contents

### Constructors

- [constructor](JsonIdentity.md#constructor)

### Properties

- [address](JsonIdentity.md#address)
- [age](JsonIdentity.md#age)
- [availableFlips](JsonIdentity.md#availableflips)
- [code](JsonIdentity.md#code)
- [delegatee](JsonIdentity.md#delegatee)
- [delegationEpoch](JsonIdentity.md#delegationepoch)
- [delegationNonce](JsonIdentity.md#delegationnonce)
- [flipKeyWordPairs](JsonIdentity.md#flipkeywordpairs)
- [flips](JsonIdentity.md#flips)
- [generation](JsonIdentity.md#generation)
- [invitees](JsonIdentity.md#invitees)
- [inviter](JsonIdentity.md#inviter)
- [invites](JsonIdentity.md#invites)
- [isPool](JsonIdentity.md#ispool)
- [lastValidationFlags](JsonIdentity.md#lastvalidationflags)
- [madeFlips](JsonIdentity.md#madeflips)
- [online](JsonIdentity.md#online)
- [penalty](JsonIdentity.md#penalty)
- [profileHash](JsonIdentity.md#profilehash)
- [pubkey](JsonIdentity.md#pubkey)
- [requiredFlips](JsonIdentity.md#requiredflips)
- [shardId](JsonIdentity.md#shardid)
- [stake](JsonIdentity.md#stake)
- [state](JsonIdentity.md#state)
- [totalQualifiedFlips](JsonIdentity.md#totalqualifiedflips)
- [totalShortFlipPoints](JsonIdentity.md#totalshortflippoints)

## Constructors

### constructor

• **new JsonIdentity**(`address`, `profileHash`, `stake`, `invites`, `age`, `state`, `pubkey`, `requiredFlips`, `availableFlips`, `flipKeyWordPairs`, `madeFlips`, `totalQualifiedFlips`, `totalShortFlipPoints`, `flips`, `online`, `generation`, `code`, `invitees`, `penalty`, `lastValidationFlags`, `delegatee`, `delegationEpoch`, `delegationNonce`, `isPool`, `inviter`, `shardId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `profileHash` | `string` |
| `stake` | `string` |
| `invites` | `number` |
| `age` | `number` |
| `state` | `string` |
| `pubkey` | `string` |
| `requiredFlips` | `number` |
| `availableFlips` | `number` |
| `flipKeyWordPairs` | `JsonFlipWords`[] |
| `madeFlips` | `number` |
| `totalQualifiedFlips` | `number` |
| `totalShortFlipPoints` | `number` |
| `flips` | `string`[] |
| `online` | `boolean` |
| `generation` | `number` |
| `code` | `string` |
| `invitees` | `JsonTxAddr`[] |
| `penalty` | `string` |
| `lastValidationFlags` | `string`[] |
| `delegatee` | `string` |
| `delegationEpoch` | `number` |
| `delegationNonce` | `number` |
| `isPool` | `boolean` |
| `inviter` | `JsonInviter` |
| `shardId` | `number` |

#### Defined in

[models/json/index.ts:78](https://github.com/idena-network/idena-sdk-js/blob/f054b38/src/models/json/index.ts#L78)

## Properties

### address

• **address**: `string`

___

### age

• **age**: `number`

___

### availableFlips

• **availableFlips**: `number`

___

### code

• **code**: `string`

___

### delegatee

• **delegatee**: `string`

___

### delegationEpoch

• **delegationEpoch**: `number`

___

### delegationNonce

• **delegationNonce**: `number`

___

### flipKeyWordPairs

• **flipKeyWordPairs**: `JsonFlipWords`[]

___

### flips

• **flips**: `string`[]

___

### generation

• **generation**: `number`

___

### invitees

• **invitees**: `JsonTxAddr`[]

___

### inviter

• **inviter**: `JsonInviter`

___

### invites

• **invites**: `number`

___

### isPool

• **isPool**: `boolean`

___

### lastValidationFlags

• **lastValidationFlags**: `string`[]

___

### madeFlips

• **madeFlips**: `number`

___

### online

• **online**: `boolean`

___

### penalty

• **penalty**: `string`

___

### profileHash

• **profileHash**: `string`

___

### pubkey

• **pubkey**: `string`

___

### requiredFlips

• **requiredFlips**: `number`

___

### shardId

• **shardId**: `number`

___

### stake

• **stake**: `string`

___

### state

• **state**: `string`

___

### totalQualifiedFlips

• **totalQualifiedFlips**: `number`

___

### totalShortFlipPoints

• **totalShortFlipPoints**: `number`
