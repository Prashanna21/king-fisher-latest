// components/Section.jsx
import React, { useRef, useEffect, useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Section = ({ bg = "light", children }) => {
  const ref = useRef();
  // const { setMenuColor } = useContext(MenuContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // setMenuColor(bg); // 'light' or 'dark'
        }
      },
      {
        threshold: 0.5, // adjust as needed
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [bg, setMenuColor]);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center ${
        bg === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
