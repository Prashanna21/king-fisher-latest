// TextReveal.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const TextReveal = ({ children, className = "" }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={`relative z-0 h-[200vh] ${className}`}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center px-4 py-20">
        <span className="flex flex-wrap text-2xl font-bold text-black/20 dark:text-white/20 md:text-3xl lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  );
};
