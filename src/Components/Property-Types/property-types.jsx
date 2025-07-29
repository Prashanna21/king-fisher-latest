import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import slides from "../../data/hero";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ApartmentCard from "./ApartmentCard";
import { useLocation } from "react-router-dom";
import PropertiesListingComp from "../PropertiesListingComp";
import api from "../../services/api";

const PropertyTypes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Fetch properties from backend based on route
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        console.log("🔍 Starting to fetch properties...");
        console.log("📍 Current route:", location.pathname);
        console.log("🌐 API URL:", import.meta.env.VITE_API_URL);
        
        // Test the basic endpoint first
        const endpoint = "/properties/active";
        
        console.log("🌐 Fetching from endpoint:", endpoint);
        const response = await api.get(endpoint);
        console.log("✅ API Response received:", response.data);
        
        if (response.data.success) {
          console.log("📊 Properties data:", response.data.data);
          console.log("📊 Number of properties:", response.data.data?.length || 0);
          
          // Filter properties based on route if needed
          let filteredProperties = response.data.data;
          
          // If you have property type filtering on backend, you can uncomment this:
          // if (location.pathname.includes("/villas")) {
          //   filteredProperties = response.data.data.filter(p => p.propertyType?.name?.toLowerCase().includes('villa'));
          // } else if (location.pathname.includes("/villamates")) {
          //   filteredProperties = response.data.data.filter(p => p.propertyType?.name?.toLowerCase().includes('villamate'));
          // } else {
          //   filteredProperties = response.data.data.filter(p => p.propertyType?.name?.toLowerCase().includes('apartment'));
          // }
          
          console.log("🔧 Filtered properties:", filteredProperties);
          console.log("🔧 Number of filtered properties:", filteredProperties?.length || 0);
          
          // Transform backend data to match the expected format
          const transformedProperties = filteredProperties.map((property, index) => {
            const transformed = {
              apartmentId: property._id || `property-${index}`,
              title: property.name || property.title || "Property",
              location: property.location || "Dubai, UAE",
              price: property.price ? `From AED ${property.price.toLocaleString()}` : "Price on request",
              bedrooms: property.bedrooms || property.beds || 1, // default to 1 if not present
              bathrooms: property.bathrooms || property.baths || 1, // default to 1 if not present
              size: property.propertySize ? `${property.propertySize} sqft` : (property.area || property.sqft ? `${property.area || property.sqft} sqft` : "N/A"),
              imageUrl: property.mainImage || property.image || "/gallery/newimg1.jpg",
              _id: property._id,
              image: property.mainImage || property.image || "/gallery/newimg1.jpg",
              tag: ["Luxury", "For Living"],
            };
            console.log(`🏠 Property ${index}:`, transformed);
            return transformed;
          });
          
          console.log("🎯 Final transformed properties:", transformedProperties);
          console.log("🎯 Number of transformed properties:", transformedProperties?.length || 0);
          setProperties(transformedProperties);
        } else {
          console.log("❌ API returned success: false, using fallback data");
          console.log("❌ API response:", response.data);
          setProperties(getFallbackData());
        }
      } catch (error) {
        console.error("💥 Error fetching properties:", error);
        console.error("💥 Error details:", {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
          config: error.config
        });
        console.log("🔄 Using fallback data due to API error");
        setProperties(getFallbackData());
      } finally {
        setLoading(false);
        console.log("🏁 Finished loading properties");
      }
    };

    fetchProperties();
  }, [location.pathname]);

  // Fallback static data
  const getFallbackData = () => {
    // No fallback, only backend data should be shown
    return [];
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

      {/* Property Cards */}
      <div className="w-full max-w-7xl px-4 mx-auto mt-10">
        {/* Debug Section - Remove this after fixing */}
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800 mb-2">🔍 Debug Info:</h3>
          <p className="text-sm text-yellow-700">Route: {location.pathname}</p>
          <p className="text-sm text-yellow-700">Loading: {loading ? "Yes" : "No"}</p>
          <p className="text-sm text-yellow-700">Properties Count: {properties.length}</p>
          <p className="text-sm text-yellow-700">API URL: {import.meta.env.VITE_API_URL}</p>
          {properties.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-yellow-700 font-bold">First Property:</p>
              <pre className="text-xs text-yellow-700 bg-yellow-50 p-2 rounded">
                {JSON.stringify(properties[0], null, 2)}
              </pre>
            </div>
          )}
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#F6BC6D]"></div>
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center text-gray-500 py-20 text-xl font-semibold">No properties found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {properties.map((card, index) => (
              <PropertiesListingComp
                key={card._id || index}
                link={`/properties/${card._id}`}
                item={{ image: card.imageUrl, ...card }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyTypes;
