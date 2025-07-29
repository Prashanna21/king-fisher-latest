import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
} from "lucide-react";
import slides from "../../data/hero";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ApartmentCard from "./ApartmentCard";
import { Link, useLocation } from "react-router-dom";
import PropertiesListingComp from "../PropertiesListingComp";

const Tabs = [
  {
    label: "ABC Apartments",
    href: "/details/luxury-city-apartment",
    description: "This is a description for ABC Apartments",
    img: "https://modal-cdn.com/navbar-use-case-fine-tuning.webp",
  },
  {
    label: "XYZ Apartments",
    href: "/details/modern-villa",
    description: "This is a description for XYZ Apartments",
    img: "https://modal-cdn.com/navbar-use-case-job-queues.webp",
  },
  {
    label: "Luxury Apartments",
    href: "/details/cozy-studio-apartment",
    description: "This is a description for Luxury Apartments",
    img: "https://modal-cdn.com/navbar-use-case-sandboxes.webp",
  },
];

// Sample slides data
const ApartmentCards = [
  {
    apartmentId: "68889adea2a437c3450d2fd6",
    title: "The Horizon",
    location: "Sobha Central, Dubai",
    price: "From AED 460,000",
    bedrooms: 2,
    bathrooms: 2,
    size: "1200 sqft",
    imageUrl: "/gallery/img1.jpg",
  },
  {
    apartmentId: "cozy-studio-apartment",
    title: "Cozy Studio Apartment",
    location: "Dubai Marina, Dubai",
    price: "From AED 1,200,000",
    bedrooms: 1,
    bathrooms: 1,
    size: "800 sqft",
    imageUrl: "/gallery/img2.jpg",
  },
  {
    apartmentId: "luxury-city-apartment",
    title: "Luxury City Apartment",
    location: "Downtown Dubai, Dubai",
    price: "From AED 2,500,000",
    bedrooms: 3,
    bathrooms: 2,
    size: "1350 sqft",
    imageUrl: "/gallery/bg.jpg",
  },
];

const VillaCards = [
  {
    apartmentId: "luxury-palm-villa",
    title: "Luxury Palm Villa",
    location: "Palm Jumeirah, Dubai",
    price: "From AED 4,500,000",
    bedrooms: 4,
    bathrooms: 4,
    size: "3500 sqft",
    imageUrl: "/gallery/img3.jpg",
  },
  {
    apartmentId: "luxury-beach-villa",
    title: "Luxury Beach Villa",
    location: "Dubai Marina, Dubai",
    price: "From AED 3,500,000",
    bedrooms: 5,
    bathrooms: 4,
    size: "3500 sqft",
    imageUrl: "/gallery/img4.jpg",
  },
  {
    apartmentId: "modern-family-villa",
    title: "Modern Family Villa",
    location: "Palm Jumeirah, Dubai",
    price: "From AED 2,800,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "2800 sqft",
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
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const location = useLocation();

  // Get current property data based on route
  const getCurrentPropertyData = () => {
    if (location.pathname.includes("/villas")) {
      return VillaCards;
    } else if (location.pathname.includes("/villamates")) {
      return VillamateCards;
    } else {
      return ApartmentCards;
    }
  };

  // Get page title based on route
  const getPageTitle = () => {
    if (location.pathname.includes("/villas")) {
      return "Luxury Villas";
    } else if (location.pathname.includes("/villamates")) {
      return "Exclusive Villamates";
    } else {
      return "Apartments";
    }
  };

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

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const currentPropertyData = getCurrentPropertyData();

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

      <div className="w-full max-w-7xl px-4 mx-auto mt-10">
        <div className="flex">
          {Tabs.map((column, colIdx) => (
            <Link
              to={column.href}
              key={colIdx}
              onClick={() => setActiveSubMenu(column.label)}
              className={`flex items-center justify-between px-3 py-2 text-sm font-medium text-white rounded-full border border-[#334b85] hover:bg-[#2d437c] transition-all duration-200 gap-3 ${
                colIdx === 1 ? "w-full" : "w-fit"
              }`}
            >
              <span>{column.label}</span>
              <ArrowRight
                size={16}
                className="text-black bg-amber-300/50 rounded-full rotate-320 h-6 w-6"
              />
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {currentPropertyData.map((card, index) => (
            <PropertiesListingComp
              key={index}
              link={`/properties/${card.apartmentId}`}
              item={{ image: card.imageUrl, ...card }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyTypes;