import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import swr from "../lib/swr";

export default function Projects() {
  const { data: projects, isLoading } = swr("/api/v1/project");
  const data = projects || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
              Projects
            </h1>
            <p className="text-gray-700 dark:text-white/70 mt-2 text-base sm:text-lg">
              A curated set of recent builds and experiments.
            </p>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
            {isLoading ? "Loading..." : `${data.length} projects`}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/60 dark:bg-white/5 h-64 animate-pulse"
                />
              ))
            : null}

          {!isLoading && data.length === 0 ? (
            <div className="col-span-full text-center rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-white/5 p-8 text-gray-600 dark:text-gray-300">
              Nothing to show (yet). Check back soon.
            </div>
          ) : null}

          {data.map?.((project, index) => (
            <motion.div
              key={project?.name || index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              className="group rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-white/5 shadow-sm shadow-indigo-500/5 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <Link href={project?.html_url || "#"} target="_blank">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project?.link}
                    alt={project?.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                </div>
              </Link>

              <div className="p-4 sm:p-5 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                      {project?.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                      {project?.description}
                    </p>
                  </div>
                  <i className="fas fa-arrow-up-right-from-square text-indigo text-sm opacity-60 group-hover:opacity-100" />
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200 font-semibold">
                    Live
                  </span>
                  <span>Updated recently</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
