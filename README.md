# mtproto-storage-redis

[![npm](https://img.shields.io/npm/v/mtproto-storage-redis.svg)](https://www.npmjs.com/package/mtproto-storage-redis)

Save [`telegram-mtproto`](https://github.com/zerobias/telegram-mtproto) session into redis hash

## Installation

```console
$ npm install mtproto-storage-redis
```

## Usage

```javascript
import { MTProto } from 'telegram-mtproto'
import Storage from 'mtproto-storage-redis'
// or
//   import { RedisStorage } from 'mtproto-storage-redis'
//   import { Storage } from 'mtproto-storage-redis'

const HASH = 'session'

const storage = new Storage(HASH)

const client = MTProto({
  // ...
  app: { storage }
})
```

## API

##### `new Storage(hash: string, redisOptions?: RedisOptions, redisInstance?: Redis) => Storage`

- `hash` - redis [hash](https://redis.io/topics/data-types#hashes) name
- `redisOptions` - [ioredis](https://github.com/luin/ioredis) options
- `redisInstance` - use existing ioredis instance

##### `storage.get(key: string) => Promise<any>`

##### `storage.set(key: string, val: any) => Promise<void>`

##### `storage.has(key: string) => Promise<boolean>`

##### `storage.remove(...keys: string[]) => Promise<void>`

##### `storage.clear() => Promise<void>`
