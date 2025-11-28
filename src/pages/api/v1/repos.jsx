import axios from "axios";
import config from "../../../../config";
import { getCache, setCache } from "../../../utils/cache";

const CACHE_KEY = "github-repos";
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export default async function handler(req, res) {
  const cached = getCache(CACHE_KEY);
  if (cached) {
    return res.json({
      status: true,
      data: cached,
      cached: true,
    });
  }

  const token = config.github.token1 || config.github.token2;
  const headers = {
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const { data } = await axios.get(
      `https://api.github.com/users/vactuzx-dot/repos`,
      {
        headers,
        params: {
          per_page: 100,
          sort: "pushed",
          direction: "desc",
        },
      }
    );

    setCache(CACHE_KEY, data, CACHE_TTL);

    return res.json({
      status: true,
      data: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      data: err.message,
    });
  }
}
