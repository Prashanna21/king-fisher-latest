// import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import LawyerImage from "/man.png"; // replace with actual path
// import { MdOutlineArrowOutward, MdOutlineCoronavirus } from "react-icons/md";
// import { TbTrekking } from "react-icons/tb";

// const LawFirmCard = () => {
//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="min-h-screen bg-gradient-to-br from-[#0d0c2c] to-[#0d0734] flex items-center justify-center px-4">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
//         {/* Left: Text Content */}
//         <div className="space-y-6">
//           <div className="flex items-center space-x-2">
//             <div className="bg-indigo-600 p-2 rounded-lg border-2 border-white">
//              <TbTrekking  size={24}/>

//             </div>
//             <h2 className="text-xl font-semibold">Seus Direitos</h2>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Seus Direitos <br /> Começam Aqui
//           </h1>

//           <p className="text-gray-300 max-w-md">
//             Orientação jurídica de confiança para resolver seus problemas.
//           </p>

//           <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-[2px] rounded-full w-fit">
//             <button className="flex items-center gap-2 bg-[#0d0c2c]  rounded-full text-white font-medium">
//               <span className="h-full flex items-center justify-start border rounded-full p-6 bg-[#423FA8]">
//                 <MdOutlineArrowOutward size={28} className="text-white rotate-90" />
//               </span>
//               Agende uma consulta e saiba como proteger seus direitos.
//             </button>
//           </div>

//           <div className="border border-white/20 rounded-full px-6 py-4 flex gap-4 items-center justify-between text-sm bg-white/5 backdrop-blur-sm">
//             <div className="flex items-center gap-2">
//               <MdOutlineCoronavirus size={24}/>

//               <span>Abstrato Advogados</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaInstagram />
//               <span>@abstratoadvogados</span>
//             </div>
//             <span>(99)-99999-9999</span>
//           </div>
//         </div>

//         {/* Right: Lawyer Image */}
//         <div className="flex justify-center md:justify-end">
//           <img
//             src={LawyerImage}
//             alt="Lawyer"
//             className="max-h-full object-cover rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LawFirmCard;
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineArrowOutward, MdOutlineCoronavirus } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";

const LawFirmCard = () => {
  return (
    <div
      className="relative h-[600px] w-full max-w-5xl mx-auto mt-20 rounded-3xl overflow-hidden border border-white/20 bg-no-repeat bg-center bg-contain flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/man.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-3xl space-y-6">
        {/* Icon & Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 p-2 rounded-lg border-2 border-white">
            <TbTrekking size={24} />
          </div>
          <h2 className="text-xl font-semibold tracking-wide">Seus Direitos</h2>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
          Seus Direitos <br /> Começam Aqui
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg max-w-md leading-relaxed">
          Orientação jurídica de confiança para resolver seus problemas.
        </p>

        {/* CTA Button */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-[2px] rounded-full w-fit">
          <button className="flex items-center gap-3 bg-[#0d0c2c] px-4 py-3 rounded-full text-white text-sm md:text-base font-medium">
            <span className="flex items-center justify-center border rounded-full p-3 bg-[#423FA8]">
              <MdOutlineArrowOutward size={24} className="rotate-90" />
            </span>
            <span>
              Agende uma consulta e saiba <br className="hidden md:block" />{" "}
              como proteger seus direitos.
            </span>
          </button>
        </div>

        {/* Footer Info */}
        <div className="border border-white/20 rounded-full px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-sm bg-white/10 backdrop-blur-md shadow-md">
          <div className="flex items-center gap-2">
            <MdOutlineCoronavirus size={20} />
            <span>Abstrato Advogados</span>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram />
            <span>@abstratoadvogados</span>
          </div>
          <span>(99)-99999-9999</span>
        </div>
      </div>
    </div>
  );
};

export default LawFirmCard;
