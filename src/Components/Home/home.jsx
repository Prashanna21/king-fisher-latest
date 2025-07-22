// import { ArrowRight, CircleArrowRight } from "lucide-react";
// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="relative h-screen w-full bg-[#0E1C41] text-white overflow-hidden">
//       {/* Background Image + Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="/apartments/apartment2.jpg"
//           alt="Background"
//           className="w-full h-full object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-[#0E1C41] bg-opacity-90" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex w-full flex-col items-center justify-center h-full px-4">
//         {/* Title */}
//         <div className="w-full max-w-screen-xl">
//           <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl">
//             We integrate <br />
//             <span className="font-semibold text-white">Real economy</span> into
//             the <span className="font-semibold text-blue-300">Digital one</span>
//           </h1>
//         </div>

//         {/* Feature List */}
//         <div className="w-full max-w-screen-xl ml-[10%]">
//           <div className="mt-12 flex flex-row  items-start w-2xl">
//             {[
//               "Become a co-owner of real estate on blockchain",
//               "Receive up to 40% of annual profit",
//               "Get 7x profit on token’s growth",
//             ].map((text, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 bg-opacity-10 backdrop-blur-sm p-4 "
//               >
//                 <img
//                   src="./old-building.png"
//                   alt="Icon"
//                   className="w-12 h-12 shrink-0"
//                 />
//                 <p className="text-sm leading-relaxed">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA + Countdown */}
//         <div className="mt-12 w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-6 px-4">
//           {/* CTA Buttons */}
//           <div className="flex gap-4">
//             <button className="bg-transparent outline-3 outline-cyan-300 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-between gap-5 ">
//               Buy Tokens <CircleArrowRight />
//             </button>
//             <button className="bg-transparent outline-3 outline-cyan-300 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-between gap-5 ">
//               White paper{" "}
//               <span className="text-cyan-300 rotate-90">
//                 <CircleArrowRight />
//               </span>
//             </button>
//           </div>

//           {/* Countdown */}
//           <div className="flex  flex-col mt-4 md:mt-0">
//             <div className="text-sm text-white/60">
//               <small>Count down</small>
//               <p>Until the launch</p>
//             </div>
//             <div className="flex gap-4 flex-row">
//               {[
//                 { label: "Days", value: "20" },
//                 { label: "Hours", value: "09" },
//                 { label: "Min", value: "30" },
//                 { label: "Sec", value: "45" },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col border px-5 py-3 outline-2 outline-cyan-200  rounded-full tracking-tighter linespace-tighter"
//                 >
//                   <div className="text-2xl p-0 font-bold">{item.value}</div>
//                   <div className="text-xs text-white/60">{item.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div>mouse</div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import {
//   CircleArrowRight,
//   Mouse,
//   Building2,
//   Coins,
//   TrendingUp,
// } from "lucide-react";
// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="relative h-screen w-full bg-[#0E1C41] text-white overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/apartments/apartment2.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0A1430] via-[#0A1430]/80 to-[#0A1430] transition-all duration-1000" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center md:text-left">
//         {/* Heading */}
//         <div className="w-full max-w-screen-xl">
//           <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mx-auto md:mx-0">
//             We integrate <br />
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">
//               Real economy
//             </span>{" "}
//             into the{" "}
//             <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
//               Digital one
//             </span>
//           </h1>
//         </div>

//         {/* Feature List */}
//         <div className="w-full max-w-screen-xl mt-10">
//           <div className="flex flex-wrap gap-8 justify-start">
//             {[
//               {
//                 text: "Become a co-owner of real estate on blockchain",
//                 icon: <Building2 className="w-10 h-10 text-cyan-300" />,
//               },
//               {
//                 text: "Receive up to 40% of annual profit",
//                 icon: <Coins className="w-10 h-10 text-cyan-300" />,
//               },
//               {
//                 text: "Get 7x profit on token’s growth",
//                 icon: <TrendingUp className="w-10 h-10 text-cyan-300" />,
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 w-[260px] bg-white/5 p-4 rounded-xl shadow-sm backdrop-blur-md"
//               >
//                 <div className="shrink-0">{item.icon}</div>
//                 <p className="text-sm leading-snug">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA + Countdown */}
//         <div className="mt-14 w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-10 px-4">
//           {/* CTA Buttons */}
//           <div className="flex gap-4">
//             <button className="bg-[#1b58ff] hover:bg-blue-300 text-white hover:text-black font-semibold px-6 py-3 rounded-full flex items-center gap-3 transition-all shadow-lg">
//               Buy Tokens <CircleArrowRight size={18} />
//             </button>
//             <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-3 backdrop-blur-md transition-all border ">
//               White Paper{" "}
//               <span className="text-white rotate-90">
//                 <CircleArrowRight size={18} />
//               </span>
//             </button>
//           </div>

//           {/* Countdown */}
//           {/* <div className="flex flex-col text-center md:text-left">
//             <div className="text-sm text-white/60">
//               <small className="uppercase tracking-wide">Countdown</small>
//               <p className="text-base">Until the launch</p>
//             </div>
//             <div className="flex gap-4 mt-3">
//               {[
//                 { label: "Days", value: "20" },
//                 { label: "Hours", value: "09" },
//                 { label: "Min", value: "30" },
//                 { label: "Sec", value: "45" },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col items-center px-5 py-3 bg-white/10 border border-[#f6bc6d] rounded-xl backdrop-blur-md shadow-md"
//                 >
//                   <div className="text-2xl font-bold">{item.value}</div>
//                   <div className="text-xs text-white/70">{item.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div> */}
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce flex items-center justify-center w-8 h-10 border-2 border-white rounded-full bg-white/10 backdrop-blur-md shadow-xl">
//           <Mouse className="text-white" size={16} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import {
  CircleArrowRight,
  Mouse,
  Building2,
  Coins,
  TrendingUp,
  Home,
  Wrench,
  Award,
  Globe,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

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
        style={{ backgroundImage: "url('/apartments/apartment2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1430] via-[#0A1430]/80 to-[#0A1430] transition-all duration-1000" />
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
          <h1 className="text-4xl md:text-6xl font-light leading-tight mx-auto md:mx-0">
            We integrate Real economy <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#F6BC6D]">
              into the{" "}
            </span>{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F6BC6D] to-[#F6BC6D]/40">
              Digital one
            </span>
          </h1>
        </motion.div>
        <motion.div
          className="w-full  mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="flex flex-wrap gap-8 justify-center">
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
                className="flex items-start gap-4 w-[280px] bg-white/5 p-8 rounded-xl shadow-sm backdrop-blur-md"
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
          <div className="hidden md:block relative">
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
