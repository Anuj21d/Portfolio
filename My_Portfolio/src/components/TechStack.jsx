import { motion } from "framer-motion";
import { useState } from "react";

const logos = [
  {
    src: "/TechStack/react-stroke-rounded.svg",
    initial: { x: -20, y: -180 },
    hover: { x: -30, y: -260 },
  },
  {
    src: "/TechStack/tailwindcss-stroke-rounded.svg",
    initial: { x: -170, y: -70 },
    hover: { x: -260, y: -120 },
  },
  {
    src: "/TechStack/icons8-nodejs-32.svg",
    initial: { x: 160, y: -40 },
    hover: { x: 260, y: -90 },
  },
  {
    src: "/TechStack/java-script-stroke-rounded.svg",
    initial: { x: -230, y: 70 },
    hover: { x: -320, y: 120 },
  },
  {
    src: "/TechStack/typescript-01-stroke-rounded.svg",
    initial: { x: 40, y: 120 },
    hover: { x: 70, y: 200 },
  },
  {
    src: "/TechStack/mongodb.svg",
    initial: { x: 170, y: 80 },
    hover: { x: 270, y: 140 },
  },
  {
    src: "/TechStack/firebase.svg",
    initial: { x: -100, y: 210 },
    hover: { x: -170, y: 300 },
  },
  {
    src: "/TechStack/express-js.svg",
    initial: { x: 210, y: 190 },
    hover: { x: 300, y: 280 },
  },
  {
    src: "/TechStack/figma-stroke-rounded.svg",
    initial: { x: 0, y: 0 },
    hover: { x: 50, y: 60 },
  },
];
export default function TechConstellation() {
  const [hover, setHover] = useState(false);

  const radius = hover ? 250 : 180;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="hidden relative w-[650px] h-[650px] mx-auto lg:flex items-center justify-center pointer-events-auto"
    >
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2"
          animate={{
            x: hover ? logo.hover.x : logo.initial.x,
            y: hover ? logo.hover.y : logo.initial.y,
            rotate: hover ? (index % 2 === 0 ? -15 : 15) : 0,
            scale: hover ? 1.15 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: index * 0.03,
          }}
        >
          <motion.img
            src={logo.src}
            className="w-14"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2.5 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.25,
              rotate: 15,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
