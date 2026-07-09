import React from "react";
import { motion } from "framer-motion";
import { Download } from "@/components/animate-ui/icons/download";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const ResumeButton = () => {
  const curtain = {
    initial: {
      x: "-120%",
    },
    hover: {
      x: "0%",
    },
  };
  return (
    <motion.div
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
      initial="initial"
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative group"
    >
      {/* corners */}
      <motion.div
        variants={{
          hover: {
            scaleX: 1.07,
            scaleY: 1.17,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="absolute inset-0"
      >
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-secondary/90 group-hover:border-accent transition-colors duration-300" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-secondary/90 group-hover:border-accent transition-colors duration-300" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-secondary/90 group-hover:border-accent transition-colors duration-300" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-secondary/90 group-hover:border-accent transition-colors duration-300" />
      </motion.div>

      <motion.button
        className="
      relative overflow-hidden
      px-7 py-3
      font-bold text-lg
      flex items-center justify-center gap-2
    "
      >
        <motion.span
          variants={curtain}
          transition={{
            duration: 0.45,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
        absolute
        -top-10 -left-20
        w-[205%] h-[335%]
        rotate-45
        bg-accent
        z-0
      "
        />
        <motion.span
          variants={{
            hover: {
              opacity: 0,
            },
          }}
          className="
      absolute inset-0
      opacity-30
    "
          style={{
            backgroundImage:
              "repeating-linear-gradient(120deg, black 0px, black 1px, transparent 1px, transparent 6px)",
          }}
        />
        <span
          className="
        relative z-10
        transition-colors
        group-hover:text-white
      "
        >
          Resume
        </span>

        <AnimateIcon animateOnHover>
          <Download
            className="
          relative z-10
          transition-colors
          group-hover:text-white
          size-6
        "
          />
        </AnimateIcon>
      </motion.button>
    </motion.div>
  );
};

export default ResumeButton;
