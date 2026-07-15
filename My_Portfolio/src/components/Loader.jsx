import { motion } from "framer-motion";

const letters = "ANUJ DANDAVATE".split("");

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-primary"
    >
      <div className="overflow-hidden">
        <h1 className="flex text-4xl sm:text-6xl font-black text-secondary">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                y: 120,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-secondary/60 tracking-[0.3em] uppercase"
      >
        Full Stack Developer
      </motion.p>

      <div className="mt-12 w-60 h-[2px] bg-secondary/20 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="h-full bg-accent"
        />
      </div>
    </motion.div>
  );
}