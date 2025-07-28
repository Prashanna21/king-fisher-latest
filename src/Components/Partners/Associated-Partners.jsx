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

// Only two logos: SVG and DAMAC
const damacLogo = "https://images.ctfassets.net/zoq5l15g49wj/7DGi2D8VGvN2aV02ir8v27/aa9560b0cb32e7f690c913eebce06fb9/damac-white.svg?fm=webp&w=228&h=60&fit=pad&q=100";

const PartnersMarquee = () => {
  return (
    <div className="relative overflow-hidden w-full mb-10">
      <div className="flex justify-center items-center heading-font text-3xl md:text-6xl">
        <h2>Our Partners</h2>
      </div>
      {/* Scrolling wrapper */}
      <div className="flex flex-row justify-center items-center gap-16 mt-20">
        <div className="flex-shrink-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="125.167" height="45.302" viewBox="0 0 125.167 45.302">
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectangle_9653" data-name="Rectangle 9653" width="125.167" height="45.302" fill="#fff"></rect>
              </clipPath>
            </defs>
            <g id="Group_23963" data-name="Group 23963" transform="translate(0 0)">
              <g id="Group_23962" data-name="Group 23962" transform="translate(0 0)" clipPath="url(#clip-path)">
                <path id="Path_81246" data-name="Path 81246" d="M69.966,11.983c2.255-.826,3.811-2.423,3.811-4.956,0-3.914-3.579-5.6-8.122-5.6H60.484V25.814h6.763c5.116,0,9.554-2.071,9.554-6.774,0-3.717-2.773-6.267-6.835-7.057M66.925,24.45H64.063V2.8H65.94c3.364,0,4.49,1.635,4.49,4.094,0,.409.274,4.432-3.032,5.164a8.722,8.722,0,0,1,3.684,1.9,5.925,5.925,0,0,1,1.943,4.735c0,3.411-1.878,5.763-6.1,5.763" transform="translate(-7.459 -0.177)" fill="#fff"></path>
                <path id="Path_81247" data-name="Path 81247" d="M1.7,24.823a12.774,12.774,0,0,0,5.6,1.235C10.449,26.058,16,24.927,16,19.4c0-3.875-2.8-6.053-7.412-9.181C6.457,8.7,3.55,7.168,3.55,4.674c0-2.074,1.917-3.316,4.572-3.316a10.036,10.036,0,0,1,5.25,1.6L12.056.664A10.111,10.111,0,0,0,8.159,0C4.637,0,.522,1.489.522,5.686c0,3.319,2.614,5.194,6.945,8.3,2.011,1.431,5.172,3.7,5.172,6.48,0,2.613-2.039,4.235-5.322,4.235A11.509,11.509,0,0,1,0,21.815Z" transform="translate(0 0)" fill="#fff"></path>
                <path id="Path_81248" data-name="Path 81248" d="M36.506,26.176c-6.523,0-11.587-5.2-11.587-12.612C24.919,6.337,29.983.952,36.506.952S48.078,6.337,48.078,13.564c0,7.407-5.048,12.612-11.572,12.612M44.5,13.564c0-6.6-3.2-11.252-7.994-11.252s-7.994,4.651-7.994,11.252c0,6.637,3.2,11.252,7.994,11.252S44.5,20.2,44.5,13.564" transform="translate(-3.073 -0.118)" fill="#fff"></path>
                <path id="Path_81249" data-name="Path 81249" d="M133.207,18.581h-9.412l-2.934,7.157h-1.4L129.682.813,139.9,25.738h-3.758Zm-8.857-1.36h8.3L128.5,7.075Z" transform="translate(-14.733 -0.101)" fill="#fff"></path>
                <path id="Path_81250" data-name="Path 81250" d="M105.19,1.438V11.453H92.112V1.438H88.533V25.816h3.579v-13H105.19v13h3.579V1.438Z" transform="translate(-10.918 -0.178)" fill="#fff"></path>
                <path id="Path_81251" data-name="Path 81251" d="M44.018,50.633H42.571V43.222h3.55c1.681,0,2.527.813,2.527,2.1v.4a2.006,2.006,0,0,1-1.613,1.992l1.9,2.915h-1.6l-1.792-2.793H44.018Zm0-3.906H45.8c.945,0,1.4-.4,1.4-1.034v-.3c0-.668-.39-1.024-1.347-1.024H44.018Z" transform="translate(-5.25 -5.331)" fill="#fff"></path>
                <path id="Path_81252" data-name="Path 81252" d="M59.214,43.222v1.2H55.041V46.3h3.25v1.134h-3.25V49.43h4.173v1.2H53.628V43.222Z" transform="translate(-6.613 -5.33)" fill="#fff"></path>
                <path id="Path_81253" data-name="Path 81253" d="M67.858,49.077H64.575L64,50.625H62.538l2.905-7.467h1.6l2.9,7.467H68.435Zm-2.871-1.09h2.458l-1.223-3.249H66.2Z" transform="translate(-7.712 -5.323)" fill="#fff"></path>
                <path id="Path_81254" data-name="Path 81254" d="M75.971,43.222v6.154h3.706v1.257H74.525V43.222Z" transform="translate(-9.191 -5.33)" fill="#fff"></path>
                <path id="Path_81255" data-name="Path_81255" d="M88.593,43.222v1.246H86.079v6.166H84.631V44.467h-2.5V43.222Z" transform="translate(-10.128 -5.33)" fill="#fff"></path>
                <path id="Path_81256" data-name="Path_81256" d="M93.742,43.222,95.7,46.56l1.936-3.338h1.569L96.379,47.8v2.838H94.933V47.8l-2.815-4.574Z" transform="translate(-11.36 -5.33)" fill="#fff"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            src={damacLogo}
            alt="DAMAC Logo"
            className="h-24 w-auto object-contain  hover:opacity-100 hover:grayscale-0 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;