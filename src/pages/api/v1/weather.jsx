import axios from "axios";
import { getCache, setCache } from "../../../utils/cache";

const CACHE_KEY = "weather-chiang-mai";
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export default async function handler(req, res) {
  const url = "https://api.openweathermap.org/data/2.5/";
  const key = "aee9368ab4b3e538bec75d39005eccf3";
  const cityName = "chiang mai";

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
      `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
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
