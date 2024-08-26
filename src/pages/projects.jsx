import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import swr from "../lib/swr";
import { useState } from "react";

// Component to handle the description with Read More functionality
const ProjectDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 100;
  const isLong = description.length > maxLength;
  const shortDescription = isLong
    ? `${description.slice(0, maxLength)}...`
    : description;

  return (
    <div className="text-black dark:text-white">
      <div className={`card-content ${isExpanded ? "expanded" : ""}`}>
        <p className="text-black dark:text-white">
          {isExpanded ? description : shortDescription}
        </p>
      </div>
      {isLong && (
        <button
          onClick={toggleExpand}
          className="text-blue-500 dark:text-blue-300 mt-2"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default function Projects() {
  const { data: projects } = swr("/api/v1/project");
  const data = projects ? projects : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className=" mt-20 mb-10 p-4">
        <h1 className="text-3xl font-bold  text-black dark:text-white">
          Projects
        </h1>
        <p className=" text-black dark:text-white mt-3 text-lg">
          Here are some of my projects.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {data.map?.((project, index) => (
              <div
                key={index}
                className="border-[2px] border-[#e2e3e5] dark:border-[#1a1a1c]   bg-[#fafcfb] dark:bg-[#151516] hover:scale-[1.05] rounded-md transition-all duration-300 shadow-2xl "
              >
                <div className="p-3">
                  <div className="flex justify-between items-center">
                    <div className=" items-center ">
                      <Link href={project?.html_url || "#"} target="_blank">
                        <Image
                          src={project?.link}
                          alt={project?.name}
                          width={400}
                          height={250}
                          className="rounded-md cursor-pointer"
                        />
                      </Link>
                      <div className="mt-2 text-base">
                        <p className="font-bold text-black dark:text-white">
                          {project?.name}
                        </p>
                        <p className="text-black dark:text-white">
                          {project?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
