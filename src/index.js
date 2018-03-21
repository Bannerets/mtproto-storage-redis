// @flow

import Redis, { type RedisOptions } from 'ioredis'
import { type AsyncStorage } from 'mtproto-shared'

// import Logger from 'mtproto-logger'
// const log = Logger`redis-storage`

export class RedisStorage implements AsyncStorage {
  +redis: Redis
  +hash: string

  constructor (
    hash: string,
    redisOptions?: RedisOptions,
    redisInstance?: Redis
  ) {
    this.hash = hash
    this.redis = redisInstance || new Redis(redisOptions)
  }

  async get (key: string): Promise<any> {
    // log('get', `key ${key}`)
    const val = await this.redis.hget(this.hash, key)
    if (key === 'dc') return Number(val)
    return val
  }

  async set (key: string, val: any): Promise<void> {
    // log('set', `key ${key}`)(val)
    await this.redis.hset(this.hash, key, val)
  }

  async has (key: string): Promise<boolean> {
    // log('has')(`key ${key}`)
    const exists: 0 | 1 = await this.redis.hexists(this.hash, key)
    return !!exists
  }

  async remove (...keys: string[]): Promise<void> {
    // log('remove')(keys)
    await this.redis.hdel(this.hash, ...keys)
  }

  async clear (): Promise<void> {
    // log('clear')('ok')
    await this.redis.del(this.hash)
  }
}

export { RedisStorage as Storage }

export default RedisStorage
