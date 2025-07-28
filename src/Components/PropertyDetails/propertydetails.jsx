import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const PropertyDetails = () => {
  // Get apartment data based on which one was clicked
  const apartmentData = {
    "luxury-city-apartment": {
      title: "Luxury City Apartment",
      subtitle: "ELEVATED LIVING, EVERY DAY",
      location: "Kathmandu, Nepal",
      price: "Rs. 45,000",
      startingPrice: "AED 1,327,000",
      paymentPlan: "1%",
      handover: "Q2, 2027",
      bedrooms: 3,
      bathrooms: 2,
      size: "1350 sqft",
      image: "/gallery/bg.jpg",
      description: "Discover new levels of sophisticated community living with Luxury City Apartment. Nestled amidst the breathtaking cityscape, this apartment stands as another striking testament to elevated living in Nepal's most vibrant community. From the elegant 3 bedroom layout to the more expansive living spaces, each apartment invites you to embrace an urban life in what feels like a world apart. Located near the city center and overlooking the mountains, this property takes people from the ordinary to the extraordinary."
    },
    "modern-villa": {
      title: "Modern Villa",
      subtitle: "CONTEMPORARY LUXURY LIVING",
      location: "Kathmandu, Nepal",
      price: "Rs. 75,000",
      startingPrice: "AED 2,150,000",
      paymentPlan: "2%",
      handover: "Q3, 2027",
      bedrooms: 4,
      bathrooms: 3,
      size: "2000 sqft",
      image: "/gallery/bg2.jpg",
      description: "Experience the pinnacle of modern architecture with our Modern Villa. This stunning property combines contemporary design with luxurious amenities, creating the perfect sanctuary for sophisticated living. With 4 spacious bedrooms and 3 elegant bathrooms, this villa offers the perfect balance of comfort and style. Located in a prime area with easy access to all amenities, this villa represents the future of luxury living in Nepal."
    },
    "cozy-studio-apartment": {
      title: "Cozy Studio Apartment",
      subtitle: "COMPACT ELEGANCE",
      location: "Kathmandu, Nepal",
      price: "Rs. 30,000",
      startingPrice: "AED 850,000",
      paymentPlan: "1%",
      handover: "Q1, 2027",
      bedrooms: 1,
      bathrooms: 1,
      size: "800 sqft",
      image: "/gallery/img1.jpg",
      description: "Perfect for singles or couples, our Cozy Studio Apartment offers a smart and efficient living solution without compromising on style. This thoughtfully designed space maximizes every square foot to create a comfortable and functional home. With modern amenities and a prime location, this studio apartment is ideal for those who value convenience and contemporary living."
    }
  };

  // Get the apartment ID from URL params (you can pass this when clicking Learn More)
  const { apartmentId } = useParams();
  
  // Default to first apartment if no ID provided
  const currentApartment = apartmentData[apartmentId] || apartmentData["luxury-city-apartment"];

  return (
    <div className="min-h-screen bg-[#0E1C41]">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
           src={currentApartment.image}
           alt={currentApartment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C41]/90 via-[#0E1C41]/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
             {currentApartment.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
             {currentApartment.subtitle}
            </p>
          </div>
        </div>

        {/* Back Button */}
        <Link 
          to="/properties/apartments"
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          ← Back to Properties
        </Link>
      </section>

      {/* Details Section */}
      <section className="relative py-20 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#0E1C41] opacity-90">
          <div className="absolute inset-0 bg-repeat bg-[length:auto] opacity-10"
               style={{ backgroundImage: "url('/bg-texture.png')" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Key Information */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Starting Price */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <h3 className="text-gray-300 text-sm mb-2">Starting price</h3>
                 <p className="text-3xl font-bold text-white">{currentApartment.startingPrice}</p>
                </div>

                {/* Payment Plan */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <h3 className="text-gray-300 text-sm mb-2">Payment plan</h3>
                 <p className="text-3xl font-bold text-white">{currentApartment.paymentPlan}</p>
                </div>

                {/* Project Handover */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <h3 className="text-gray-300 text-sm mb-2">Project handover</h3>
                 <p className="text-3xl font-bold text-white">{currentApartment.handover}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Description and CTA */}
            <div className="space-y-8">
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               {currentApartment.title}: {currentApartment.subtitle}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed">
               {currentApartment.description}
              </p>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                {/* Get in Touch Button */}
                <Link 
                  to={`/booking/${apartmentId}?title=${encodeURIComponent(currentApartment.title)}`}
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0E1C41] transition-all duration-300"
                >
                  GET IN TOUCH
                </Link>

                {/* Contact Icons */}
                <div className="flex gap-4">
                  <button className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0E1C41] transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#0E1C41] transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
