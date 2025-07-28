import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadingWithHighlight from "../HeadingWithHighlight";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    img: "/gallery/Chelsea_Residences.jpg",
    title: "Exclusive Listings",
    description: "This is the description for slide 1.",
  },
  {
    img: "/gallery/Riverside_2.jpg",
    title: "Sold Listings",
    description: "This is the description for slide 2.",
  },
  {
    img: "/gallery/Riverside_3.jpg",
    title: "Exclusive Listings",
    description: "This is the description for slide 3.",
  },
  {
    img: "/gallery/Riverside_4.jpg",
    title: "Sold Listings",
    description: "This is the description for slide 4.",
  },
];

export default function HorizontalSlider({ onScrollComplete }) {
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
          onLeave: () => {
            onScrollComplete?.();
            ScrollTrigger.refresh();
          },
          onEnterBack: () => {
            ScrollTrigger.refresh();
          },
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded, onScrollComplete]);

  const handleImageLoad = () => {
    if (trackRef.current) {
      const images = trackRef.current.querySelectorAll("img");
      const loaded = Array.from(images).every((img) => img.complete);
      if (loaded) setIsLoaded(true);
    }
  };

  return (
    <div className="w-full overflow-hidden relative" data-section="property-slider">
      {/* Full background texture */}
      <div
        className="absolute inset-0 bg-repeat bg-[length:auto] z-0"
        style={{ backgroundImage: "url('/bg-texture.png')" }}
      ></div>
      {/* Heading */}
      <div className="relative w-full mx-auto z-10 ">
        <HeadingWithHighlight text="We're focused on" highlights={[]} />
        <HeadingWithHighlight
          text="Your Luxury Plans"
          className="mb-8"
          highlights={["Your", "Luxury", "Plans"]}
        />
      </div>
      {/* Scroll Section */}
      <section
        ref={containerRef}
        className="relative w-full h-screen  z-10 bg-[#0E1A3B]"
      >
        <div ref={trackRef} className="flex gap-2 w-max h-screen relative">
          {images.map((item, index) => (
            <div
              key={`slide-${index}`}
              className="w-screen h-screen flex-shrink-0 relative snap-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
              {/* <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 z-20 px-4 py-3 text-center w-full">
                <h3 className="text-3xl text-yellow-500 md:text-7xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-base md:text-xl text-white">
                  {item.description}
                </p>
              </div> */}
            </div>
          ))}
        </div>
        {/* Blue Overlay outside of mapped images */}
        {/* <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" /> */}
      </section>
    </div>
  );
}
