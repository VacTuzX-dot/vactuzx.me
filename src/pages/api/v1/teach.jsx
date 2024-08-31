export default async (req, res) => {
  const techs = [
    {
      name: "HTML",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg",
    },
    {
      name: "Node.js",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Next.js",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Github",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    {
      name: "Adobe Photoshop",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
    },
    {
      name: "Adobe Illustrator",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
    },

    {
      name: "Adobe Premiere Pro",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/premierepro/premierepro-plain.svg",
    },
    {
      name: "Visual Studio Code",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    },
    {
      name: "React",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "TailwindCSS",
      src: "https://ph-files.imgix.net/2e26f07f-e5e5-411e-ba1e-e92c4083bd92.png?auto=format&fit=crop",
    },

    {
      name: "Canva",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg",
    },
    {
      name: "Netlify",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg",
    },
    {
      name: "Vercel",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
    {
      name: "Postman",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
    },
    {
      name: "Git",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "Replit",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/replit/replit-original.svg",
    },

    {
      name: "Bootstrap",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "C++",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Arduino UNO",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original-wordmark.svg",
    },
    {
      name: "Windows OS",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/windows11/windows11-original.svg",
    },
    {
      name: "jQuery",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-plain.svg",
    },
    {
      name: "PHP",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    },
    {
      name: "MySQL",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
      name: "Slack",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg",
    },
    {
      name: "Vite",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
    },
  ];
  res.status(200).json(techs);
};
