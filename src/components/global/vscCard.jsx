import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import useMe from "../../hooks/useMe";
import useLiteMotion from "../../hooks/useLiteMotion";

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
  let chosen = null;

  for (const activity of activities) {
    if (!activity || activity.type === 4) continue;

    const currentCreatedAt = activity.created_at ?? 0;
    const chosenCreatedAt = chosen?.created_at ?? 0;

    if (!chosen || currentCreatedAt > chosenCreatedAt) {
      chosen = activity;
    }
  }

  return chosen;
}

export default function VscCard() {
  const { data: me } = useMe();
  const liteMotion = useLiteMotion();

  const motionProps = useMemo(
    () =>
      liteMotion
        ? {
            initial: false,
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -4 },
            transition: { duration: 0.15 },
          }
        : {
            initial: { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -6 },
            transition: { duration: 0.4 },
          },
    [liteMotion]
  );
  const activity = useMemo(
    () => pickPrimaryActivity(me?.data?.activities),
    [me?.data?.activities]
  );

  const activityImage = useMemo(
    () => (activity ? getActivityImage(activity) : null),
    [activity]
  );

  const label = useMemo(() => {
    if (!activity) return null;

    return activity.name
      ? `${ACTIVITY_LABELS[activity.type] || "Doing"} ${activity.name}`
      : ACTIVITY_LABELS[activity.type] || "Discord activity";
  }, [activity]);

  const handleImageError = useCallback((event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  }, []);

  if (!activity) return null;

  return (
    <motion.div {...motionProps} className="mt-4">
      <div className="w-full rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg shadow-blue-500/20 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {activityImage ? (
            <img
              src={activityImage}
              alt={activity?.name || "Discord activity"}
              loading="lazy"
              decoding="async"
              onError={handleImageError}
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
