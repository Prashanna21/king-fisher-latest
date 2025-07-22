import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import slides from "../../data/hero";
import AbcPage from "../abc";
import OurStorySlider from "./OurStorySlider";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // const goToSlide = (index) => {
  //   if (index >= 0 && index < slides.length) {
  //     setCurrentSlide(index);
  //   }
  // };

  return (
    <>
      <div className="relative h-screen overflow-hidden group">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        ))}

        {/* Content */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 z-20">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl font-bold text-center"> Title</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              accusantium deleniti dolores soluta illo rerum quas asperiores.
              Rerum labore eius debitis nihil quidem odio at, esse hic,
              temporibus molestiae in!
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Auto-play Control */}
        <button
          onClick={() => setIsAutoPlaying((prev) => !prev)}
          className="absolute bottom-6 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>
      </div>
      <OurStorySlider />
    </>
  );
};

export default HeroCarousel;
