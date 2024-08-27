import "dotenv/config"; // Ensure environment variables are loaded before using them
import axios from "axios";
import config from "../../../../config";

export default async function handler(req, res) {
  try {
    const token = config.github.token1;
    const { data } = await axios.get(
      `https://api.github.com/users/vactuzx-dot/repos`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return res.json({
      status: true,
      data: data,
    });
  } catch (err) {
    console.error("Error fetching GitHub repos:", err);
    return res.json({
      status: false,
      data: err.message,
    });
  }
}
