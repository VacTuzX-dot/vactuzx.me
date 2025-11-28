import axios from "axios";
import config from "../../../../config";
import { getCache, setCache } from "../../../utils/cache";

const CACHE_KEY = "lanyard-me";
const CACHE_TTL = 15 * 1000; // 15 seconds

export default async function handler(req, res) {
  try {
    const cached = getCache(CACHE_KEY);
    if (cached) {
      return res.json({
        status: true,
        data: cached,
        cached: true,
      });
    }

    const { data } = await axios.get(
      `https://api.lanyard.rest/v1/users/${config.discord.id}`
    );

    setCache(CACHE_KEY, data.data, CACHE_TTL);

    return res.json({
      status: true,
      data: data.data,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      data: err.message,
    });
  }
}
