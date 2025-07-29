import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowRight, Loader } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";

const PropertyDetails = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Get the property ID from URL params
  const { apartmentId } = useParams();
  
  // Fetch property data from backend
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/properties/${apartmentId}`);
        if (response.data.success) {
          setProperty(response.data.data);
        } else {
          // Fallback to default property if not found
          setProperty({
            _id: apartmentId,
            name: "Property Not Found",
            propertyType: { name: "Property" },
            price: 0,
            location: "Location Not Available",
            beds: 0,
            baths: 0,
            area: 0,
            mainImage: "/gallery/img1.jpg",
            developer: "Unknown",
            status: "Available",
            description: "Property details not available."
          });
        }
      } catch (error) {
        console.error('Error fetching property:', error);
        // Fallback to default property if API fails
        setProperty({
          _id: apartmentId,
          name: "Property Not Found",
          propertyType: { name: "Property" },
          price: 0,
          location: "Location Not Available",
          beds: 0,
          baths: 0,
          area: 0,
          mainImage: "/gallery/img1.jpg",
          developer: "Unknown",
          status: "Available",
          description: "Property details not available."
        });
      } finally {
        setLoading(false);
      }
    };

    if (apartmentId) {
      fetchProperty();
    }
  }, [apartmentId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0E1C41] flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin w-12 h-12 text-[#F6BC6D] mx-auto mb-4" />
          <p className="text-white text-lg">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-[#0E1C41] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-lg">Property not found</p>
          <Link 
            to="/properties"
            className="mt-4 inline-block bg-[#F6BC6D] text-[#1b1b3a] px-6 py-3 rounded-full hover:bg-[#F6BC6D]/80 transition-all duration-300"
          >
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E1C41]">
      {/* Hero Section - Full Width */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={property.mainImage || property.image || "/gallery/img1.jpg"}
            alt={property.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/gallery/img1.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C41]/90 via-[#0E1C41]/50 to-transparent" />
        </div>

        {/* Back Button */}
        <Link 
          to="/properties"
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
        >
          ← Back to Properties
        </Link>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {property.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {property.propertyType?.name || "Premium Property"}
            </p>
            <div className="flex items-center justify-center gap-4 text-white">
              <span className="text-3xl font-bold">
                {property.price ? `AED ${property.price.toLocaleString()}` : "Price on request"}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xl">{property.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="container mx-auto px-4 py-12">
        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Key Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Price */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                <h3 className="text-gray-300 text-sm mb-2">Price</h3>
                <p className="text-3xl font-bold text-white">
                  {property.price ? `AED ${property.price.toLocaleString()}` : "On request"}
                </p>
              </div>

              {/* Property Type */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                <h3 className="text-gray-300 text-sm mb-2">Type</h3>
                <p className="text-3xl font-bold text-white">{property.propertyType?.name || "Property"}</p>
              </div>

              {/* Location */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                <h3 className="text-gray-300 text-sm mb-2">Location</h3>
                <p className="text-2xl font-bold text-white">{property.location}</p>
              </div>
            </div>

            {/* Additional Property Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bedrooms */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                <h3 className="text-gray-300 text-sm mb-2">Bedrooms</h3>
                <p className="text-3xl font-bold text-white">{property.beds || property.bedrooms || 0}</p>
              </div>

              {/* Bathrooms */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                <h3 className="text-gray-300 text-sm mb-2">Bathrooms</h3>
                <p className="text-3xl font-bold text-white">{property.baths || property.bathrooms || 0}</p>
              </div>

              {/* Size */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                <h3 className="text-gray-300 text-sm mb-2">Size</h3>
                <p className="text-3xl font-bold text-white">
                  {property.area || property.sqft ? `${property.area || property.sqft} sqft` : "N/A"}
                </p>
              </div>
            </div>

            {/* Developer and Status */}
            {property.developer && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Developer */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <h3 className="text-gray-300 text-sm mb-2">Developer</h3>
                  <p className="text-2xl font-bold text-white">{property.developer}</p>
                </div>

                {/* Status */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <h3 className="text-gray-300 text-sm mb-2">Status</h3>
                  <p className="text-2xl font-bold text-white">{property.status || "Available"}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Description and CTA */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {property.name}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              {property.description || `Discover this exceptional ${property.propertyType?.name?.toLowerCase() || "property"} located in the prestigious ${property.location} area. 
              This stunning property features ${property.beds || property.bedrooms || 0} spacious bedrooms and ${property.baths || property.bathrooms || 0} elegant bathrooms, 
              offering ${property.area || property.sqft || "ample"} square feet of luxurious living space. Perfect for families seeking comfort and style 
              in one of the most sought-after locations.`}
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              {/* Book Now Button */}
              <Link to="/properties" className="flex gap-3 items-center">
                <div
                  className="flex items-center rounded-full cursor-pointer relative overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span
                    className={`font-medium z-10 pl-4 pr-2 py-2 transition-colors duration-300 ${
                      isHovered ? "text-[#1b1b3a]" : "text-[#F6BC6D]"
                    }`}
                  >
                    Book Now 
                  </span>
                  <div className="relative z-20 rounded-full h-10 w-10 flex items-center justify-center bg-[#F6BC6D]">
                    <ArrowRight
                      className={`transition-transform rotate-320 duration-300 ${
                        isHovered
                          ? "translate-x-1 text-[#1b1b3a]"
                          : "text-[#232266]"
                      }`}
                      size={20}
                    />
                  </div>
                  <div
                    className={`absolute top-0 bottom-0 right-0 bg-[#F6BC6D] rounded-full transition-all duration-300 ease-in-out ${
                      isHovered ? "w-full" : "w-10 right-0"
                    }`}
                  />
                </div>
              </Link>

              {/* WhatsApp Button */}
              <div className="flex items-center rounded-full cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setIsWhatsAppHovered(true)}
                onMouseLeave={() => setIsWhatsAppHovered(false)}
              >
                <span
                  className={`font-medium z-10 pl-4 pr-2 py-2 transition-colors duration-300 ${
                    isWhatsAppHovered ? "text-[#1b1b3a]" : "text-[#F6BC6D]"
                  }`}
                >
                  Message Us
                </span>
                <div className="relative z-20 rounded-full h-10 w-10 flex items-center justify-center bg-[#F6BC6D]">
                  <svg 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isWhatsAppHovered ? "text-[#1b1b3a]" : "text-[#232266]"
                    }`}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div
                  className={`absolute top-0 bottom-0 right-0 bg-[#F6BC6D] rounded-full transition-all duration-300 ease-in-out ${
                    isWhatsAppHovered ? "w-full" : "w-10 right-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
