import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useRef } from "react";

const CursorPet = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotation = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);

  const last = useRef({ x: 0, y: 0 });
  const timeout = useRef();

  const x = useSpring(mouseX, {
    stiffness: 250,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 250,
    damping: 25,
  });

  const rotate = useSpring(rotation, {
    stiffness: 200,
    damping: 20,
  });

  const sx = useSpring(scaleX, {
    stiffness: 200,
    damping: 20,
  });

  const sy = useSpring(scaleY, {
    stiffness: 200,
    damping: 20,
  });

  useEffect(() => {
    const move = (e) => {
      const dx = e.clientX - last.current.x;
      const dy = e.clientY - last.current.y;

      const speed = Math.sqrt(dx * dx + dy * dy);

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);

      rotation.set(angle);

      const stretch = Math.min(speed / 120, 0.45);

      scaleX.set(1 + stretch);
      scaleY.set(1 - stretch);

      clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        scaleX.set(1);
        scaleY.set(1);
      }, 40);

      last.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <motion.img
      style={{
        x,
        y,
        rotate,
        scaleX: sx,
        scaleY: sy,
      }}
      className="
        fixed
        w-10
        h-10
        pointer-events-none
        z-[9999]
      "
      src="/angry-bird-stroke-rounded.svg"
    />
  );
};

export default CursorPet;