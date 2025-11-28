import swr from "../lib/swr";

const ME_ENDPOINT = "/api/v1/me";
const DEFAULT_REFRESH_INTERVAL = 15000;
const MOBILE_REFRESH_INTERVAL = 30000;
const MIN_DEDUPING_INTERVAL = 7500;

const isNarrowScreen = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(max-width: 640px)").matches;

export default function useMe(options) {
  const provided = options || {};
  const refreshInterval =
    provided.refreshInterval ??
    (isNarrowScreen() ? MOBILE_REFRESH_INTERVAL : DEFAULT_REFRESH_INTERVAL);

  const dedupingInterval =
    provided.dedupingInterval ??
    Math.max(MIN_DEDUPING_INTERVAL, Math.floor(refreshInterval / 2));

  return swr(ME_ENDPOINT, {
    refreshInterval,
    dedupingInterval,
    ...provided,
  });
}
