import React from "react";
import { easeIn, motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-16 sm:gap-14 sm:py-20 lg:gap-20 lg:px-0 lg:py-35">
      <div>
        <h1 className="text-4xl text-secondary font-black mb-4 flex gap-8">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.4 }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            src="/3d-scale-stroke-rounded.svg"
            alt=""
          />
          My Experience
        </h1>
      </div>
      <div className="flex w-full flex-col gap-5 bg-secondary/95 p-4  lg:h-[680px] lg:w-[65%] lg:overflow-y-auto lg:p-10 scrollbar-hide">
        <div className="group flex flex-col gap-6 p-4 transition-all duration-300 hover:bg-primary/10 lg:flex-row lg:gap-10 lg:p-8 lg:hover:scale-[1.02]">
          <div className="lg:min-w-[170px]">
            <p className="text-primary/70 text-sm font-medium">
              Aug 2025 – Dec 2025
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-primary transition-colors group-hover:text-accent">
              Application Development Intern
            </h2>

            <p className="mt-1 text-primary/70 font-medium">
              Nexanova Pro Tech
            </p>

            <p className="mt-5 lg:leading-8 text-primary/80 text-sm lg:text-lg">
              I worked on building responsive, interactive, and high-performance
              web applications using React.js, Tailwind CSS, HTML, CSS,
              JavaScript, and Java. I collaborated with the development team to
              design and implement new features, integrate frontend and backend
              functionality, debug issues, optimize performance, and improve
              overall application quality. 
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4 ">
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-3 py-2 bg-primary/95 text-accent rounded-full text-bold text-sm lg:text-lg"
              >
                Java
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-3 py-2 bg-primary/95 text-accent rounded-full text-bold text-sm lg:text-lg"
              >
                JavaScript
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-3 py-2 bg-primary/95 text-accent rounded-full text-bold text-sm lg:text-lg"
              >
                React.js
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-3 py-2 bg-primary/95 text-accent rounded-full text-bold text-sm lg:text-lg"
              >
                Tailwind Css
              </motion.span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-6 p-4 transition-all duration-300 hover:bg-primary/10 lg:flex-row lg:gap-10 lg:p-8 lg:hover:scale-[1.02]">
          <div className="lg:min-w-[170px]">
            <p className="text-primary/70 text-sm font-medium">
              Jun 2025 – Aug 2025
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-primary transition-colors group-hover:text-accent">
              Web Development Intern
            </h2>

            <p className="mt-1 text-primary/70 font-medium">kootumb Pvt Ltb</p>

            <p className="mt-5 lg:leading-8 text-primary/80 text-sm lg:text-lg">
              During my experience as a Frontend Developer, I focused on
              creating fast, responsive, and visually engaging web applications
              using React.js, JavaScript, and Tailwind CSS. I designed reusable
              UI components, integrated REST APIs, and optimized application
              performance to deliver seamless user experiences across devices.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 items-center ">
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-3 py-2 bg-primary/95 text-accent rounded-full text-bold text-sm lg:text-lg"
              >
                React.js
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-3 py-2 bg-primary/95 text-accent rounded-full text-bold text-sm lg:text-lg"
              >
                Node.js
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-3 py-2 bg-primary/95 text-accent rounded-full text-bold text-sm lg:text-lg"
              >
                JavaScript
              </motion.span>

              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-3 py-2 bg-primary/95 text-accent rounded-full text-bold text-sm lg:text-lg"
              >
                Tailwind Css
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
