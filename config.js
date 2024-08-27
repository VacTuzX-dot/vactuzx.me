require("dotenv").config();
module.exports = {
  discord: {
    id: "942687569693528084",
  },
  github: {
    token1: process.env.GITHUB_TOKEN1,
    token2: process.env.GITHUB_TOKEN2,
  },
  about: {
    description:
      "My name is Taweesak Numma, and I'm a 17-year-old developer based in Chiang Mai. I'm excited about exploring my coding skills through personal projects and constantly striving to improve my knowledge.",
  },
  social: {
    github: "https://github.com/VacTuzX-dot",
    instagram: "https://www.instagram.com/v4lk.yrieq_1sf3sb.o8lixw/",
    facebook: "https://www.facebook.com/vactuz/",
  },
  meta: {
    title: "My Personal Website",
    description: "Leo Personal Website",
    theme: "#02060f",
    lang: "en",
    url: "https://vactuzx-me.vercel.app/",
    image: "https://i.imgur.com/RJgxLfV.png",
  },
  title: "VacTuzX",
  titles: [
    { title: "Home", url: "/", icon: "fa-house" },
    { title: "Projects", url: "/projects", icon: "fa-blog" },
    { title: "Blog", url: "/blog", icon: "fa-code" },
  ],
};
