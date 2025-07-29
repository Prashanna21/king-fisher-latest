"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowRight, Loader, ChevronLeft, Maximize2, MapPin, BedDouble, Bath, Ruler, Building2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Static property data
const staticProperties = [
  {
    _id: "68889adea2a437c3450d2fd6",
    apartmentId: "68889adea2a437c3450d2fd6",
    name: "The Horizon",
    propertyType: { name: "Apartment" },
    price: 460000,
    location: "Sobha Central",
    beds: 2,
    baths: 2,
    area: 1200,
    mainImage: "/gallery/img1.jpg",
    developer: "Sobha Properties",
    status: "Available",
    description: "Experience luxury living in the heart of Downtown Dubai. This stunning 2-bedroom apartment offers breathtaking views of the Burj Khalifa and features premium finishes throughout. Perfect for families seeking comfort and style in one of the most prestigious locations.",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Concierge", "Pet Friendly"],
    gallery: ["/gallery/img1.jpg", "/gallery/img2.jpg", "/gallery/img3.jpg", "/gallery/img4.jpg"]
  },
  {
    _id: "luxury-palm-villa",
    apartmentId: "luxury-palm-villa",
    name: "Luxury Palm Villa",
    propertyType: { name: "Villa" },
    price: 4500000,
    location: "Palm Jumeirah",
    beds: 4,
    baths: 4,
    area: 3500,
    mainImage: "/gallery/img3.jpg",
    developer: "Nakheel Properties",
    status: "Available",
    description: "Discover this magnificent 4-bedroom villa on Palm Jumeirah with private beach access. Featuring modern architecture, spacious interiors, and panoramic sea views. This exclusive property offers the perfect blend of luxury and comfort.",
    amenities: ["Private Beach", "Garden", "Home Theater", "Smart Home", "Pool", "Gym"],
    gallery: ["/gallery/img3.jpg", "/gallery/img4.jpg", "/gallery/img5.jpg", "/gallery/img6.jpg"]
  },
  {
    _id: "cozy-studio-apartment",
    apartmentId: "cozy-studio-apartment",
    name: "Cozy Studio Apartment",
    propertyType: { name: "Studio" },
    price: 1200000,
    location: "Dubai Marina",
    beds: 1,
    baths: 1,
    area: 800,
    mainImage: "/gallery/img2.jpg",
    developer: "Dubai Properties",
    status: "Available",
    description: "Perfect starter home in Dubai Marina. This cozy studio apartment offers modern amenities, marina views, and is walking distance to shopping and dining. Ideal for young professionals or investors.",
    amenities: ["Marina View", "Balcony", "Modern Kitchen", "Security", "Parking"],
    gallery: ["/gallery/img2.jpg", "/gallery/img7.jpg", "/gallery/img8.jpg", "/gallery/img9.jpg"]
  },
  {
    _id: "luxury-beach-villa",
    apartmentId: "luxury-beach-villa",
    name: "Luxury Beach Villa",
    propertyType: { name: "Villa" },
    price: 3500000,
    location: "Dubai Marina",
    beds: 5,
    baths: 4,
    area: 3500,
    mainImage: "/gallery/img4.jpg",
    developer: "Emaar Properties",
    status: "Available",
    description: "Exclusive beachfront villa with 5 bedrooms and private beach access. Features premium finishes, smart home technology, and stunning ocean views. The perfect family home in a prestigious location.",
    amenities: ["Beach Access", "Private Pool", "Garden", "Smart Home", "Gym", "Security"],
    gallery: ["/gallery/img4.jpg", "/gallery/img10.jpg", "/gallery/img11.jpg", "/gallery/img12.jpg"]
  },
  {
    _id: "modern-family-villa",
    apartmentId: "modern-family-villa",
    name: "Modern Family Villa",
    propertyType: { name: "Villa" },
    price: 2800000,
    location: "Palm Jumeirah",
    beds: 4,
    baths: 3,
    area: 2800,
    mainImage: "/gallery/img5.jpg",
    developer: "Nakheel Properties",
    status: "Available",
    description: "Contemporary family villa with 4 bedrooms, modern design, and private garden. Located in the prestigious Palm Jumeirah area with easy access to amenities and schools.",
    amenities: ["Private Garden", "Modern Design", "Community Pool", "Security", "Parking"],
    gallery: ["/gallery/img5.jpg", "/gallery/img1.jpg", "/gallery/img2.jpg", "/gallery/img3.jpg"]
  },
  {
    _id: "elegant-townhouse",
    apartmentId: "elegant-townhouse",
    name: "Elegant Townhouse",
    propertyType: { name: "Townhouse" },
    price: 2200000,
    location: "Downtown Dubai",
    beds: 3,
    baths: 2,
    area: 2000,
    mainImage: "/gallery/img6.jpg",
    developer: "Emaar Properties",
    status: "Available",
    description: "Elegant 3-bedroom townhouse in Downtown Dubai with modern amenities and city views. Perfect for families who want to be close to shopping, dining, and entertainment.",
    amenities: ["City Views", "Modern Amenities", "Community Facilities", "Security", "Parking"],
    gallery: ["/gallery/img6.jpg", "/gallery/img4.jpg", "/gallery/img5.jpg", "/gallery/img6.jpg"]
  },
  {
    _id: "premium-villamate",
    apartmentId: "premium-villamate",
    name: "Premium Villamate",
    propertyType: { name: "Villamate" },
    price: 1800000,
    location: "Dubai Hills Estate",
    beds: 3,
    baths: 2,
    area: 1800,
    mainImage: "/gallery/img7.jpg",
    developer: "Emaar Properties",
    status: "Available",
    description: "Premium villamate with 3 bedrooms in Dubai Hills Estate. Features modern design, community amenities, and golf course views. Perfect for families seeking a peaceful lifestyle.",
    amenities: ["Golf Course Views", "Community Amenities", "Modern Design", "Security", "Parking"],
    gallery: ["/gallery/img7.jpg", "/gallery/img7.jpg", "/gallery/img8.jpg", "/gallery/img9.jpg"]
  },
  {
    _id: "garden-villamate",
    apartmentId: "garden-villamate",
    name: "Garden Villamate",
    propertyType: { name: "Villamate" },
    price: 1600000,
    location: "Emirates Hills",
    beds: 2,
    baths: 2,
    area: 1500,
    mainImage: "/gallery/img8.jpg",
    developer: "Dubai Properties",
    status: "Available",
    description: "Charming 2-bedroom villamate with garden views in Emirates Hills. Features spacious interiors, community facilities, and a peaceful environment perfect for families.",
    amenities: ["Garden Views", "Community Facilities", "Spacious Interiors", "Security", "Parking"],
    gallery: ["/gallery/img8.jpg", "/gallery/img10.jpg", "/gallery/img11.jpg", "/gallery/img12.jpg"]
  },
  {
    _id: "modern-villamate",
    apartmentId: "modern-villamate",
    name: "Modern Villamate",
    propertyType: { name: "Villamate" },
    price: 1900000,
    location: "Jumeirah Golf Estates",
    beds: 3,
    baths: 2,
    area: 1700,
    mainImage: "/gallery/img9.jpg",
    developer: "Nakheel Properties",
    status: "Available",
    description: "Modern 3-bedroom villamate in Jumeirah Golf Estates with contemporary design and golf course views. Features premium amenities and a luxurious lifestyle.",
    amenities: ["Golf Course Views", "Contemporary Design", "Premium Amenities", "Security", "Parking"],
    gallery: ["/gallery/img9.jpg", "/gallery/img1.jpg", "/gallery/img2.jpg", "/gallery/img3.jpg"]
  },
  {
    _id: "luxury-city-apartment",
    apartmentId: "luxury-city-apartment",
    name: "Luxury City Apartment",
    propertyType: { name: "Apartment" },
    price: 2500000,
    location: "Downtown Dubai",
    beds: 3,
    baths: 2,
    area: 1350,
    mainImage: "/gallery/bg.jpg",
    developer: "Emaar Properties",
    status: "Available",
    description: "Experience luxury living in the heart of Downtown Dubai. This stunning 3-bedroom apartment offers breathtaking views of the Burj Khalifa and features premium finishes throughout. Perfect for families seeking comfort and style in one of the most prestigious locations.",
    amenities: ["Burj Khalifa Views", "Premium Finishes", "24/7 Security", "Parking", "Concierge", "Gym"],
    gallery: ["/gallery/bg.jpg", "/gallery/img1.jpg", "/gallery/img2.jpg", "/gallery/img3.jpg"]
  }
];

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  
  // Get the property ID from URL params
  const { apartmentId } = useParams();
  
  // Find property from static data
  useEffect(() => {
    setLoading(true);
    const foundProperty = staticProperties.find(p => p._id === apartmentId || p.apartmentId === apartmentId);
    if (foundProperty) {
      setProperty(foundProperty);
    } else {
      // Fallback to default property if not found
      setProperty({
        _id: apartmentId,
        apartmentId: apartmentId,
        name: "Property Not Found",
        propertyType: { name: "Property" },
        price: 0,
        location: "Location not available",
        beds: 0,
        baths: 0,
        area: 0,
        mainImage: "/gallery/img1.jpg",
        developer: "Unknown",
        status: "Available",
        description: "Property details not available.",
        amenities: [],
        gallery: ["/gallery/img1.jpg"]
      });
    }
    setLoading(false);
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
            className="mt-4 inline-flex items-center gap-2 bg-[#F6BC6D] text-[#0E1C41] px-6 py-3 rounded-full hover:bg-[#F6BC6D]/90 transition-all duration-300"
          >
            <ChevronLeft size={18} /> Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E1C41]">
      {/* Background texture */}
      <div 
        className="absolute inset-0 bg-repeat bg-[length:auto] z-0"
        style={{ backgroundImage: "url('/bg-texture.png')" }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={property.gallery?.[selectedImage] || property.mainImage || "/gallery/img1.jpg"}
            alt={property.name}
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.7) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C41] via-[#0E1C41]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-end h-full pb-16">
          <div className="container mx-auto px-4">
            <div className="w-11/12 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
                  {property.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-[#F6BC6D]">
                  <div className="flex items-center gap-1">
                    <MapPin size={18} />
                    <span className="text-lg">{property.location}</span>
                  </div>
                  <span className="text-2xl font-bold">
                    {property.price ? `AED ${property.price.toLocaleString()}` : "Price on request"}
                  </span>
                </div>
                 
                {/* Thumbnail Gallery */}
                {property.gallery && property.gallery.length > 1 && (
                  <div className="flex gap-2 mt-6">
                    {property.gallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index ? "border-[#F6BC6D] scale-105" : "border-transparent"
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`Thumbnail ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="relative z-10 container mx-auto px-4 py-12">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Details */}
            <div className="lg:col-span-2">
              {/* Property Highlights */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#162b5d] rounded-2xl p-6 md:p-8 mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-[#F6BC6D]/30">
                  Property Highlights
                </h2>
                 
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-[#0E1C41] rounded-xl">
                    <div className="flex flex-col items-center">
                      <BedDouble className="text-[#F6BC6D] mb-2" size={24} />
                      <span className="text-gray-300 text-sm">Bedrooms</span>
                      <span className="text-xl font-bold text-white">{property.beds || property.bedrooms || 0}</span>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-[#0E1C41] rounded-xl">
                    <div className="flex flex-col items-center">
                      <Bath className="text-[#F6BC6D] mb-2" size={24} />
                      <span className="text-gray-300 text-sm">Bathrooms</span>
                      <span className="text-xl font-bold text-white">{property.baths || property.bathrooms || 0}</span>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-[#0E1C41] rounded-xl">
                    <div className="flex flex-col items-center">
                      <Ruler className="text-[#F6BC6D] mb-2" size={24} />
                      <span className="text-gray-300 text-sm">Size</span>
                      <span className="text-xl font-bold text-white">
                        {property.area || property.sqft ? `${property.area || property.sqft} sqft` : "N/A"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-[#0E1C41] rounded-xl">
                    <div className="flex flex-col items-center">
                      <Building2 className="text-[#F6BC6D] mb-2" size={24} />
                      <span className="text-gray-300 text-sm">Type</span>
                      <span className="text-xl font-bold text-white">{property.propertyType?.name || "Property"}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#162b5d] rounded-2xl p-6 md:p-8 mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Description</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {property.description || `Discover this exceptional ${property.propertyType?.name?.toLowerCase() || "property"} located in the prestigious ${property.location} area. 
                  This stunning property features ${property.beds || property.bedrooms || 0} spacious bedrooms and ${property.baths || property.bathrooms || 0} elegant bathrooms, 
                  offering ${property.area || property.sqft || "ample"} square feet of luxurious living space. Perfect for families seeking comfort and style 
                  in one of the most sought-after locations.`}
                </p>
              </motion.div>
              
              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-[#162b5d] rounded-2xl p-6 md:p-8 mb-8"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#F6BC6D]"></div>
                        <span className="text-gray-300">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Project Images */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#162b5d] rounded-2xl p-6 md:p-8 mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Project Images</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div 
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => {
                      setSelectedImage(0);
                      setShowGallery(true);
                    }}
                  >
                    <img 
                      src="/gallery/img1.jpg" 
                      alt="Project Image 1" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div 
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => {
                      setSelectedImage(1);
                      setShowGallery(true);
                    }}
                  >
                    <img 
                      src="/gallery/img2.jpg" 
                      alt="Project Image 2" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div 
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => {
                      setSelectedImage(2);
                      setShowGallery(true);
                    }}
                  >
                    <img 
                      src="/gallery/img3.jpg" 
                      alt="Project Image 3" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div 
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => {
                      setSelectedImage(3);
                      setShowGallery(true);
                    }}
                  >
                    <img 
                      src="/gallery/img4.jpg" 
                      alt="Project Image 4" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - CTA and Developer Info */}
            <div>
              {/* Contact CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#162b5d] rounded-2xl p-6 md:p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Schedule a Viewing</h2>
                 
                <div className="space-y-4">
                  {/* Call Button */}
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center gap-2 cursor-pointer">
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
                          Call Now
                        </span>
                        <div className="relative z-20 rounded-full h-10 w-10 flex items-center justify-center bg-[#F6BC6D]">
                          <Phone
                            className={`transition-transform duration-300 ${
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
                    </div>
                  </div>
                  
                  {/* WhatsApp Button */}
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center gap-2 cursor-pointer">
                      <div
                        className="flex items-center rounded-full cursor-pointer relative overflow-hidden"
                        onMouseEnter={() => setIsWhatsAppHovered(true)}
                        onMouseLeave={() => setIsWhatsAppHovered(false)}
                      >
                        <span
                          className={`font-medium z-10 pl-4 pr-2 py-2 transition-colors duration-300 ${
                            isWhatsAppHovered ? "text-[#1b1b3a]" : "text-[#F6BC6D]"
                          }`}
                        >
                          Message on WhatsApp
                        </span>
                        <div className="relative z-20 rounded-full h-10 w-10 flex items-center justify-center bg-[#F6BC6D]">
                          <MessageCircle
                            className={`transition-transform duration-300 ${
                              isWhatsAppHovered
                                ? "translate-x-1 text-[#1b1b3a]"
                                : "text-[#232266]"
                            }`}
                            size={20}
                          />
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
                 
                <div className="mt-6 pt-6 border-t border-[#F6BC6D]/30">
                  <h3 className="text-lg font-semibold text-[#F6BC6D] mb-3">Request More Information</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-[#0E1C41] border border-[#2d3d6f] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F6BC6D]"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-[#0E1C41] border border-[#2d3d6f] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F6BC6D]"
                    />
                    <input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full bg-[#0E1C41] border border-[#2d3d6f] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F6BC6D]"
                    />
                    <textarea 
                      placeholder="Your Message" 
                      rows={3}
                      className="w-full bg-[#0E1C41] border border-[#2d3d6f] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F6BC6D]"
                    ></textarea>
                    
                    {/* Submit Button */}
                    <div className="flex justify-center items-center">
                      <div className="flex justify-center items-center gap-2 cursor-pointer">
                        <div
                          className="flex items-center rounded-full cursor-pointer relative overflow-hidden"
                          onMouseEnter={() => setIsSubmitHovered(true)}
                          onMouseLeave={() => setIsSubmitHovered(false)}
                        >
                          <span
                            className={`font-medium z-10 pl-4 pr-2 py-2 transition-colors duration-300 ${
                              isSubmitHovered ? "text-[#1b1b3a]" : "text-[#F6BC6D]"
                            }`}
                          >
                            Send Inquiry
                          </span>
                          <div className="relative z-20 rounded-full h-10 w-10 flex items-center justify-center bg-[#F6BC6D]">
                            <ArrowRight
                              className={`transition-transform duration-300 ${
                                isSubmitHovered
                                  ? "translate-x-1 text-[#1b1b3a]"
                                  : "text-[#232266]"
                              }`}
                              size={20}
                            />
                          </div>
                          <div
                            className={`absolute top-0 bottom-0 right-0 bg-[#F6BC6D] rounded-full transition-all duration-300 ease-in-out ${
                              isSubmitHovered ? "w-full" : "w-10 right-0"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
              
              {/* Developer Info */}
              {property.developer && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-[#162b5d] rounded-2xl p-6 md:p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Developer</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                      <img 
                        src="/gallery/img5.jpg" 
                        alt="Developer Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{property.developer}</h3>
                      <p className="text-gray-300">Premium Property Developer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-[#2d3d6f]">
                      <span className="text-gray-300">Project Status</span>
                      <span className="text-white font-medium">{property.status || "Available"}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[#2d3d6f]">
                      <span className="text-gray-300">Handover Date</span>
                      <span className="text-white font-medium">Q4 2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Payment Plan</span>
                      <span className="text-white font-medium">Flexible Options</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-[#0E1C41]/95 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-4xl w-full">
            <img 
              src={property.gallery?.[selectedImage] || property.mainImage || "/gallery/img1.jpg"}
              alt={property.name}
              className="w-full max-h-[70vh] object-contain"
            />
            
            <div className="flex gap-2 mt-4 overflow-x-auto py-2">
              {property.gallery?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-[#F6BC6D] scale-105" : "border-transparent"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;