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

const HASH = 'session'

const storage = new Storage(HASH)

const mtproto = MTProto({
  // ...
  app: { storage }
})
```
