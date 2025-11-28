import "../styles/globals.css";
import "../styles/nprogress.css";
import config from "../../config";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import Head from "next/head";
import "tippy.js/animations/shift-away.css";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  // Nprogress

  const router = useRouter();

  nProgress.configure({
    showSpinner: true,
  });

  useEffect(() => {
    nProgress.start();

    nProgress.done();
  }, [router.asPath]);

  // Auto Title

  for (const key in config.titles) {
    if (config.titles[key].url === router.pathname) {
      var title = config.titles[key].title;
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-white to-[#eef2ff] dark:from-[#06070b] dark:via-[#090b12] dark:to-[#0d1019] text-slate-900 dark:text-slate-100">
        <Head>
          <title>
            {title ? title + " | " + config?.title : "404 | " + config?.title}
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={config.meta.description} />
        </Head>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10">
          <Header />
          <main className="space-y-8 sm:space-y-10">
            <Component {...pageProps} />
          </main>
          <Footer />
          <div className="layout-color layout-right"></div>
          <div className="layout-color layout-left"></div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
