import { useRouter } from "next/router";
export default function Blog() {
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-10 px-4 sm:px-8">
      <main className="flex flex-col items-center justify-center w-full max-w-3xl text-center space-y-6 sm:space-y-8 bg-white/70 dark:bg-white/5 rounded-3xl border border-gray-200/70 dark:border-gray-800 shadow-xl shadow-indigo-500/5 p-8 sm:p-12">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300 font-semibold">
          Blog
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white leading-tight">
          Fresh posts are brewing.
        </h1>
        <p className="text-base sm:text-lg text-gray-700 dark:text-white/70">
          I&apos;m curating stories, writeups, and notes. Stay tuned for the first drop.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            className="bg-indigo text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo/90 transition-colors"
            onClick={() => router.back()}
          >
            Go Back
          </button>
          <a
            href="mailto:vactuzx@hotmail.com"
            className="px-6 py-3 rounded-xl font-semibold border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
          >
            Notify me
          </a>
        </div>
      </main>
    </div>
  );
}
