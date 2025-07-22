import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const SimpleSwiper = ({ images = [], propertyName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [thumbsStartIndex, setThumbsStartIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextThumbs = () => {
    if (thumbsStartIndex + 4 < images.length) {
      setThumbsStartIndex(thumbsStartIndex + 1);
    }
  };

  const prevThumbs = () => {
    if (thumbsStartIndex > 0) {
      setThumbsStartIndex(thumbsStartIndex - 1);
    }
  };

  const visibleThumbs = images.slice(thumbsStartIndex, thumbsStartIndex + 4);

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl group">
        <img
          src={images[currentSlide] || "../../../public/gallery/bg2.jpg"}
          alt={`${propertyName} - Image ${currentSlide + 1}`}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-6" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="relative mt-4">
        <div className="flex space-x-3 overflow-hidden">
          {visibleThumbs.map((image, index) => {
            const actualIndex = thumbsStartIndex + index;
            return (
              <button
                key={actualIndex}
                onClick={() => goToSlide(actualIndex)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  actualIndex === currentSlide
                    ? "border-gray-900 scale-105"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${actualIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* Thumbnail Navigation */}
        {thumbsStartIndex > 0 && (
          <button
            onClick={prevThumbs}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white shadow-lg rounded-full p-1 hover:shadow-xl transition-shadow"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
        )}
        {thumbsStartIndex + 4 < images.length && (
          <button
            onClick={nextThumbs}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-white shadow-lg rounded-full p-1 hover:shadow-xl transition-shadow"
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SimpleSwiper;
