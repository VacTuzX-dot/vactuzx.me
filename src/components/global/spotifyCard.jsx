import { useMemo } from "react";
import { motion } from "framer-motion";
import useMe from "../../hooks/useMe";
import useLiteMotion from "../../hooks/useLiteMotion";

export default function SpotifyCard() {
  const { data: me } = useMe();
  const liteMotion = useLiteMotion();
  const track = useMemo(() => me?.data?.spotify || null, [me]);

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
  const interactiveProps = useMemo(
    () =>
      liteMotion
        ? {}
        : {
            whileHover: { y: -4, scale: 1.01 },
            whileTap: { scale: 0.99 },
          },
    [liteMotion]
  );

  if (!track) return null;

  return (
    <motion.div {...motionProps} {...interactiveProps} className="mt-8">
      <div className="relative overflow-hidden w-full rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white shadow-lg shadow-emerald-500/20 p-5 sm:p-6">
        <div className="absolute -top-12 -right-6 w-24 h-24 bg-emerald-400/15 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-teal-300/10 blur-3xl rounded-full" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative z-10">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-emerald-500 blur-xl opacity-60" />
            <img
              src={track?.album_art_url}
              alt={track?.song}
              loading="lazy"
              decoding="async"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl shadow-md object-cover relative z-10 transition-transform duration-200"
            />
          </div>

          <div className="flex-1 space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-100/80">
              Listening on Spotify
            </p>
            <h3 className="text-xl font-semibold leading-snug">{track?.song}</h3>
            <p className="text-sm text-emerald-100/90">{track?.artist}</p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white">
              <i className="fa-brands fa-spotify mr-2" />
              Live
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
