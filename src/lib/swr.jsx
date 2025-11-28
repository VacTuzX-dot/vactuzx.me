import useSWR from "swr";

const DEFAULT_REFRESH_INTERVAL = 15000;
const DEFAULT_DEDUPING_INTERVAL = 5000;

const fetcher = async (href) => {
  const res = await fetch(href, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
};

const normalizeOptions = (options) =>
  typeof options === "number" ? { refreshInterval: options } : options || {};

export default function swr(url, options) {
  const normalized = normalizeOptions(options);
  const refreshInterval =
    normalized.refreshInterval ?? DEFAULT_REFRESH_INTERVAL;
  const dedupingInterval =
    normalized.dedupingInterval ??
    Math.max(DEFAULT_DEDUPING_INTERVAL, Math.floor(refreshInterval / 2));

  return useSWR(url, fetcher, {
    refreshInterval,
    dedupingInterval,
    revalidateOnFocus: normalized.revalidateOnFocus ?? false,
    revalidateOnReconnect: normalized.revalidateOnReconnect ?? false,
    keepPreviousData: normalized.keepPreviousData ?? true,
    ...normalized,
  });
}
