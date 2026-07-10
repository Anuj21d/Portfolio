import React from "react";
import ResumeButton from "../Navbar/ResumeButton";
import { motion } from "framer-motion";

const Home = () => {
  const linkLogos = [
    {
      id: 1,
      src: "./public/linkedin-02-stroke-rounded.svg",
      href: "https://www.linkedin.com/in/anuj-dandavate-254482363/",
      alt: "Linkdin Logo",
    },
    {
      id: 2,
      src: "./public/github-stroke-rounded.svg",
      href: "https://github.com/Anuj21d",
      alt: "Github Logo",
    },
    {
      id: 3,
      src: "./public/mail-at-sign-01-stroke-rounded.svg",
      href: "mailto:anujwork2410@gmail.com",
      alt: "Mail Logo",
    },
    {
      id: 4,
      src: "./public/whatsapp-stroke-rounded.svg",
      href: "https://wa.me/+919209224604?text=Hi%20Anuj,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
      alt: "Whatsapp Logo",
    },
  ];
  return (
    <div className="relative px-5 lg:px-20 flex flex-col lg:flex-row lg:gap-30 justify-between min-h-[93.5dvh] lg:min-h-[90dvh] pb-10 pointer-events-none">
      <div className="flex flex-col gap-5 lg:gap-10 flex-1 justify-center lg:ml-20">
        <div className="leading-none tracking-tighter">
          <h3 className="text-[60px] lg:text-[80px] font-[900] text-accent">
            Full Stack
          </h3>
          <h3 className="text-[60px] lg:text-[80px] font-[900] pl-4">
            Developer
          </h3>
        </div>
        <div>
          <p className="lg:hidden text-[18px] text-secondary/80 mb-4 lg:mb-10 text-left">
            Hi, I’m <span className="text-secondary">Anuj</span>. A Full Stack
            Developer creating modern, responsive web experiences with clean
            code and smooth interactions.
          </p>
          <p className="hidden lg:inline-block text-[18px] text-secondary/80 mb-4 lg:mb-10 text-left">
            Hi, I’m <span className="text-secondary">Anuj</span>. A Full Stack
            Developer passionate about creating modern, responsive, and
            user-friendly web applications with clean code, smooth interactions,
            and thoughtful design.
          </p>
        </div>
        <div className="pointer-events-auto">
          <ResumeButton
            href="https://drive.google.com/file/d/1tRTRvJ92qe_-f8fwg7LeYtkb8Sg8XJwT/view?usp=sharing"
            className={"inline-block lg:hidden"}
          />
        </div>
        <div className="hidden lg:flex gap-7 justify-start items-center px-5 pointer-events-auto">
          {linkLogos.map((logo) => (
            <motion.button
              key={logo.id}
              onClick={() => window.open(logo.href, "_blank")}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href={logo.href}
              target="_blank"
            >
              <img className="size-8" src={logo.src} alt={logo.alt} />
            </motion.button>
          ))}
        </div>
      </div>
      <motion.div className="hidden lg:flex lg:scale-105 justify-center items-center">
        <img src="./public/Frame.svg" alt="Image" />
      </motion.div>
      <div className="flex lg:absolute lg:bottom-10 lg:right-30 justify-between items-center px-8 lg:gap-8">
        <div className="flex flex-col text-center">
          <span className="text-[28px] text-accent font-extrabold lg:text-[30px]">
            1+
          </span>
          <span className="text-secondary/80 text-[16px] ">Years of</span>
          <span className="text-secondary/80 text-[16px]">Experience</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-[28px] text-accent font-extrabold lg:text-[30px]">
            4+
          </span>
          <span className="text-secondary/80 text-[16px]">Completed</span>
          <span className="text-secondary/80 text-[16px]">Prpjects</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-[28px] text-accent font-extrabold lg:text-[30px]">
            1.5k+
          </span>
          <span className="text-secondary/80 text-[16px]">Hours</span>
          <span className="text-secondary/80 text-[16px]">Worked</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
