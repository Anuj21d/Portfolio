import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "@/components/animate-ui/icons/menu";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

const menu = ["Home", "Experience", "Projects", "Contact"];

export default function MobileMenu({
  active,
  isTap,
  setIsTap,
  scrollToSection,
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsTap(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [setIsTap]);

  return (
    <div
      ref={menuRef}
      className="relative flex items-center lg:hidden"
    >
      <AnimateIcon
        animateOnHover
        onTap={() => setIsTap((prev) => !prev)}
        className={`
          relative
          z-50
          rounded-xl
          p-2
          transition-colors
          duration-300
          ${
            isTap
              ? "bg-accent/20"
              : "bg-primary/30"
          }
        `}
      >
        <Menu className="size-8" />
      </AnimateIcon>

      <AnimatePresence>
        {isTap && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              absolute
              top-16
              right-0
              w-60
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-primary/90
              backdrop-blur-xl
              shadow-2xl
              z-50
            "
          >
            {menu.map((item, index) => (
              <motion.button
                key={item}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                onClick={() => {
                  setIsTap(false);
                  scrollToSection(item);
                }}
                className={`
                  w-full
                  px-6
                  py-4
                  text-left
                  transition-all
                  duration-200
                  hover:bg-accent/10
                  hover:pl-8
                  ${
                    active === item
                      ? "text-accent font-semibold bg-accent/10"
                      : "text-secondary"
                  }
                `}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}