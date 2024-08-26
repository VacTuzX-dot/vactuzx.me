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
      name: "Node.js",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Mongo DB",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "TailwindCSS",
      src: "https://ph-files.imgix.net/2e26f07f-e5e5-411e-ba1e-e92c4083bd92.png?auto=format&fit=crop",
    },
    {
      name: "MySQL",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
      name: "React",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Git",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "Yarn",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg",
    },
    {
      name: "Photoshop CC",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
    },
    {
      name: "Illustrator CC",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
    },
  ];
  res.status(200).json(techs);
};
