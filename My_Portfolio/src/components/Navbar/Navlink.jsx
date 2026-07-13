import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "@/components/animate-ui/icons/menu";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const menu = ["Home", "Experience", "Projects", "Contact"];

export default function Navlink() {
  const [active, setActive] = useState("Home");
  const [isTap, setIsTap] = useState(false);
  const isNavigating = useRef(false);
  const navigationFrame = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    isNavigating.current = true;
    cancelAnimationFrame(navigationFrame.current);
    setActive(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    const waitForDestination = () => {
      const top = section.getBoundingClientRect().top;

      if (top <= window.innerHeight * 0.55) {
        isNavigating.current = false;
        return;
      }

      navigationFrame.current = requestAnimationFrame(waitForDestination);
    };

    navigationFrame.current = requestAnimationFrame(waitForDestination);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("main > section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isNavigating.current) return;
            setActive(entry.target.id);
          }
        });
      },
      // The Contact section is at the end of the page, so it cannot always
      // occupy 50% of the viewport. Detect a section when it reaches the
      // central reading area instead.
      { rootMargin: "-20% 0px -45%", threshold: 0 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(navigationFrame.current);
    };
  }, []);

  return (
    <>
      <nav className="hidden lg:flex gap-8">
        {menu.map((item) => (
          <motion.button
            key={item}
            type="button"
            onClick={() => {
              scrollToSection(item);
            }}
            animate={{ scale: active === item ? 1.1 : 1 }}
            whileHover={{
              scale: active === item ? 1.1 : 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className={`relative px-5 py-2 text-lg transition-colors duration-200 ${active === item ? "text-accent font-bold" : "text-secondary/80"}`}
          >
            {active === item && (
              <motion.div
                layoutId="active-nav"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
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
        <AnimateIcon
          animateOnHover
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
                type="button"
                onClick={() => {
                  setIsTap(false);
                  scrollToSection(item);
                }}
                className={`px-5 py-2 border-b-[0.5px] border-secondary/10 text-lg transition-colors duration-200 ${active === item ? "text-accent font-bold" : "text-secondary/80"}`}
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
