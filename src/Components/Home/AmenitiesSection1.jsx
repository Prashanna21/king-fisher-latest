"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import api from "../../services/api";

const AmenitiesSection = () => {
  const carouselRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [galleryData, setGalleryData] = useState([]);

  const scrollBy = (direction) => {
    const scrollContainer = carouselRef.current;
    const scrollAmount = 300;
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      try {
        setLoading(true);
        const res = await api.get("/home-galleries");
        if (res.data.success) {
          setGalleryData(res.data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    dataFetch();
  }, []);

  console.log("galleryData:", galleryData);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollBy("next");
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  if (loading)
    return (
      <div className="text-center py-20">
        <Loader className="animate-spin w-6 h-6 mx-auto" />
        Loading...
      </div>
    );

  return (
    <section
      id="gallery"
      className="py-8 px-4 md:px-16 mx-auto max-w-[100vw] overflow-hidden lightSection mb-4"
    >
      <h2 className="text-center text-3xl md:text-5xl tracking-widest mb-6 heading-font">
        GALLERY
      </h2>

      {/* Carousel */}
      <div className="w-full overflow-x-hidden scrollbar-hide mt-15">
        <motion.div
          ref={carouselRef}
          className="flex items-end gap-6 overflow-x-auto  scrollbar-hidden pb-4"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          dragMomentum={true}
          style={{ cursor: "grab" }}
        >
          {galleryData.map((a, index) => (
            <div
              key={index}
              className="min-w-[300px] w-[250px] md:w-[300px] flex-shrink-0 text-center select-none"
            >
              <img
                src={a.imageUrl}
                alt={a.title}
                className="h-[310px] w-full object-cover mb-3"
                draggable={false}
              />
              <p className="text-sm md:text-base uppercase tracking-wider text-gray-700">
                {a.title}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6 z-50">
          <button
            onClick={() => scrollBy("prev")}
            className="p-3 transition cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scrollBy("next")}
            className="p-3 transition cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
