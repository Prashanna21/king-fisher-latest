// import { useRef, useLayoutEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const images = [
//   {
//     img: "/gallery/img1.jpg",
//     title: "Exclusive Listings",
//     description: "This is the description for slide 1.",
//   },
//   {
//     img: "/gallery/img2.jpg",
//     title: "Sold Listings",
//     description: "This is the description for slide 2.",
//   },
//   {
//     img: "/gallery/img3.jpg",
//     title: "Exclusive Listings",
//     description: "This is the description for slide 3.",
//   },
//   {
//     img: "/gallery/img4.jpg",
//     title: "Sold Listings",
//     description: "This is the description for slide 4.",
//   },
// ];

// export default function HorizontalSlider() {
//   const trackRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useLayoutEffect(() => {
//     if (!isLoaded) return;

//     const ctx = gsap.context(() => {
//       const slides = trackRef.current.children;
//       const totalWidth = Array.from(slides).reduce(
//         (acc, slide) => acc + slide.offsetWidth,
//         0
//       );

//       const scrollLength = totalWidth - window.innerWidth;

//       gsap.to(trackRef.current, {
//         x: () => `-${scrollLength}`,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: () => `+=${scrollLength}`,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Refresh ScrollTrigger after images load
//       ScrollTrigger.refresh();
//     }, containerRef);

//     return () => ctx.revert();
//   }, [isLoaded]);

//   // Handle image loading
//   const handleImageLoad = () => {
//     if (trackRef.current) {
//       const images = trackRef.current.querySelectorAll("img");
//       const loaded = Array.from(images).every((img) => img.complete);
//       if (loaded) setIsLoaded(true);
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Horizontal Scroll Section */}
//       <section
//         ref={containerRef}
//         className="relative w-full h-screen overflow-hidden "
//       >
//         <h2 className="text-white text-center text-6xl heading-font font-bold absolute top-0 left-0 right-0 z-10">
//           Property Details
//         </h2>

//         <div ref={trackRef} className="flex w-max h-screen">
//           {images.map((item, index) => (
//             <div
//               key={`slide-${index}`}
//               className="w-screen h-[90vh] mt-20 flex-shrink-0 relative"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//                 onLoad={handleImageLoad}
//                 onError={handleImageLoad}
//               />
//               <div className="absolute bottom-20 left-[50%] bg-black/50 text-white p-4  rounded-lg">
//                 <h3 className="text-6xl heading-font font-semibold">
//                   {item.title}
//                 </h3>
//                 <p className="mt-2 text-amber-500 text-xl">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    img: "/gallery/img1.jpg",
    title: "Exclusive Listings",
    description: "This is the description for slide 1.",
  },
  {
    img: "/gallery/img2.jpg",
    title: "Sold Listings",
    description: "This is the description for slide 2.",
  },
  {
    img: "/gallery/img3.jpg",
    title: "Exclusive Listings",
    description: "This is the description for slide 3.",
  },
  {
    img: "/gallery/img4.jpg",
    title: "Sold Listings",
    description: "This is the description for slide 4.",
  },
];

export default function HorizontalSlider() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      const slides = trackRef.current.children;
      const totalWidth = Array.from(slides).reduce(
        (acc, slide) => acc + slide.offsetWidth,
        0
      );

      const scrollLength = totalWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: () => `-${scrollLength}`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Refresh ScrollTrigger after images load
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  // Handle image loading
  const handleImageLoad = () => {
    if (trackRef.current) {
      const images = trackRef.current.querySelectorAll("img");
      const loaded = Array.from(images).every((img) => img.complete);
      if (loaded) setIsLoaded(true);
    }
  };

  return (
    <div className="w-full">
      {/* Horizontal Scroll Section */}
      <div className="relative w-full ">
        <h2 className="text-white text-center text-3xl md:text-6xl heading-font font-bold absolute md:-top-40 left-0 right-0 -z-[0]">
          Property Details
        </h2>
      </div>
      <section
        ref={containerRef}
        className="relative w-full h-screen z-[99999]"
      >
        <div
          ref={trackRef}
          className="flex w-max h-screen overflow-x-auto scroll-smooth snap-x snap-mandatory "
        >
          {images.map((item, index) => (
            <div
              key={`slide-${index}`}
              className="w-screen h-screen flex-shrink-0 relative snap-center border-r-8 border-[#0E1A3B]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
              <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2  text-white px-4 py-3 rounded-lg w-full text-center">
                <h3 className="text-3xl md:text-7xl heading-font font-semibold leading-snug md:leading-[1.2]">
                  {item.title}
                </h3>
                <p className="mt-2 text-amber-500 text-base md:text-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
