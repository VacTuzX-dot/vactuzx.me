import { motion } from "framer-motion";
import swr from "../../lib/swr";

const FALLBACK_IMAGE = "https://cdn.discordapp.com/embed/avatars/0.png";

const ACTIVITY_LABELS = {
  0: "Playing",
  1: "Streaming",
  2: "Listening to",
  3: "Watching",
  5: "Competing in",
};

function getActivityImage(activity) {
  const image =
    activity?.assets?.large_image || activity?.assets?.small_image || null;
  if (!image) return null;

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  if (image.startsWith("spotify:")) {
    const [, , spotifyImage] = image.split(":");
    return spotifyImage ? `https://i.scdn.co/image/${spotifyImage}` : null;
  }

  if (image.startsWith("mp:external/")) {
    // PreMiD and other presences encode external assets with Discord's media proxy path.
    const directExternal = image
      .replace(/^mp:external\/[^/]+\/https\//, "https://")
      .replace(/^mp:external\/[^/]+\/http\//, "http://");
    if (directExternal.startsWith("http")) {
      return directExternal;
    }
    return `https://media.discordapp.net/${image}`;
  }

  if (activity?.application_id) {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${image}.png`;
  }

  return null;
}

function pickPrimaryActivity(activities = []) {
  const filtered = activities.filter((activity) => activity?.type !== 4);

  return filtered.sort(
    (a, b) => (b?.created_at || 0) - (a?.created_at || 0)
  )[0];
}

export default function VscCard() {
  const { data: me } = swr("api/v1/me", { refreshInterval: 15000 });
  const activity = pickPrimaryActivity(me?.data?.activities);

  if (!activity) return null;

  const activityImage = getActivityImage(activity);
  const label = activity.name
    ? `${ACTIVITY_LABELS[activity.type] || "Doing"} ${activity.name}`
    : ACTIVITY_LABELS[activity.type] || "Discord activity";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.4 }}
      className="mt-4"
    >
      <div className="w-full rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg shadow-blue-500/20 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {activityImage ? (
            <img
              src={activityImage}
              alt={activity?.name || "Discord activity"}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = FALLBACK_IMAGE;
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md object-cover"
            />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md bg-white/10 flex items-center justify-center text-2xl">
              <i className="fas fa-bolt" />
            </div>
          )}

          <div className="flex-1 space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-100/80">
              {label}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold leading-snug">
              {activity?.details || activity?.name}
            </h3>
            <p className="text-sm text-blue-100/90">{activity?.state}</p>
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white text-sm font-semibold">
            <i className="fas fa-circle text-green-300 mr-2" />
            Live
          </span>
        </div>
      </div>
    </motion.div>
  );
}
