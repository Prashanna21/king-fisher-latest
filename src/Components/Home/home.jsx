import { Building2, Coins, TrendingUp } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-[#0E1C41] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('gallery/Chelsea_Residences.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1430] via-[#0A1430]/40 to-[#0A1430] transition-all duration-1000" />
      </div>
      {/* Bottom Blend Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#0E1C41] to-transparent z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center mt-20">
        {/* Heading */}
        <motion.div
          className="w-full max-w-screen-xl"
          initial="initial"
          animate="animate"
          variants={fadeUp}
        >
          <h1 className="text-4xl  md:text-7xl font-normal text-[#F5BC6D] leading-tight mx-auto md:mx-0">
            Best Property Selling <br />
            <span className="font-bold text-white">Company in Dubai</span>{" "}
          </h1>
        </motion.div>
        <motion.div
          className="w-full  mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="flex flex-wrap gap-4 w-full justify-center">
            {[
              {
                text: "Become a owner of real estate",
                icon: <Building2 className="w-10 h-10 text-[#F6BC6D]" />,
              },
              {
                text: "Receive up to 40% of annual profit",
                icon: <Coins className="w-10 h-10 text-[#F6BC6D]" />,
              },
              {
                text: "Get 7x profit on token's growth",
                icon: <TrendingUp className="w-10 h-10 text-[#F6BC6D]" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center md:justify-center border border-white/10 gap-4 w-full md:w-[280px] bg-white/5 p-8 rounded-xl shadow-sm "
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.2, duration: 0.6 }}
              >
                <div className="shrink-0">{item.icon}</div>
                <p className="text-sm leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Improved Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="block relative">
            {/* Mouse outline */}
            <div className="w-6 h-10 border-2 border-[#F6BC6D] rounded-full flex items-start justify-center pt-2">
              {/* Scroll wheel */}
              <motion.div
                className="w-1 h-2 bg-[#F6BC6D] rounded-full"
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            {/* Animated arrow */}
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F6BC6D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
          <motion.p
            className="mt-10 text-sm text-[#F6BC6D]"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Scroll down
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
