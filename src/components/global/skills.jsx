import { motion } from "framer-motion";
import Image from "next/image";
import swr from "../../lib/swr";
export default function Teach() {
  const { data: tech } = swr("/api/v1/teach");
  const data = tech ? tech : [];

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between gap-2">
        <div className="text-2xl font-bold flex items-center dark:text-white">
          <div className="w-10 h-10 rounded-full items-center flex justify-center mr-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo">
            <i className="fas fa-book text-xl" />
          </div>
          Languages &amp; Tools
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {data?.length || 0} items
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {data
          ? data.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                key={index}
                className="border border-gray-200/70 dark:border-gray-700/60 bg-white/70 dark:bg-white/5 rounded-xl p-3 sm:p-4 shadow-sm shadow-indigo-500/5 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <Image
                    className="rounded-md"
                    src={item.src}
                    alt={item.name}
                    width={28}
                    height={28}
                  />
                  <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white leading-snug">
                    {item.name}
                  </p>
                </div>
              </motion.div>
            ))
          : null}
      </div>
    </div>
  );
}
