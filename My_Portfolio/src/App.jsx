import React from "react";
import GridPattern from "./components/ui/GridPattern";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Section/Home";
import Experience from "./components/Section/Experience";
import CursorPet from "./components/CreatedAnimation/CursorPet";
import Projects from "./components/Section/Projects";
import Contact from "./components/Section/Contact";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
      relative
      flex
      flex-col
      min-h-[100dvh]
      bg-primary
      font-main
    "
        >
          <GridPattern
            className="
              absolute inset-0
              z-0
            "
          />

          <CursorPet />
          <Navbar />

          <div className="hidden lg:block fixed bottom-50 left-0 z-10 rotate-90 text-lg text-secondary">
            <p>anujwork2410@gmail.com</p>
          </div>

          <main className="flex-1 pt-15 lg:pt-30">
            <motion.section
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              id="Home"
              className="min-h-[80dvh] py-[2px] scroll-mt-30"
            >
              <Home />
            </motion.section>

            <motion.section
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              id="Experience"
              className="scroll-mt-10 lg:scroll-mt-24"
            >
              <Experience />
            </motion.section>

            <motion.section
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              id="Projects"
              className="scroll-mt-24"
            >
              <Projects />
            </motion.section>

            <motion.section
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              id="Contact"
              className="min-h-[80vh] scroll-mt-28"
            >
              <Contact />
            </motion.section>
          </main>
        </motion.div>
      )}
    </>
  );
}

export default App;
