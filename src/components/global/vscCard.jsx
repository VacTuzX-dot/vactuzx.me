import { motion } from "framer-motion";
import swr from "../../lib/swr";

export default function VscCard() {
  const { data: me } = swr("api/v1/me", { refreshInterval: 15000 });
  const data = me ? me.data.activities.find((x) => x.type === 0) : null;

  if (!data) return null;

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
          <img
            src={`https://cdn.discordapp.com/app-assets/${data?.application_id}/${data?.assets?.large_image}.png`}
            alt="Visual Studio Code"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md object-cover"
          />

          <div className="flex-1 space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-100/80">
              Coding in VS Code
            </p>
            <h3 className="text-lg sm:text-xl font-semibold leading-snug">
              {data?.details}
            </h3>
            <p className="text-sm text-blue-100/90">{data?.state}</p>
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
