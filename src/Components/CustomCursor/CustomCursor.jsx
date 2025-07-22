// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const CustomCursor: React.FC = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const enter = () => setHovering(true);
//     const leave = () => setHovering(false);

//     window.addEventListener("mousemove", move);

//     const targets = document.querySelectorAll(".custom-cursor-target");
//     targets.forEach((el) => {
//       el.addEventListener("mouseenter", enter);
//       el.addEventListener("mouseleave", leave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", move);
//       targets.forEach((el) => {
//         el.removeEventListener("mouseenter", enter);
//         el.removeEventListener("mouseleave", leave);
//       });
//     };
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-10 h-10 rounded-full bg-[#F6BC6D] mix-blend-difference pointer-events-none z-[9999]"
//       animate={{
//         x: position.x - 20,
//         y: position.y - 20,
//         scale: hovering ? 1 : 0,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 400,
//         damping: 28,
//       }}
//     />
//   );
// };

// export default CustomCursor;
import { useEffect, useRef, useState } from "react";

export default function ManualScrollExpandImage() {
  const containerRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(40); // in vw

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollProgress = Math.min(
        Math.max(-rect.top / window.innerHeight, 0),
        1
      );

      // expand from 40vw to 100vw
      const newWidth = 40 + scrollProgress * 60;
      setImageWidth(newWidth);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* Pinned Image Expand Section */}
      <section
        ref={containerRef}
        style={{
          height: "300vh", // long scroll range
          position: "relative",
          background: "#000",
        }}
      >
        {/* Pin the image in viewport */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/logo/icon.png"
            alt="Expanding"
            style={{
              width: `${imageWidth}vw`,
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* Page Content */}
      <section className="min-h-screen bg-white text-black p-10">
        <h1 className="text-4xl font-bold mb-4">Page Content</h1>
        <p>This appears after the image has fully expanded.</p>
      </section>
    </div>
  );
}
