import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// Framer Motion Animations
const fadeFromTop = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeFromBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const AboutPage = () => {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const contentRef = useRef(null);
  const scrollTween = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth ScrollTrigger Pin
  useLayoutEffect(() => {
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const container = textContainerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const scrollDistance = content.scrollHeight - container.offsetHeight;
      if (scrollDistance <= 0) return;

      scrollTween.current = gsap.to(content, {
        y: -scrollDistance,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => {
      scrollTween.current?.kill();
      ctx.revert();
    };
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="relative text-white px-2 md:px-8 overflow-hidden min-h-screen "
    >
     

      {/* texture layer */}

      <div
        className="absolute inset-0 bg-repeat bg-[length:auto] z-0"
        style={{ backgroundImage: "url('/bg-texture.png')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0E1C41] to-transparent z-20" />

      <div className="relative z-10 flex flex-col md:flex-row gap-10 py-10 md:py-0 w-full min-h-screen px-5 mt-8">
        {/* Image Panel */}
        <motion.div
          className="hidden lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:flex items-center justify-center"
          variants={fadeFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="relative w-full md:h-[80vh] mt-14 md:mt-0"
          >
            <img
              src="/gallery/Chelsea_Residences.jpg"
              alt="About"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              loading="eager"
            />
            <div className="absolute top-5 left-5 flex items-center gap-4 bg-black/40 backdrop-blur-md rounded-xl p-3 shadow-lg">
              <span className="p-2 bg-[#ffc87a] rounded-full">
                <Users className="text-blue-800 w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-200">
                  Total Clients
                </p>
                <h4 className="text-lg font-bold text-zinc-400">
                  <CountUp end={7000} duration={3} className="text-blue-800" />+
                </h4>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Panel */}
        <div
          ref={textContainerRef}
          className={`lg:w-1/2 ${isDesktop ? "lg:h-screen" : ""}`}
        >
          <motion.div
            ref={contentRef}
            className=" md:px-6 py-10 md:py-20 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeFromBottom}
          >
            <motion.h2
              className="font-light text-4xl sm:text-6xl text-center text-[#F6BC6D] mb-10"
              variants={fadeFromBottom}
              custom={0}
            >
              About Us
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg md:text-xl  px-2 md:px-10 mb-8 font-medium text-center"
              variants={fadeFromBottom}
              custom={1}
            >
              Welcome to Kingfisher Real Estate, your trusted partner in finding
              the perfect property. Established with a vision to redefine the
              real estate experience, Kingfisher is committed to delivering
              exceptional service, integrity, and results. We specialize in
              residential, commercial, and investment properties, catering to a
              diverse clientele with unique needs and aspirations. <br />
              <br /> Our team of seasoned professionals brings unparalleled
              expertise and a deep understanding of the local market. Whether
              you're a first-time homebuyer, a seller looking to maximize value,
              or an investor seeking lucrative opportunities, we provide
              personalized guidance every step of the way. <br />
              <br /> Choose Kingfisher Real Estate for a partnership that soars
              above the rest. Let us help you navigate the market with
              confidence and find the property that perfectly aligns with your
              vision. Contact us today to start your real estate journey with a
              team that truly cares.
            </motion.p>

            <Link to="/about" className="flex gap-3 items-center">
              <div className="flex items-center rounded-full cursor-pointer relative overflow-hidden">
                <span
                  className={`font-medium z-10 pl-4 pr-2 py-2 transition-colors duration-300 hover:text-[#F6BC6D]`}
                >
                  Read More
                </span>
                <div className="relative z-20 rounded-full h-10 w-10 flex items-center justify-center bg-[#F6BC6D]">
                  <ArrowRight
                    className={`transition-transform rotate-320 duration-300 ${"text-[#232266]"}`}
                    size={20}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
