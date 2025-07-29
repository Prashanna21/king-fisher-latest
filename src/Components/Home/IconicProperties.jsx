// import React, { useState, useEffect } from "react";
// import { MapPin, ArrowRight, Building } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";

// import api from "../../services/api";
// import { showErrorToast } from "../../config/toastConfig";

// const fallbackProperties = [
//   {
//     _id: "1",
//     name: "Kingfisher Riverside Views",
//     location: "Dubai Investment Park 2, UAE",
//     price: "$354,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     _id: "2",
//     name: "Kingfisher Islands",
//     location: "Dubailand, Dubai, UAE",
//     price: "$678,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop",
//   },
//   {
//     _id: "3",
//     name: "Violet",
//     location: "Kingfisher Hills 2, Dubai, UAE",
//     price: "$534,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop",
//   },
//   {
//     _id: "4",
//     name: "Kingfisher Lagoons - Mykonos",
//     location: "Dubailand, Dubai, UAE",
//     price: "$790,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop",
//   },
// ];

// const sectionText = {
//   title: "Explore Our Iconic Properties",
//   description:
//     "Premium towers, exclusive retreats, and modern communities. Each project merges luxury and lifestyle, shaping urban elegance in every detail.",
// };

// export default function IconicProperties() {
//   const navigate = useNavigate();
// const [properties, setProperties] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchProperties = async () => {
//     try {
//       const res = await api.get("/properties/active");
//       if (res.data.success) {
//         setProperties(res.data.data.slice(0, 4));
//       } else {
//         setProperties(fallbackProperties);
//       }
//     } catch (err) {
//       showErrorToast("Failed to load properties: " + err);
//       setProperties(fallbackProperties);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchProperties();
// }, []);

//   return (
//     <section className="py-20 ">
//       <motion.div
//         className="text-center px-4 mb-16"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-4xl md:text-6xl font-semibold tracking-widest uppercase text-[#F6BC6D] mb-4 heading-font">
//           {sectionText.title}
//         </h2>
//         <p className="text-gray-500 max-w-4xl mx-auto text-base sm:text-lg">
//           {sectionText.description}
//         </p>
//       </motion.div>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="h-12 w-12 border-4 border-[#F6BC6D] border-t-transparent rounded-full animate-spin" />
//         </div>
//       ) : (
//         <div className="relative max-w-7xl mx-auto px-4 md:px-10">
//           {/* Custom Prev Button */}
//           <button
//             className="absolute z-10 top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
//             onClick={() => document.querySelector(".swiper").swiper.slidePrev()}
//           >
//             <ArrowRight className="rotate-180" size={18} />
//           </button>

//           {/* Custom Next Button */}
//           <button
//             className="absolute z-10 top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
//             onClick={() => document.querySelector(".swiper").swiper.slideNext()}
//           >
//             <ArrowRight size={18} />
//           </button>

//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={24}
//             slidesPerView={1}
//             loop
//             autoplay={{ delay: 3000 }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             grabCursor
//           >
//             {properties.map((p, index) => (
//               <SwiperSlide key={p._id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   className="backdrop-blur-md border border-[#F6BC6D] rounded-xl  transition-all duration-300 overflow-hidden"
//                 >
//                   <img
//                     src={p.mainImage}
//                     alt={p.name}
//                     className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
//                   />
//                   <div className="p-6 flex flex-col gap-4 justify-between">
//                     <div>
//                       <h3 className="text-lg font-semibold text-white line-clamp-2">
//                         {p.name}
//                       </h3>
//                       <div className="flex flex-row justify-between">
//                         <p className="text-sm text-gray-500 mt-1 flex items-center">
//                           <MapPin size={16} className="mr-1 text-amber-600" />
//                           {p.location}
//                         </p>
//                         <p className="text-sm text-gray-400 mt-1 flex items-center">
//                           <Building size={16} className="mr-1 text-amber-600" />
//                           {p.type || "Apartment"}
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-gray-300 text-sm">
//                         Starting at{" "}
//                         <span className="text-green-600 font-bold">
//                           {p.price}
//                         </span>
//                       </p>
//                       <button
//                         onClick={() => navigate(`/properties/${p._id}`)}
//                         className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-amber-300 to-[#F6BC6D] text-sm font-medium text-white hover:scale-[1.02] transition-all duration-300"
//                       >
//                         View Details <ArrowRight size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       )}

