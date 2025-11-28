import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import swr from "../../lib/swr";
import useLiteMotion from "../../hooks/useLiteMotion";

const formatNumber = (value) =>
  new Intl.NumberFormat("en", { notation: "compact" }).format(value || 0);

const formatDate = (value) =>
  value ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(value)) : "—";

const RepoSkeleton = () => (
  <div className="w-full border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] shadow-lg rounded-md p-4 animate-pulse">
    <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded" />
    <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-800 rounded mt-3" />
    <div className="flex gap-3 mt-6">
      <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
      <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
      <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
    </div>
  </div>
);

export default function Repositories() {
  const {
    data: github,
    error,
    isLoading,
    mutate,
  } = swr("/api/v1/repos", { refreshInterval: 120000 });
  const liteMotion = useLiteMotion();

  const repos = useMemo(() => {
    if (!github?.data) return [];

    return github.data
      .filter((repo) => !repo.fork)
      .slice()
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 9);
  }, [github]);

  const cardMotionProps = useMemo(
    () =>
      liteMotion
        ? {
            initial: false,
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.15 },
          }
        : {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            transition: { duration: 0.3 },
          },
    [liteMotion]
  );

  return (
    <div className="w-full h-full">
      <div className="text-2xl font-bold flex items-center text-black dark:text-white">
        <div className="w-10 h-10 items-center flex justify-center mr-2">
          <i className="ml-2 fab text-indigo z-index-2 fa-github text-4xl mr-2" />
        </div>
        Github Repositories
        <span className="ml-auto text-sm font-medium text-gray-600 dark:text-gray-300">
          {repos.length > 0 ? `${repos.length} featured` : "Loading…"}
        </span>
      </div>

      <div className="w-full mt-5">
        {error ? (
          <div className="w-full border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-200 rounded-md p-4 flex items-center justify-between">
            <div>
              <p className="font-semibold">Couldn&apos;t load repositories.</p>
              <p className="text-sm opacity-90">Check your GitHub token or rate limits.</p>
            </div>
            <button
              onClick={() => mutate()}
              className="px-3 py-1 rounded-md bg-red-600 text-white text-sm hover:bg-red-500 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full mt-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => <RepoSkeleton key={`skeleton-${idx}`} />)
            : null}

          {!isLoading && repos.length === 0 && !error ? (
            <div className="col-span-full border-[2px] border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center text-gray-600 dark:text-gray-300">
              <p className="font-semibold text-lg">No repositories found</p>
              <p className="text-sm mt-1">Come back later for more projects.</p>
            </div>
          ) : null}

          {repos.map((repo) => (
            <Link href={repo.html_url} key={repo.id} target="_blank" rel="noreferrer">
              <motion.div
                {...cardMotionProps}
                className="w-full border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c] bg-[#fafcfb] dark:bg-[#151516] shadow-lg rounded-md cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl p-4 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-semibold text-black dark:text-white break-words">
                      {repo.name}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-snug min-h-[2.5rem]">
                      {repo.description || "No description provided."}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200">
                    {repo.visibility || "public"}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-200">
                  <div className="flex items-center gap-1">
                    <i className="fas fa-star text-yellow-400" />
                    <span>{formatNumber(repo.stargazers_count)} stars</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="fas fa-code-branch text-indigo" />
                    <span>{formatNumber(repo.forks_count)} forks</span>
                  </div>
                  {repo.language ? (
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span>{repo.language}</span>
                    </div>
                  ) : null}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Updated {formatDate(repo.pushed_at)}</span>
                  <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                    View on GitHub →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
