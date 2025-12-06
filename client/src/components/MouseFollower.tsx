import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 800 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-multiply backdrop-blur-sm"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: hovered ? 2.5 : 1,
        opacity: hovered ? 0.3 : 0.6,
        backgroundColor: hovered ? "rgb(20 184 166 / 0.3)" : "rgb(20 184 166 / 0.5)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <motion.div 
        className="w-full h-full rounded-full blur-sm"
        style={{
          backgroundColor: hovered ? "rgb(251 146 60 / 0.15)" : "rgb(251 146 60 / 0.3)",
        }}
      />
    </motion.div>
  );
}