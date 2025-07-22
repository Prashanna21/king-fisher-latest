import React, { useState,  useRef } from "react";
import {
  Home,
  Search,
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  Users,
  MapPin,
  Star,
  Award,
  Building,
  Key,
} from "lucide-react";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";

const OurServices = () => {
  const bannerRef = useRef(null);
  const [ setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Search,
      title: "Property Search",
      description:
        "Discover your perfect home with our curated selection of premium apartments and luxury residences.",
    },
    {
      id: 2,
      icon: Home,
      title: "Property Sales",
      description:
        "Maximize your property's value with our expert marketing strategies and extensive buyer network.",
    },
    {
      id: 3,
      icon: Calculator,
      title: "Investment Advisory",
      description:
        "Make informed decisions with comprehensive market analysis and investment guidance.",
    },
    {
      id: 4,
      icon: FileText,
      title: "Legal Support",
      description:
        "Navigate complex transactions with confidence through our comprehensive legal assistance.",
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Market Analysis",
      description:
        "Stay ahead with detailed market reports and price trend analysis for informed decisions.",
    },
    {
      id: 6,
      icon: Shield,
      title: "Property Management",
      description:
        "Comprehensive property management services to protect and enhance your investment.",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Banner */}
      <div
        className="relative w-full mx-auto h-screen bg-cover bg-center text-white -mt-25 darkSection"
        style={{
          backgroundImage: 'url("/property/property.jpg")',
          fontFamily: `'Wellsbrook Initials SG Regular'`,
          height: "75vh",
          padding: "0 50px",
        }}
        ref={bannerRef}
      >
        {/* Black overlay at 80% */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Centered Text */}
        <div className="absolute top-10/12 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
          <p
            className="font-bold heading-font tracking-widest uppercase leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)", // Responsive size
            }}
          >
            Our Services
          </p>
          <Breadcrumbs />
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative  border border-[#F5BC6D] rounded-3xl p-8 transition-all duration-500 overflow-hidden"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient background on hover */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f6bc6d] rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ">
                      {React.createElement(service.icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex items-center justify-center lg:justify-start">
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#F5BC6D] transition-colors ">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex items-center justify-center text-center lg:justify-start">
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-white transition-colors raleway-regular">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute top-6 right-6 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