//       <div className="mt-14 flex justify-center">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/properties")}
//           className="px-8 py-3 rounded-full  text-[#F6BC6D] border border-[#F6BC6D] font-semibold tracking-wide text-sm hover:bg-[#F6BC6D] hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
//         >
//           View All Properties
//         </motion.button>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { MapPin, ArrowRight, Building } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";

// import api from "../../services/api";
// import { showErrorToast } from "../../config/toastConfig";

// const fallbackProperties = [
//   {
//     _id: "1",
//     name: "Kingfisher Riverside Views",
//     location: "Dubai Investment Park 2, UAE",
//     price: "$354,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1597171149529-7a8f69abe77b?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     _id: "2",
//     name: "Kingfisher Islands",
//     location: "Dubailand, Dubai, UAE",
//     price: "$678,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1592237892334-46facfb3f325?q=80&w=1935&auto=format&fit=crop",
//   },
//   {
//     _id: "3",
//     name: "Violet",
//     location: "Kingfisher Hills 2, Dubai, UAE",
//     price: "$534,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1626244105791-562784044969?q=80&w=1974&auto=format&fit=crop",
//   },
//   {
//     _id: "4",
//     name: "Kingfisher Lagoons - Mykonos",
//     location: "Dubailand, Dubai, UAE",
//     price: "$790,000",
//     mainImage:
//       "https://images.unsplash.com/photo-1584306221131-373b2e117535?q=80&w=1974&auto=format&fit=crop",
//   },
// ];

// const sectionText = {
//   title: "Explore Our Iconic Properties",
//   description:
//     "Premium towers, exclusive retreats, and modern communities. Each project merges luxury and lifestyle, shaping urban elegance in every detail.",
// };

// export default function IconicProperties() {
//   const navigate = useNavigate();
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await api.get("/properties/active");
//         if (res.data.success) {
//           setProperties(res.data.data.slice(0, 4));
//         } else {
//           setProperties(fallbackProperties);
//         }
//       } catch (err) {
//         showErrorToast("Failed to load properties: " + err);
//         setProperties(fallbackProperties);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProperties();
//   }, []);

//   return (
//     <section className="py-20 ">
//       <motion.div
//         className="text-center px-4 mb-16"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-4xl md:text-6xl font-semibold tracking-widest uppercase text-[#F6BC6D] mb-4 heading-font">
//           {sectionText.title}
//         </h2>
//         <p className="text-gray-500 max-w-4xl mx-auto text-base sm:text-lg">
//           {sectionText.description}
//         </p>
//       </motion.div>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="h-12 w-12 border-4 border-[#F6BC6D] border-t-transparent rounded-full animate-spin" />
//         </div>
//       ) : (
//         <div className="relative max-w-7xl mx-auto px-4 md:px-10">
//           {/* Custom Prev Button */}
//           <button
//             className="absolute z-10 top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
//             onClick={() => document.querySelector(".swiper").swiper.slidePrev()}
//           >
//             <ArrowRight className="rotate-180" size={18} />
//           </button>

//           {/* Custom Next Button */}
//           <button
//             className="absolute z-10 top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white border border-[#F6BC6D] text-[#F6BC6D] p-3 rounded-full shadow-md hover:bg-[#F6BC6D] hover:text-white transition-all"
//             onClick={() => document.querySelector(".swiper").swiper.slideNext()}
//           >
//             <ArrowRight size={18} />
//           </button>

