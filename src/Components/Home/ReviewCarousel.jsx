// import { useEffect, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import TestimonialCard from "./ReviewCard";

// const testimonials = [
//   {
//     name: "Pratiksha Acharya",
//     role: "Solo Traveller",
//     rating: 5,
//     comment:
//       "Traveling alone can be scary, but this team made me feel safe and excited.",
//     image: "https://i.pravatar.cc/150?img=32",
//   },
//   {
//     name: "Sagar Thapa",
//     role: "Adventure Seeker",
//     rating: 5,
//     comment: "The guides were amazing and the views breathtaking!",
//     image: "https://i.pravatar.cc/150?img=35",
//   },
//   {
//     name: "Priya Joshi",
//     role: "Nature Lover",
//     rating: 5,
//     comment: "Beautifully organized and safe travel experience!",
//     image: "https://i.pravatar.cc/150?img=47",
//   },
//   {
//     name: "Ravi Karki",
//     role: "Photographer",
//     rating: 5,
//     comment: "I got to capture breathtaking moments with total ease.",
//     image: "https://i.pravatar.cc/150?img=55",
//   },
//   {
//     name: "Manisha Basnet",
//     role: "Hiking Enthusiast",
//     rating: 5,
//     comment: "Super well-planned and fun! Will go again!",
//     image: "https://i.pravatar.cc/150?img=58",
//   },
// ];

// const TestimonialCarousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "start",
//       dragFree: true,
//       slidesToScroll: 1,
//     },
//     [Autoplay({ delay: 3000, stopOnInteraction: false })]
//   );

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     const interval = setInterval(scrollNext, 3000);
//     return () => clearInterval(interval);
//   }, [emblaApi, scrollNext]);

//   return (
//     <section className="w-full overflow-hidden py-12 px-4" ref={emblaRef}>
//       <div className="flex touch-pan-x select-none">
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className="min-w-[100%] sm:min-w-[50%] lg:min-w-[25%] px-4"
//           >
//             <div className="h-full flex">
//               <TestimonialCard {...t} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialCarousel;

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import "../../embla.css";

