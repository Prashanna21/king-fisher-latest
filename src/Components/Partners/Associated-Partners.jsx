// import React from "react";

// const logos = [

// ];

// const PartnerLogos = () => {
//   return (
//     <section id="partners" className="h-auto flex flex-col items-center justify-center px-4 py-20">
//       <h2 className="text-center text-3xl md:text-5xl tracking-wide mb-6 uppercase heading-font">
//         Associated Partners
//       </h2>
//       <p className="text-lg text-center text-gray-500 max-w-6xl mx-auto mb-14 raleway-regular">
//        Associated Partners is known for delivering high-end residential developments, vibrant communities, and exclusive resort-inspired properties. From modern apartments in key urban centers to peaceful, upscale retreats, each project is thoughtfully designed with premium amenities to provide an exceptional standard of living.
//       </p>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  w-full max-w-6xl">
//         {logos.map((src, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center py-10 p-4 border border-zinc-200 transition"
//           >
//             <img
//               src={src}
//               alt={`Partner ${index + 1}`}
//               className="max-h-24 object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PartnerLogos;

// import React from "react";

// const logos = [
//   "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740",
//   "https://logomaster.ai/hs-fs/hubfs/lettermark-logo-cnn.jpg?width=1700&height=1148&name=lettermark-logo-cnn.jpg",
//   "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
//   "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
//   "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
//   "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
//   "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
//   "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
//   "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
//   "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
//   "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
//   "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
// ];

// const PartnerLogos = () => {
//   return (
//     <section
//       id="partners"
//       className="h-auto flex flex-col items-center justify-center px-4 py-20 "
//     >
//       <h2 className="text-center text-3xl md:text-5xl tracking-wide mb-6 uppercase heading-font">
//         Associated Partners
//       </h2>
//       <p className="text-lg text-center text-gray-500 max-w-6xl mx-auto mb-14 raleway-regular">
//         Associated Partners is known for delivering high-end residential
//         developments, vibrant communities, and exclusive resort-inspired
//         properties. From modern apartments in key urban centers to peaceful,
//         upscale retreats, each project is thoughtfully designed with premium
//         amenities to provide an exceptional standard of living.
//       </p>

//       <div className="flex flex-wrap justify-center items-center gap-8 sm:mx-2 lg:mx-15 ">
//         {logos.map((src, index) => (
//           <div
//             key={index}
//             className="relative w-[190px] h-[160px] rounded-[10px] border-2 border-[#F5BC6D] p-6 overflow-visible transition-all duration-500 ease-out group hover:border-white hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)] mx-auto flex items-center justify-center"
//           >
//             {/* Card-like gradient hover overlays */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 transition-transform duration-500 ease-out group-hover:-translate-x-full z-10 pointer-events-none rounded-[10px]" />
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 transition-transform duration-500 ease-out group-hover:translate-x-full z-10 pointer-events-none rounded-[10px]" />

//             <img
//               src={src}
//               alt={`Partner ${index + 1}`}
//               className="relative z-20 max-h-20 max-w-[120px] object-contain  bg-blend-color-burn"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PartnerLogos;
import React from "react";

const partners = [
  "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740",
  "https://logomaster.ai/hs-fs/hubfs/lettermark-logo-cnn.jpg?width=1700&height=1148&name=lettermark-logo-cnn.jpg",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
  "https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-m-a-letter-mark-mandel-round-automobile-car-truck-transport-logo-png-image_6133010.png",
  "https://i.pinimg.com/736x/7e/3b/1d/7e3b1dbb81d7a522546a8b9c0b74e1b1.jpg",
];

const PartnersMarquee = () => {
  return (
    <div className="relative overflow-hidden w-full mb-10">
      <div className="flex justify-center items-center heading-font text-3xl md:text-6xl">
        <h2>Our Partners</h2>
      </div>
      {/* Scrolling wrapper */}
      <div className="flex gap-12 animate-marquee-track will-change-transform mt-20">
        {[...partners, ...partners].map((logo, i) => (
          <div key={i} className="flex-shrink-0">
            <img
              src={logo}
              alt="Partner Logo"
              className="h-24 w-auto object-contain  hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersMarquee;
