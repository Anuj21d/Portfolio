import { useState } from "react";
import { motion } from "framer-motion";

const menu = ["Home", "About", "Projects", "Contact"];

export default function Navlink() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="flex gap-8">
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
  );
}