const ReviewCarousel = () => {
  const testimonials = [
    {
      name: "1Biplap Neupane",
      role: "Broker",
      image:
        "https://imgs.search.brave.com/O6FwsJe3qxeBZqcrMfWhaHdinxdGD_ChQ7JO-Adegfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/MzM0Lzg1My9zbWFs/bC9zY2VuaWMtc3Vu/cmlzZS1pbi10aGUt/aGlnaC1tb3VudGFp/bnMtb2YtdGhlLWFs/cGVzLWdlbmVyYXRp/dmUtYWktZnJlZS1w/aG90by5qcGc",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo reiciendis quia dolore repellat beatae?",
      rating: 5,
    },
    {
      name: "Biplap Neupane",
      role: "Broker",
      image:
        "https://imgs.search.brave.com/O6FwsJe3qxeBZqcrMfWhaHdinxdGD_ChQ7JO-Adegfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/MzM0Lzg1My9zbWFs/bC9zY2VuaWMtc3Vu/cmlzZS1pbi10aGUt/aGlnaC1tb3VudGFp/bnMtb2YtdGhlLWFs/cGVzLWdlbmVyYXRp/dmUtYWktZnJlZS1w/aG90by5qcGc",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo reiciendis quia dolore repellat beatae?",
      rating: 5,
    },
    {
      name: "Biplap Neupane",
      role: "Broker",
      image:
        "https://imgs.search.brave.com/O6FwsJe3qxeBZqcrMfWhaHdinxdGD_ChQ7JO-Adegfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/MzM0Lzg1My9zbWFs/bC9zY2VuaWMtc3Vu/cmlzZS1pbi10aGUt/aGlnaC1tb3VudGFp/bnMtb2YtdGhlLWFs/cGVzLWdlbmVyYXRp/dmUtYWktZnJlZS1w/aG90by5qcGc",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo reiciendis quia dolore repellat beatae?",
      rating: 5,
    },
    {
      name: "Biplap Neupane",
      role: "Broker",
      image:
        "https://imgs.search.brave.com/O6FwsJe3qxeBZqcrMfWhaHdinxdGD_ChQ7JO-Adegfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/MzM0Lzg1My9zbWFs/bC9zY2VuaWMtc3Vu/cmlzZS1pbi10aGUt/aGlnaC1tb3VudGFp/bnMtb2YtdGhlLWFs/cGVzLWdlbmVyYXRp/dmUtYWktZnJlZS1w/aG90by5qcGc",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo reiciendis quia dolore repellat beatae?",
      rating: 5,
    },
    {
      name: "Biplap Neupane",
      role: "Broker",
      image:
        "https://imgs.search.brave.com/O6FwsJe3qxeBZqcrMfWhaHdinxdGD_ChQ7JO-Adegfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/MzM0Lzg1My9zbWFs/bC9zY2VuaWMtc3Vu/cmlzZS1pbi10aGUt/aGlnaC1tb3VudGFp/bnMtb2YtdGhlLWFs/cGVzLWdlbmVyYXRp/dmUtYWktZnJlZS1w/aG90by5qcGc",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo reiciendis quia dolore repellat beatae?",
      rating: 5,
    },
    {
      name: "2Biplap Neupane",
      role: "Broker",
      image:
        "https://imgs.search.brave.com/O6FwsJe3qxeBZqcrMfWhaHdinxdGD_ChQ7JO-Adegfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/MzM0Lzg1My9zbWFs/bC9zY2VuaWMtc3Vu/cmlzZS1pbi10aGUt/aGlnaC1tb3VudGFp/bnMtb2YtdGhlLWFs/cGVzLWdlbmVyYXRp/dmUtYWktZnJlZS1w/aG90by5qcGc",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo reiciendis quia dolore repellat beatae?",
      rating: 5,
    },
  ];

  const options = { loop: true, align: "center", dragFree: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ startDelay: 1 }),
  ]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi],
  );

  return (
    <section className="relative py-16 overflow-hidden sm:-mx-[30px]  lg:-mx-[80px]">
      <div className="w-[100%] ">
        <h2 className="text-5xl font-extrabold text-center heading-font mb-12">
          Valued Customer Opinions{" "}
        </h2>

        {/* Carousel Container with higher z-index and overflow visible */}
        <div className="relative ">
          {/* Left gradient overlay */}
          {/* <div className="hidden md:block absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div> */}

          {/* Right gradient overlay */}
          {/* <div className="hidden md:block absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div> */}

          <div className="embla overflow-visible" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {testimonials.map((data, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-[0_0_80%] sm:flex-[0_0_60%] lg:flex-[0_0_45%]">
                  <div
                    className="relative  rounded-3xl p-10 min-h-[300px] sm:min-h-[300px] lg:min-h-[300px] transition-all duration-300 
                    border border-blue-500
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/5 before:to-transparent before:rounded-3xl
                    overflow-hidden transform-gpu">
                    {/* Blue accent bar */}
                    {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div> */}

                    {/* Decorative quote corner */}
                    <div className="absolute top-4 right-4 text-[#F6BC6D]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94m10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94"
                        />
                      </svg>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
                          <img
                            src={data.image}
                            alt={data.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 shadow-md">
                          <div className="bg-white rounded-full p-1">
                            <div className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="white">
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {data.name}
                        </h3>
                        <p className="text-base text-[#F6BC6D] font-medium">
                          {data.role}
                        </p>
                        <div className="mt-2 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-6 h-6 ${
                                i < data.rating
                                  ? "fill-yellow-400 stroke-yellow-400"
                                  : "stroke-slate-200 fill-slate-100"
                              }`}
                            />
                          ))}
                          {/* <span className="ml-2 text-base font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                            {data.rating}/5
                          </span> */}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full"></div>
                      <p className="ml-5 text-gray-200 text-lg leading-relaxed italic line-clamp-2">
                        "{data.review}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={() => onButtonAutoplayClick(scrollPrev)}
            className="p-2 rounded-full bg-[#F6BC6D] shadow-md border border-blue-100 hover:bg-blue-50 transition-all hover:shadow-lg disabled:opacity-50 z-50 relative">
            <ChevronLeft className="w-7 h-7 text-blue-700" />
          </button>
          <button
            onClick={() => onButtonAutoplayClick(scrollNext)}
            className="p-2 rounded-full bg-[#F6BC6D] shadow-md border border-blue-100 hover:bg-blue-50 transition-all hover:shadow-lg disabled:opacity-50 z-50 relative">
            <ChevronRight className="w-7 h-7 text-blue-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
