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
    },
    "safa-gate-apartment": {
      title: "Safa Gate",
      subtitle: "LUXURY SEASIDE LIVING",
      location: "Sheikh Zayed Road, Dubai",
      price: "From AED 2,258,000",
      startingPrice: "AED 2,258,000",
      paymentPlan: "2%",
      handover: "Q4, 2027",
      bedrooms: 3,
      bathrooms: 2,
      size: "1800 sqft",
      image: "/gallery/newimg1.jpg",
      description: "Experience the epitome of luxury living at Safa Gate, located in the prestigious Sheikh Zayed Road area. This stunning apartment offers breathtaking sea views and world-class amenities. With 3 spacious bedrooms and 2 elegant bathrooms, this property combines comfort with sophistication. Perfect for families seeking a premium lifestyle in Dubai's most sought-after location."
    },
    "damac-riverside-views": {
      title: "DAMAC Riverside Views",
      subtitle: "RIVERSIDE ELEGANCE",
      location: "DAMAC Riverside Community, Dubai",
      price: "From AED 1,503,000",
      startingPrice: "AED 1,503,000",
      paymentPlan: "1.5%",
      handover: "Q3, 2027",
      bedrooms: 2,
      bathrooms: 2,
      size: "1400 sqft",
      image: "/gallery/newimg2.jpg",
      description: "Discover tranquility and luxury at DAMAC Riverside Views. This exceptional property offers stunning river views and a peaceful community setting. With 2 well-appointed bedrooms and 2 modern bathrooms, this apartment is perfect for couples or small families. Enjoy the perfect blend of urban convenience and natural beauty in this prestigious DAMAC development."
    },
    "damac-bay-cavalli": {
      title: "DAMAC Bay 2 by Cavalli",
      subtitle: "DESIGNER LUXURY",
      location: "Dubai Harbour, Dubai",
      price: "From AED 7,284,000",
      startingPrice: "AED 7,284,000",
      paymentPlan: "3%",
      handover: "Q2, 2028",
      bedrooms: 4,
      bathrooms: 3,
      size: "2800 sqft",
      image: "/gallery/newimg3.jpg",
      description: "Step into the world of designer luxury with DAMAC Bay 2 by Cavalli. This exclusive property in Dubai Harbour represents the pinnacle of sophisticated living. With 4 luxurious bedrooms and 3 designer bathrooms, this apartment offers unparalleled comfort and style. Experience the perfect fusion of Italian design excellence and Dubai's luxury lifestyle."
    },
    "sold-listings-dubai": {
      title: "Sold Listings - Dubai Islands",
      subtitle: "PREMIUM INVESTMENT",
      location: "Dubai Islands, Dubai",
      price: "from 1.9M AED",
      startingPrice: "AED 1,900,000",
      paymentPlan: "2%",
      handover: "Q1, 2027",
      bedrooms: 3,
      bathrooms: 2,
      size: "1600 sqft",
      image: "/gallery/img2.jpg",
      description: "Invest in the future with our premium Dubai Islands property. This sold listing represents exceptional value in one of Dubai's most promising developments. With 3 bedrooms and 2 bathrooms, this property offers excellent rental potential and capital appreciation. Don't miss the opportunity to own a piece of Dubai's most exciting new development."
    },
    "exclusive-listings-dubai": {
      title: "Exclusive Listings - Dubai Islands",
      subtitle: "EXCLUSIVE OPPORTUNITY",
      location: "Dubai Islands, Dubai",
      price: "from 1.9M AED",
      startingPrice: "AED 1,900,000",
      paymentPlan: "2%",
      handover: "Q1, 2027",
      bedrooms: 2,
      bathrooms: 2,
      size: "1200 sqft",
      image: "/gallery/img1.jpg",
      description: "Secure your place in Dubai's most exclusive development. This limited-edition property offers unique investment potential in the prestigious Dubai Islands. With 2 bedrooms and 2 bathrooms, this apartment is perfect for investors or those seeking a premium lifestyle. Act fast - these exclusive listings are in high demand."
    },
    "sold-listings-premium": {
      title: "Sold Listings Premium",
      subtitle: "LUXURY INVESTMENT",
      location: "Dubai Islands, Dubai",
      price: "from 1.9M AED",
      startingPrice: "AED 1,900,000",
      paymentPlan: "2.5%",
      handover: "Q2, 2027",
      bedrooms: 4,
      bathrooms: 3,
      size: "2200 sqft",
      image: "/gallery/img2.jpg",
      description: "Experience the ultimate in luxury investment with our premium sold listing. This exceptional property offers the perfect combination of luxury living and investment potential. With 4 spacious bedrooms and 3 elegant bathrooms, this apartment represents the pinnacle of Dubai's real estate market. Secure your legacy in one of the world's most dynamic cities."
    },
    "luxury-beach-villa": {
      title: "Luxury Beach Villa",
      subtitle: "BEACHFRONT ELEGANCE",
      location: "Dubai Marina, Dubai",
      price: "From AED 3,500,000",
      startingPrice: "AED 3,500,000",
      paymentPlan: "3%",
      handover: "Q3, 2027",
      bedrooms: 5,
      bathrooms: 4,
      size: "3500 sqft",
      image: "/gallery/img3.jpg",
      description: "Experience the epitome of beachfront luxury with our exclusive beach villa. This stunning property offers direct beach access, private pool, and breathtaking ocean views. With 5 spacious bedrooms and 4 elegant bathrooms, this villa combines comfort with sophistication. Perfect for families seeking a premium lifestyle in Dubai's most sought-after beachfront location."
    },
    "modern-family-villa": {
      title: "Modern Family Villa",
      subtitle: "FAMILY LUXURY LIVING",
      location: "Palm Jumeirah, Dubai",
      price: "From AED 2,800,000",
      startingPrice: "AED 2,800,000",
      paymentPlan: "2.5%",
      handover: "Q2, 2027",
      bedrooms: 4,
      bathrooms: 3,
      size: "2800 sqft",
      image: "/gallery/img4.jpg",
      description: "Discover the perfect family home with our modern villa on Palm Jumeirah. This exceptional property offers spacious living areas, private garden, and modern amenities. With 4 well-appointed bedrooms and 3 modern bathrooms, this villa is perfect for families. Enjoy the perfect blend of luxury and comfort in this prestigious Palm Jumeirah development."
    },
    "elegant-townhouse": {
      title: "Elegant Townhouse",
      subtitle: "URBAN SOPHISTICATION",
      location: "Downtown Dubai, Dubai",
      price: "From AED 2,200,000",
      startingPrice: "AED 2,200,000",
      paymentPlan: "2%",
      handover: "Q1, 2027",
      bedrooms: 3,
      bathrooms: 2,
      size: "2000 sqft",
      image: "/gallery/img5.jpg",
      description: "Step into urban sophistication with our elegant townhouse in Downtown Dubai. This exclusive property offers rooftop terrace, city views, and modern amenities. With 3 luxurious bedrooms and 2 designer bathrooms, this townhouse offers unparalleled comfort and style. Experience the perfect fusion of urban convenience and luxury lifestyle."
    },
    "premium-villamate": {
      title: "Premium Villamate",
      subtitle: "COMMUNITY LUXURY",
      location: "Dubai Hills Estate, Dubai",
      price: "From AED 1,800,000",
      startingPrice: "AED 1,800,000",
      paymentPlan: "2%",
      handover: "Q2, 2027",
      bedrooms: 3,
      bathrooms: 2,
      size: "1800 sqft",
      image: "/gallery/img6.jpg",
      description: "Experience community luxury living with our premium villamate. This exceptional property offers shared amenities, community spaces, and modern design. With 3 spacious bedrooms and 2 elegant bathrooms, this villamate combines comfort with community living. Perfect for those seeking a sophisticated lifestyle with shared facilities."
    },
    "garden-villamate": {
      title: "Garden Villamate",
      subtitle: "NATURAL TRANQUILITY",
      location: "Emirates Hills, Dubai",
      price: "From AED 1,600,000",
      startingPrice: "AED 1,600,000",
      paymentPlan: "1.5%",
      handover: "Q1, 2027",
      bedrooms: 2,
      bathrooms: 2,
      size: "1500 sqft",
      image: "/gallery/img7.jpg",
      description: "Discover tranquility with our garden villamate surrounded by lush landscapes. This peaceful property offers garden views, community amenities, and natural beauty. With 2 well-appointed bedrooms and 2 modern bathrooms, this villamate is perfect for those who value nature and community living. Enjoy the perfect blend of serenity and convenience."
    },
    "modern-villamate": {
      title: "Modern Villamate",
      subtitle: "SMART COMMUNITY LIVING",
      location: "Jumeirah Golf Estates, Dubai",
      price: "From AED 1,900,000",
      startingPrice: "AED 1,900,000",
      paymentPlan: "2%",
      handover: "Q3, 2027",
      bedrooms: 3,
      bathrooms: 2,
      size: "1700 sqft",
      image: "/gallery/img8.jpg",
      description: "Experience smart community living with our modern villamate. This contemporary property offers smart home features, shared amenities, and innovative design. With 3 spacious bedrooms and 2 elegant bathrooms, this villamate represents the future of community living. Perfect for tech-savvy individuals seeking modern conveniences."
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

              {/* Additional Property Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bedrooms */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <h3 className="text-gray-300 text-sm mb-2">Bedrooms</h3>
                  <p className="text-3xl font-bold text-white">{currentApartment.bedrooms}</p>
                </div>

                {/* Bathrooms */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <h3 className="text-gray-300 text-sm mb-2">Bathrooms</h3>
                  <p className="text-3xl font-bold text-white">{currentApartment.bathrooms}</p>
                </div>

                {/* Size */}
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <h3 className="text-gray-300 text-sm mb-2">Size</h3>
                  <p className="text-3xl font-bold text-white">{currentApartment.size}</p>
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
