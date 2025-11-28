export default async (req, res) => {
  const techs = [
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Bun",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
    },
    {
      name: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "TailwindCSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Vercel",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
      name: "Github",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Visual Studio Code",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Netlify",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg",
    },
    {
      name: "Canva",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg",
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
      name: "Bootstrap",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "C++",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Arduino UNO",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    },
    {
      name: "Windows OS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
    },
    {
      name: "macOS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    },
    {
      name: "Debian",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",
    },
    {
      name: "Arch Linux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
    },
  ];
  res.status(200).json(techs);
};
