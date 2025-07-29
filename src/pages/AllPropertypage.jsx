import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
} from "lucide-react";
import slides from "../data/hero";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import PropertiesListingComp from "../Components/PropertiesListingComp";

const Tabs = [
  { label: "Apartments", id: "apartments" },
  { label: "Villas", id: "villas" },
  { label: "VillaMates", id: "villamates" },
];

const ApartmentCards = [
  {
    apartmentId: "luxury-city-apartment",
    title: "Luxury City Apartment test",
    location: "Kathmandu, Nepal",
    price: "Rs. 45,000",
    bedrooms: 3,
    bathrooms: 2,
    size: "1350 sqft",
    imageUrl: "/gallery/bg.jpg",
  },
  {
    apartmentId: "modern-villa",
    title: "Modern Villa",
    location: "Kathmandu, Nepal",
    price: "Rs. 75,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "2000 sqft",
    imageUrl: "/gallery/bg2.jpg",
  },
  {
    apartmentId: "cozy-studio-apartment",
    title: "Cozy Studio Apartment",
    location: "Kathmandu, Nepal",
    price: "Rs. 30,000",
    bedrooms: 1,
    bathrooms: 1,
    size: "800 sqft",
    imageUrl: "/gallery/img1.jpg",
  },
];

const VillaCards = [
  {
    apartmentId: "luxury-beach-villa",
    title: "Luxury Beach Villa",
    location: "Dubai Marina, Dubai",
    price: "From AED 3,500,000",
    bedrooms: 5,
    bathrooms: 4,
    size: "3500 sqft",
    imageUrl: "/gallery/img3.jpg",
  },
  {
    apartmentId: "modern-family-villa",
    title: "Modern Family Villa",
    location: "Palm Jumeirah, Dubai",
    price: "From AED 2,800,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "2800 sqft",
    imageUrl: "/gallery/img4.jpg",
  },
  {
    apartmentId: "elegant-townhouse",
    title: "Elegant Townhouse",
    location: "Downtown Dubai, Dubai",
    price: "From AED 2,200,000",
    bedrooms: 3,
    bathrooms: 2,
    size: "2000 sqft",
    imageUrl: "/gallery/img5.jpg",
  },
];

const VillamateCards = [
  {
    apartmentId: "premium-villamate",
    title: "Premium Villamate",
    location: "Dubai Hills Estate, Dubai",
    price: "From AED 1,800,000",
    bedrooms: 3,
    bathrooms: 2,
    size: "1800 sqft",
    imageUrl: "/gallery/img6.jpg",
  },
  {
    apartmentId: "garden-villamate",
    title: "Garden Villamate",
    location: "Emirates Hills, Dubai",
    price: "From AED 1,600,000",
    bedrooms: 2,
    bathrooms: 2,
    size: "1500 sqft",
    imageUrl: "/gallery/img7.jpg",
  },
  {
    apartmentId: "modern-villamate",
    title: "Modern Villamate",
    location: "Jumeirah Golf Estates, Dubai",
    price: "From AED 1,900,000",
    bedrooms: 3,
    bathrooms: 2,
    size: "1700 sqft",
    imageUrl: "/gallery/img8.jpg",
  },
];

const PropertyTypes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying || !slides.length) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  // Get current property data based on active tab
  const getCurrentProperties = () => {
    switch (activeTab) {
      case 1:
        return VillaCards;
      case 2:
        return VillamateCards;
      default:
        return ApartmentCards;
    }
  };

  // Get page title based on active tab
  const getPageTitle = () => {
    switch (activeTab) {
      case 1:
        return "Luxury Villas";
      case 2:
        return "Exclusive Villamates";
      default:
        return "Apartments";
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="relative">
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
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center right-0 z-20 p-8 pb-20">
          <div className="max-w-4xl mx-auto text-white">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
                {getPageTitle()}
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl font-light leading-relaxed">
                <Breadcrumbs />
              </p>
            </div>
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Property Listings Section */}
      <div className="w-full relative">
        <div
          className="absolute inset-0 bg-repeat bg-[length:auto] z-0"
          style={{ backgroundImage: "url('/bg-texture.png')" }}
        />

        <div className="w-full max-w-7xl px-4 mx-auto">
          {/* Tabs Navigation with hover effects */}
          <div className="mx-auto flex justify-center gap-3 mb-6 pt-8">
            {Tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setHoveredTab(index)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`
        relative flex items-center justify-between px-6 py-3 text-sm font-medium 
        rounded-full transition-all duration-300 gap-3
        ${
          activeTab === index
            ? "bg-white text-[#334b85]"
            : "bg-[#2d437c] text-white border border-[#334b85]"
        }
      `}
              >
                <span className="z-10">{tab.label}</span>

                <div className="relative">
                  {/* Arrow container with overflow-visible */}
                  <div className="overflow-visible">
                    <div
                      className={`
              relative z-20 rounded-full p-1 transition-all duration-300
              ${
                activeTab === index
                  ? "bg-[#F6BC6D] text-black"
                  : "bg-[#334b85] text-white"
              }
              ${
                hoveredTab === index && activeTab !== index
                  ? "transform -rotate-45 scale-110"
                  : ""
              }
              ${activeTab === index ? "transform -rotate-45" : ""}
            `}
                    >
                      <ArrowRight size={16} className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Hover background - now properly positioned */}
                  {hoveredTab === index && activeTab !== index && (
                    <div
                      className={`
              absolute -inset-1 rounded-full bg-[#2d437c] opacity-100
              transition-all duration-300 z-10
            `}
                    ></div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-6">
            {getCurrentProperties().map((card) => (
              <PropertiesListingComp
                key={card.apartmentId}
                link={`/details/${card.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")}`}
                item={{ image: card.imageUrl, ...card }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypes;
