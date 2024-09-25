import client from './redis.config';

class RedisService {
    async get(key: string): Promise<string | null> {
        return await client.get(key);
    }

    async set(key: string, value: string, ttl?: number): Promise<void> {
        await client.set(key, value);

        if (ttl) {
            await client.expire(key, ttl);
        }
    }
}

export default RedisService;