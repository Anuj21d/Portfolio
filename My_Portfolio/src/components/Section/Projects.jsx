import React from "react";
import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "AI Sketch Caption Generator",
      image: "/Projects/AISketchCaption.png",
      description:
        "A responsive AI chatbot with real-time conversations powered by the Gemini API. Designed with a modern chat interface, smooth animations, and an intuitive user experience.",
      tech: ["React", "Tailwind CSS", "Gemini API", "JavaScript"],
      github:
        "https://github.com/Anuj21d/Projects_React/tree/main/react-ai-sketch-caption-generator",
      live: "https://projects-react-delta.vercel.app/",
    },
    {
      id: 2,
      name: "RAG ChatBot",
      image: "/Projects/ChatBot.png",
      description:
        "A Retrieval-Augmented Generation (RAG) chatbot that delivers context-aware responses by combining vector search with Google's Gemini API. Features document retrieval, semantic search, and a modern conversational interface.",
      tech: ["React", "Tailwind CSS", "Python", "FastAPI", "Gemini API", "RAG"],
      github: "https://github.com/Anuj21d/Projects_React/tree/main/Chat_Bot",
      live: "https://projects-react-fddi.vercel.app/",
    },
    {
      id: 3,
      name: "Jackie Jeans",
      image: "/Projects/JackieJeans.png",
      description:
        "A modern fashion e-commerce website featuring responsive layouts, interactive product pages, and a visually engaging shopping experience focused on performance and usability.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Anuj21d/jackie_Jeans.git",
      live: "https://jackiejeans-pied.vercel.app/",
    },
    {
      id: 4,
      name: "Typing Speed Test",
      image: "/Projects/TypingTest.png",
      description:
        "A typing practice application that measures typing speed, accuracy, and words per minute in real time while providing an interactive and responsive user experience.",
      tech: ["React", "JavaScript", "TailWind CSS"],
      github:
        "https://github.com/Anuj21d/Projects_React/tree/9a63cc738a81c65cfcdae471eead14f253a167d9/Typing_Speed_Test",
      live: "https://typing-test-website-91vx.onrender.com/",
    },
    {
      id: 5,
      name: "Task Management System",
      image: "/Projects/TaskManagment.png",
      image: "/Projects/TaskManagment.png",
      description:
        "A full-stack task management application with secure authentication, task organization, CRUD operations, and an intuitive interface for efficient productivity.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Anuj21d/Task_Managment_React.git",
      live: "https://task-managment-react-sandy.vercel.app/",
    },
  ];

  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover)");

    setCanHover(media.matches);

    const handler = (e) => setCanHover(e.matches);

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);
  return (
    <div className="m-auto flex w-full flex-col gap-12 px-4 pb-8 sm:gap-15 sm:px-6 lg:w-[70vw] lg:gap-25 lg:p-10">
      <div className="flex gap-5 justify-center">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.4 }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          src="/megaphone-01-stroke-rounded.svg"
          alt=""
        />
        <h2 className="text-4xl font-black text-secondary">
          Projects <span className="text-accent">Built</span>
        </h2>
      </div>
      <div className="flex flex-col gap-10 border-y border-secondary/50 py-6 sm:gap-15 sm:p-10">
        {projects.map((project) => (
          <motion.div
            initial={canHover ? "rest" : false}
            whileHover={canHover ? "hover" : undefined}
            animate={!canHover ? "hover" : undefined}
            key={project.id}
            className="group flex gap-10 border-b border-secondary/20 py-6"
          >
            <div>
              <motion.h2
                variants={{
                  rest: { color: "#0c303f" },
                  hover: { color: "#e46857" },
                }}
                className="text-3xl font-bold"
              >
                {project.name}
              </motion.h2>

              <motion.div
                variants={{
                  rest: {
                    height: 0,
                    opacity: 0,
                    marginTop: 0,
                  },
                  hover: {
                    height: "auto",
                    opacity: 1,
                    marginTop: 12,
                  },
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="overflow-hidden w-full"
              >
                <p className="lg:pr-20 text-secondary/70">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                variants={{
                  rest: {
                    y: 0,
                  },
                  hover: {
                    y: 15,
                  },
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="mt-5 flex flex-wrap gap-2"
              >
                <div className="flex flex-wrap gap-4 w-full">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-secondary/20 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <GitBranch size={20} />
                    Source Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={{
                rest: {
                  height: 0,
                  opacity: 0,
                  marginTop: 0,
                },
                hover: {
                  height: "auto",
                  opacity: 1,
                  marginTop: 20,
                },
              }}
              transition={{
                duration: 0.35,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="hidden lg:block relative p-4 bg-secondary/80 shadow-2xl"
            >
              <motion.div
                variants={{
                  hover: {
                    scaleX: 1.03,
                    scaleY: 1.06,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="absolute inset-0 -z-10"
              >
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-secondary/90  transition-colors duration-300" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-secondary/90 transition-colors duration-300" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-secondary/90 transition-colors duration-300" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-secondary/90 transition-colors duration-300" />
              </motion.div>
              <motion.img
                whileHover={{
                  scale: 1.02,
                }}
                src={project.image}
                width={1200}
                alt="Project Image"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
