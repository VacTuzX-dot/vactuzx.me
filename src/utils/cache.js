const CACHE_STORE_KEY = "__apiCacheStore";
export const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

const getStore = () => {
  if (!globalThis[CACHE_STORE_KEY]) {
    globalThis[CACHE_STORE_KEY] = new Map();
  }

  return globalThis[CACHE_STORE_KEY];
};

export const getCache = (key) => {
  const store = getStore();
  const cached = store.get(key);

  if (!cached) return null;

  if (cached.expiresAt <= Date.now()) {
    store.delete(key);
    return null;
  }

  return cached.value;
};

export const setCache = (key, value, ttl = DEFAULT_TTL) => {
  const store = getStore();
  store.set(key, { value, expiresAt: Date.now() + ttl });
};
