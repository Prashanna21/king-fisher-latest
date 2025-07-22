// import React from "react";
// import { Home, Wrench, Globe, Award } from "lucide-react";
// import CountUp from "react-countup";

// const stats = [
//   {
//     value: 48000,
//     suffix: "+",
//     label: "Homes Successfully Delivered",
//     icon: <Home className="w-12 h-12" />,
//   },
//   {
//     value: 50100,
//     suffix: "+",
//     label: "Units Under Development",
//     icon: <Wrench className="w-12 h-12" />,
//   },
//   {
//     value: 100,
//     suffix: "+",
//     label: "Global Industry Awards",
//     icon: <Award className="w-12 h-12" />,
//   },
//   {
//     value: 7,
//     label: "Countries with Active Projects",
//     icon: <Globe className="w-12 h-12" />,
//   },
//   {
//     value: 100,
//     suffix: "+",
//     label: "Global Industry Awards",
//     icon: <Award className="w-12 h-12" />,
//   },
//   {
//     value: 7,
//     label: "Countries with Active Projects",
//     icon: <Globe className="w-12 h-12" />,
//   },
// ];

// const Whykingfisher = () => {
//   return (
//     <section
//       className="relative py-20 px-5 lg:px-16 overflow-hidden"
//       id="why-us"
//     >

//       <div className="relative max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block relative">
//             <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#F5BC6D] mb-4 heading-font">
//               WHY KINGFISHER?
//             </h2>
//             {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#F5BC6D]"></div>
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/50 -mb-1"></div> */}
//           </div>
//           <p className="text-lg text-white/80 max-w-3xl mx-auto mt-8">
//             Kingfisher Real Estate is known for delivering landmark projects
//             marked by quality and attention to detail. Blending modern design
//             with top-tier amenities across global markets.
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="group relative h-80 rounded-2xl overflow-hidden hover:border-[#F5BC6D] transition-all duration-500"
//             >
//               {/* Card Background */}
//               <div className="absolute inset-0 bg-gradient-to-bl from-[#1c3b8f] to-[#2a407d] opacity-90"></div>

//               {/* Floating Icon Circle */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#0A1430] border-2 border-[#F5BC6D]/30 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:border-[#F5BC6D]/60">
//                 <div className="text-[#F5BC6D] transition-all duration-500 group-hover:scale-125">
//                   {stat.icon}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="relative h-full flex flex-col justify-between p-8 text-center z-10">
//                 {/* Top: Number */}
//                 <div className="text-5xl font-bold text-white mt-4">
//                   <CountUp
//                     start={0}
//                     end={stat.value}
//                     duration={2.5}
//                     enableScrollSpy
//                     formattingFn={(val) => {
//                       let display = "";
//                       if (val >= 1_000_000) {
//                         display = (val / 1_000_000).toFixed(1);
//                         if (display.endsWith(".0"))
//                           display = display.slice(0, -2);
//                         display += "m";
//                       } else if (val >= 1_000) {
//                         display = (val / 1_000).toFixed(1);
//                         if (display.endsWith(".0"))
//                           display = display.slice(0, -2);
//                         display += "k";
//                       } else {
//                         display =
//                           val % 1 === 0 ? val.toString() : val.toFixed(1);
//                       }
//                       return display + (stat.suffix ?? "");
//                     }}
//                   />
//                 </div>

//                 {/* Bottom: Label */}
//                 <div className="text-white/80 group-hover:text-white transition-colors duration-500 text-lg font-medium">
//                   {stat.label}
//                 </div>
//               </div>

//               {/* Hover Effect */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5BC6D/10,transparent_70%)]"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Whykingfisher;

// import React from "react";
// import { Home, Wrench, Globe, Award } from "lucide-react";

// const features = [
//   {
//     label: "Homes Successfully Delivered",
//     description:
//       "Over 48,000 homes delivered globally, with top-quality standards and customer satisfaction.",
//     icon: <Home className="w-8 h-8 text-green-400" />,
//   },
//   {
//     label: "Units Under Development",
//     description:
//       "More than 50,000 units actively under development across major regions worldwide.",
//     icon: <Wrench className="w-8 h-8 text-green-400" />,
//   },
//   {
//     label: "Global Industry Awards",
//     description:
//       "Recognized with 100+ global awards for excellence in real estate and design innovation.",
//     icon: <Award className="w-8 h-8 text-green-400" />,
//   },
//   {
//     label: "Countries with Active Projects",
//     description:
//       "Projects running in 7+ countries with expansion plans for emerging markets.",
//     icon: <Globe className="w-8 h-8 text-green-400" />,
//   },
//   {
//     label: "Legacy of Trust",
//     description:
//       "Trusted by thousands of families and investors for consistent delivery and integrity.",
//     icon: <Home className="w-8 h-8 text-green-400" />,
//   },
//   {
//     label: "Cutting-Edge Construction",
//     description:
//       "Utilizing modern construction technologies for efficient and sustainable builds.",
//     icon: <Wrench className="w-8 h-8 text-green-400" />,
//   },
// ];

// const Whykingfisher = () => {
//   return (
//     <section className="bg-[#0d1117] py-20 px-6 lg:px-16 text-white" id="why-us">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-green-400 uppercase">
//             Why Kingfisher?
//           </h2>
//           <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
//             Kingfisher Real Estate is known for delivering landmark projects
//             marked by quality and attention to detail. Blending modern design
//             with top-tier amenities across global markets.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-[#161b22] border border-gray-800 p-6 rounded-xl hover:border-green-400 transition-all"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {feature.label}
//               </h3>
//               <p className="text-gray-400 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Whykingfisher;
import React from "react";
import {
  Home,
  Wrench,
  Globe,
  Award,
  ShieldCheck,
  Leaf,
} from "lucide-react";

const features = [
  {
    label: "Homes Successfully Delivered",
    description: "Over 48,000 homes delivered globally with exceptional standards.",
    icon: Home,
  },
  {
    label: "Units Under Development",
    description: "50,000+ units currently under development worldwide.",
    icon: Wrench,
  },
  {
    label: "Global Industry Awards",
    description: "Recognized with 100+ awards for design and quality.",
    icon: Award,
  },
  {
    label: "Countries with Active Projects",
    description: "Active real estate ventures in over 7 countries.",
    icon: Globe,
  },
  {
    label: "Legacy of Trust",
    description: "Trusted by investors and families across generations.",
    icon: ShieldCheck,
  },
  {
    label: "Sustainable Development",
    description: "Forward-thinking, eco-conscious building technologies.",
    icon: Leaf,
  },
];

const Whykingfisher = () => {
  return (
    <section className=" text-white py-20 px-4 md:px-8 lg:px-16" id="why-us">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#F5BC6D]">
            Why Kingfisher?
          </h2>
          <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
            Kingfisher Real Estate is known for delivering landmark projects with quality and modern design across global markets.
          </p>
        </div>

        {/* Table Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-700 rounded-xl overflow-hidden">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`
                  p-6 flex flex-col gap-4 border-gray-700
                  border-b
                  ${((index + 1) % 3 !== 0) ? 'lg:border-r' : ''}
                  ${index < features.length - 3 ? 'lg:border-b' : ''}
                  ${((index + 1) % 2 !== 0) ? 'sm:border-r' : ''}
                  ${index < features.length - 2 ? 'sm:border-b' : ''}
                `}
              >
                <div className="text-[#F5BC6D]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5BC6D]">
                  {feature.label}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Whykingfisher;
