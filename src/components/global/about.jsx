import config from "../../../config";
import swr from "../../lib/swr";
import countryselect from "../../utils/country";
import { useEffect, useState } from "react";
export default function About() {
  const { data: me, isLoading: isLoadingMe } = swr("api/v1/me", {
    refreshInterval: 15000,
  });
  const _me = me ? me : null;
  const { data: weather, isLoading: isLoadingWeather } = swr("/api/v1/weather");
  const _weather = weather ? weather : null;
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 mb-10">
      <div className="w-full h-full flex justify-center items-center">
        {_me?.status || isLoadingMe ? (
          <div className="px-4 sm:px-6 w-full h-full">
            <div className="w-full h-full mb-5 rounded-3xl border border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-[#0d0f14] backdrop-blur-sm shadow-xl shadow-indigo-500/5 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="flex md:shrink-0 justify-center md:justify-start w-full md:w-auto">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-400 p-[3px] rounded-full">
                      <div className="rounded-full bg-white dark:bg-[#0d0f14] p-1">
                        <img
                          className="rounded-full w-32 h-32 sm:w-36 sm:h-36 object-cover"
                          src={
                            _me?.data?.discord_user?.avatar?.startsWith?.("a_")
                              ? `https://cdn.discordapp.com/avatars/${_me?.data?.discord_user?.id}/${_me?.data?.discord_user?.avatar}.gif`
                              : `https://cdn.discordapp.com/avatars/${_me?.data?.discord_user?.id}/${_me?.data?.discord_user?.avatar}.png`
                          }
                          alt="Discord avatar"
                        />
                      </div>
                    </div>
                    <span className="w-4 h-4 bg-[#0d0f14] dark:bg-white rounded-full absolute bottom-2 right-2 border border-white dark:border-[#0d0f14]" />
                    {_me?.data?.discord_status ? (
                      <span
                        className={`w-3.5 h-3.5 rounded-full absolute bottom-2 right-2 ring-[3px] ring-white dark:ring-[#0d0f14] pulse-avatar-${_me.data.discord_status.toUpperCase()}`}
                      />
                    ) : null}
                  </div>
                </div>

                <div className="mt-1 w-full space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
                      Hey, I&apos;m <span className="text-indigo">Leo</span>
                    </h1>
                    {_me?.data?.discord_status ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200">
                        {_me.data.discord_status.toUpperCase()}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-base leading-relaxed text-gray-700 dark:text-white/70">
                    {config.about.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <InfoChip
                      icon="fa-location-dot"
                      label="Where I am"
                      value={
                        _weather?.data?.name
                          ? `${_weather?.data?.name}, ${countryselect(
                              _weather?.data?.sys.country
                            )}`
                          : "Loading..."
                      }
                      loading={isLoadingWeather}
                    />
                    <InfoChip
                      icon="fa-clock"
                      label="Local time"
                      value={time}
                      loading={false}
                    />
                    <InfoChip
                      icon="fa-cloud-sun-rain"
                      label="Weather"
                      value={
                        _weather?.data
                          ? `${_weather?.data?.weather?.[0]?.main || ""} · ${
                              _weather?.data?.main?.temp
                            }°C · ${_weather?.data?.main?.humidity}%`
                          : "Loading..."
                      }
                      loading={isLoadingWeather}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function InfoChip({ icon, label, value, loading }) {
  return (
    <div className="border border-gray-200/60 dark:border-gray-700/60 rounded-2xl px-4 py-3 bg-gray-50/80 dark:bg-white/5">
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-white">
        <i className={`fas ${icon} text-indigo`} />
        <span>{label}</span>
      </div>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
        {loading ? "Loading..." : value}
      </p>
    </div>
  );
}
