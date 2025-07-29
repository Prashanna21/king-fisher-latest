import React, { useState } from "react";
import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Added missing Link import

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative text-white px-2 md:px-8 overflow-hidden min-h-screen">
      {/* texture layer */}
      <div
        className="absolute inset-0 bg-repeat bg-[length:auto] z-0"
        style={{ backgroundImage: "url('/bg-texture.png')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0E1C41] to-transparent z-20" />

      <div className="relative z-10 flex flex-col md:flex-row gap-10 py-10 md:py-0 w-full min-h-screen px-5 mt-8">
        {/* Sticky Image Panel */}
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
                  7000+
                </h4>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scrollable Text Panel */}
        <div className="lg:w-1/2">
          <motion.div
            className="md:px-6 py-10 md:py-20 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeFromBottom}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-extrabold text-center leading-snug mb-10 text-[#F6BC6D] heading-font"
              variants={fadeFromBottom}
              custom={0}
            >
              About Us
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg md:text-xl px-2 md:px-10 mb-8 font-medium text-center"
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

            <Link 
              to="/about" 
              className="flex gap-3 items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center rounded-full cursor-pointer relative overflow-hidden">
                <span
                  className={`font-medium z-10 pl-4 pr-2 py-2 transition-colors duration-300 ${
                    isHovered ? "text-[#1b1b3a]" : "text-[#F6BC6D]"
                  }`}
                >
                  Read More
                </span>
                <div className="relative z-20 rounded-full h-10 w-10 flex items-center justify-center bg-[#F6BC6D]">
                  <ArrowRight
                    className={`transition-transform rotate-320 duration-300 ${
                      isHovered
                        ? "translate-x-1 text-[#1b1b3a]"
                        : "text-[#232266]"
                    }`}
                    size={20}
                  />
                </div>
                <div
                  className={`absolute top-0 bottom-0 right-0 bg-[#F6BC6D] rounded-full transition-all duration-300 ease-in-out ${
                    isHovered ? "w-full" : "w-10"
                  }`}
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;