//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={24}
//             slidesPerView={1}
//             loop
//             autoplay={{ delay: 3000 }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             grabCursor
//           >
//             {properties.map((p, index) => (
//               <SwiperSlide key={p._id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   className="[perspective:500px]"
//                 >
//                   <div
//                     className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl transition-all duration-300 overflow-hidden
//                       relative transform-style-preserve-3d will-change-transform
//                       hover:[transform:translateZ(10px)_rotateX(20deg)_rotateY(20deg)]"
//                   >
//                     <img
//                       src={p.mainImage}
//                       alt={p.name}
//                       className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                     <div className="p-6 flex flex-col gap-4 justify-between">
//                       <div>
//                         <h3
//                           className="text-lg font-semibold text-gray-800 line-clamp-2 transition-transform duration-500
//                             hover:[transform:translateZ(50px)]"
//                         >
//                           {p.name}
//                         </h3>
//                         <div className="flex flex-row justify-between">
//                           <p className="text-sm text-gray-500 mt-1 flex items-center">
//                             <MapPin size={16} className="mr-1 text-amber-600" />
//                             {p.location}
//                           </p>
//                           <p className="text-sm text-gray-400 mt-1 flex items-center">
//                             <Building
//                               size={16}
//                               className="mr-1 text-amber-600"
//                             />
//                             {p.type || "Apartment"}
//                           </p>
//                         </div>
//                       </div>
//                       <div>
//                         <p className="text-gray-800 text-sm">
//                           Starting at{" "}
//                           <span className="text-green-600 font-bold">
//                             {p.price}
//                           </span>
//                         </p>
//                         <button
//                           onClick={() => navigate(`/properties/${p._id}`)}
//                           className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-amber-300 to-[#F6BC6D] text-sm font-medium text-white hover:scale-[1.02] transition-all duration-300"
//                         >
//                           View Details <ArrowRight size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       )}

//       <div className="mt-14 flex justify-center">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/properties")}
//           className="px-8 py-3 rounded-full bg-white text-[#F6BC6D] border border-[#F6BC6D] font-semibold tracking-wide text-sm hover:bg-[#F6BC6D] hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
//         >
//           View All Properties
//         </motion.button>
//       </div>
//     </section>
//   );
// }

// import {
//   AlignLeft,
//   Bath,
//   BedDouble,
//   Building,
//   ChevronLeft,
//   ChevronRight,
//   CircleDollarSign,
//   MapPin,
//   MoveLeft,
// } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import api from "../../services/api";
// import { Link } from "react-router-dom";

// const IconicProperties = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await api.get("/properties/active");
//         if (res.data.success) {
//           setProperties(res.data.data.slice(0, 3));
//         }
//       } catch (err) {
//         console.error("Error fetching properties:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     console.log("Properties:", properties);
//     fetchProperties();
//   }, [properties]);

//   return (
//     <section className="py-20 px-6 max-w-screen-xl mx-auto">
//       <h2 className="text-4xl md:text-7xl font-bold text-center mb-20 heading-font">
//         Iconic Properties
//       </h2>

//       {loading ? (
//         <div className="text-center py-20">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading properties...</p>
//         </div>
//       ) : properties?.length === 0 ? (
//         <div className="text-center py-20">
//           <p className="text-gray-600">No properties found.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {properties.map((p, index) => (
//             <div
//               key={p._id || index}
//               className="group rounded-xl overflow-hidden  transition hover:shadow-lg "
//               style={{ height: "500px" }}
//             >
//               {/* Property Image */}
//               <div className="relative">
//                 <img
//                   src={p.mainImage || ""}
//                   alt={p.name || "Property Image"}
//                   className="w-full h-[380px] object-cover"
//                   onError={(e) => {
//                     e.currentTarget.src =
//                       "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=1170&q=80";
//                   }}
//                 />
//                 <button className="hidden group-hover:flex absolute left-0 top-0 h-full w-[50px] bg-slate-900/10 z-10 items-center     justify-center cursor-pointer">
//                   <span className="p-2 transition-all duration-1000 ease-in-out rounded-full">
//                     <ChevronLeft
//                       size={24}
//                       className="text-white  cursor-pointer"
//                     />
//                   </span>
//                 </button>
//                 <button className="hidden group-hover:flex absolute right-0 top-0 h-full w-[50px] bg-slate-900/10 z-10 items-center     justify-center cursor-pointer">
//                   <span className="p-2 transition rounded-full">
//                     <ChevronRight
//                       size={24}
//                       className="text-white  cursor-pointer"
//                     />
//                   </span>
//                 </button>
//               </div>
//               {/* Content Section */}
//               <div className="flex flex-col justify-between p-4 bg-[#0B1735]">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-3">
//                   <h3 className="text-xl font-semibold text-white">
//                     $ 500,000
//                   </h3>
//                   cursor-pointer
//                   <button className="text-sm bg-[#fff] text-[#092b80] px-4 py-1.5 rounded-[8px]  transition">
//                     View Details
//                   </button>
//                 </div>

