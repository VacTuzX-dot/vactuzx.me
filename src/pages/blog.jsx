import { useRouter } from "next/router";
export default function Blog() {
  const router = useRouter();
  return (
    <div className="flex h-screen items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-7xl font-bold text-black dark:text-white">
          Coming Soon
        </h1>
        <button
          className="bg-indigo mt-10 translation duration-300 text-white px-8 py-3 rounded-md hover:bg-indigo/80"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </main>
    </div>
  );
}
