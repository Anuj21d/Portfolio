import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "@/components/animate-ui/icons/menu";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const menu = ["Home", "Experience", "Projects", "Contact"];

export default function Navlink() {
  const [active, setActive] = useState("Home");

  const [isTap, setIsTap] = useState(false);

  return (
    <>
      <nav className="hidden lg:flex gap-8">
        {menu.map((item) => (
          <motion.button
            key={item}
            onClick={() => setActive(item)}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className={`relative px-5 py-2 text-lg ${active === item ? "scale-110 text-accent font-bold" : "text-secondary/80"}`}
          >
            {active === item && (
              <motion.div
                layoutId="active-nav"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="absolute inset-0"
              >
                {/* top left */}
                <span
                  className="
                  absolute top-0 left-0
                  w-3 h-3
                  border-t-2 border-l-2
                  border-accent
                "
                />

                {/* top right */}
                <span
                  className="
                  absolute top-0 right-0
                  w-3 h-3
                  border-t-2 border-r-2
                  border-accent
                "
                />

                {/* bottom left */}
                <span
                  className="
                  absolute bottom-0 left-0
                  w-3 h-3
                  border-b-2 border-l-2
                  border-accent
                "
                />

                {/* bottom right */}
                <span
                  className="
                  absolute bottom-0 right-0
                  w-3 h-3
                  border-b-2 border-r-2
                  border-accent
                "
                />
              </motion.div>
            )}

            <span className="relative z-10">{item}</span>
          </motion.button>
        ))}
      </nav>
      <div className="lg:hidden flex flex-col relative ">
        <AnimateIcon animateOnHover
          onTap={() => setIsTap(!isTap)}
          className={`relative z-10 p-2 rounded-lg ${isTap ? "bg-accent/20" : "bg-primary/20"}`}
        >
          <Menu className="size-8" />
        </AnimateIcon>
        {isTap && (
          <div className="absolute top-16 right-6 bg-primary shadow-2xl p-4 flex flex-col gap-4">
            {menu.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setIsTap(false);
                }}
                className={`px-5 py-2 border-b-[0.5px] border-secondary/10 text-lg ${active === item ? "scale-110 text-accent font-bold" : "text-secondary/80"}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
