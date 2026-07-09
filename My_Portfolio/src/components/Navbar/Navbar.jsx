import React from "react";
import Navlink from "./Navlink";
import { useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import ResumeButton from "./ResumeButton";

gsap.registerPlugin(ScrambleTextPlugin);

const Navbar = () => {
  const firstName = useRef(null);
  const lastName = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(firstName.current, {
      scrambleText: {
        text: "Anuj",
        chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      },
      duration: 1,
    });
    gsap.to(lastName.current, {
      scrambleText: {
        text: "Dandavate",
        chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      },
      duration: 1,
    });
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-16 py-6 bg-primary/40 backdrop-blur-lg">
      <h1
        onMouseEnter={handleMouseEnter}
        className="flex gap-2 text-4xl font-[800] cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
      >
        <span ref={firstName} className="text-accent">
          Anuj
        </span>
        <span ref={lastName} className="text-secondary">
          Dandavate
        </span>
      </h1>
      <Navlink />
      <ResumeButton />
    </div>
  );
};

export default Navbar;
