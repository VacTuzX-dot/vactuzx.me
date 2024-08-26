export default async (req, res) => {
  const project = [
    {
      name: "Nothing's",
      link: "https://i.imgur.com/yIFgDbh.png",
      description: "About ME and ETC.",
      html_url: "https://github.com/VacTuzX-dot/VacTuzX-dot",
    },
    {
      name: "TypeX",
      link: "https://i.imgur.com/tU0cm4V.png",
      description:
        "This website is to practice your typing skills. and have indicators such as WPM (speed), Accuracy",
      html_url: "https://type-x.vercel.app",
    },
    {
      name: "WeatherX",
      link: "https://i.imgur.com/PCFZ115.png",
      description:
        "This website checks the weather conditions of different countries.",
      html_url: "https://weather-x-lac.vercel.app",
    },
    {
      name: "Battery Status",
      link: "https://i.imgur.com/PRo72hS.png",
      description:
        "This website provides real-time information on battery level, device status, and user presence. (available on Android and Windows PC)",
      html_url: "https://battery-dt.vercel.app/",
    },
    {
      name: "My favorite musician",
      link: "https://i.imgur.com/UK7a3gp.png",
      description:
        "This website, a school project, showcases my favorite musician and others. It's a good fit.",
      html_url: "https://x-exm-0018.vercel.app/",
    },
    {
      name: "Recommended ChiangMai restaurants",
      link: "https://i.imgur.com/8WvGxgv.png",
      description:
        "This website recommends 9 Chiang Mai restaurants, a term-long school project similar to my favorite musician project.",
      html_url: "https://xbs-sepia.vercel.app/",
    },
  ];
  res.status(200).json(project);
};