//                 {/* Info */}
//                 <div className="border rounded-sm px-5 p-1 flex justify-around items-center text-sm h-[41px] text-zinc-400">
//                   <p className="flex items-center gap-2">
//                     <BedDouble size={16} className="mr-1 " />
//                     <span>2 Bedrooms</span>
//                   </p>
//                   <div className="w-px h-10 border-l mx-2" />
//                   <p className="flex items-center gap-2">
//                     <Bath size={16} className="mr-1 " />
//                     <span>1 Bath</span>
//                   </p>
//                   <div className="w-px h-10 border-l mx-2" />
//                   <p>1000 sqft</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default IconicProperties;
import { Bath, BedDouble, ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const IconicProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Refs for navigation
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get("/properties/active");
        if (res.data.success) {
          setProperties(res.data.data.slice(0, 6));
        }
      } catch (err) {
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <section className="p-4 lg:p-20 w-full mx-auto">
      <h2 className="text-4xl md:text-7xl font-bold text-center mb-20 heading-font">
        Iconic Properties
      </h2>

      {loading ? (
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto" />
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      ) : properties.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600">No properties found.</p>
        </div>
      ) : (
        <div className="relative">
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{ delay: 3000 }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {properties.map((p, idx) => (
              <SwiperSlide key={p._id ?? idx}>
                <Link to={`/properties/${p._id}`}>
                  <div
                    className="group rounded-xl transition hover:shadow-lg bg-white overflow-hidden cursor-pointer"
                    style={{ height: "520px" }}
                  >
                    <div className="relative">
                      <img
                        src={p.mainImage}
                        alt={p.name}
                        className="w-full h-[400px] object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=1170&q=80";
                        }}
                      />
                      {p.featured && (
                        <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          FEATURED
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-between p-4 bg-[#0B1735] h-[120px]">
                      <div className="flex justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white">
                          {p.price ? `AED ${p.price.toLocaleString()}` : "Price on request"}
                        </h3>
                        <button className="text-sm bg-[#F6BC6D] cursor-pointer text-[#092b80] px-4 py-1.5 rounded-[8px]">
                          View Details
                        </button>
                      </div>
                      <div className="border rounded-sm px-5 p-1 flex justify-around items-center text-sm h-[41px] text-zinc-400">
                        <p className="flex items-center gap-2">
                          <BedDouble size={16} /> 
                          <span>{p.beds || p.bedrooms || 0} Bed</span>
                        </p>
                        <div className="w-px h-10 border-l mx-2" />
                        <p className="flex items-center gap-2">
                          <Bath size={16} /> 
                          <span>{p.baths || p.bathrooms || 0} Bath</span>
                        </p>
                        <div className="w-px h-10 border-l mx-2" />
                        <p>{p.area || p.sqft ? `${p.area || p.sqft} sqft` : "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons outside the card container */}
          <div className="flex justify-between items-center mt-8">
            {/* <button
              ref={prevRef}
              className="swiper-button-prev flex items-center justify-center w-12 h-12 bg-white shadow rounded-full hover:bg-[#092b80] hover:text-white transition"
            >
              <ArrowLeft size={24} />
            </button> */}

            {/* Pagination dots */}
            <div className="custom-pagination flex justify-center gap-2" />

            {/* <button
              ref={nextRef}
              className="swiper-button-next flex items-center justify-center w-12 h-12 bg-white shadow rounded-full hover:bg-[#092b80] hover:text-white transition"
            >
              <ArrowRight size={24} />
            </button> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default IconicProperties;
