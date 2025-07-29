import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Home,
  BedDouble,
  Mail,
  Phone,
  Check,
  UserCog2,
  X,
  Bath,
  AreaChart,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SimpleSwiper from "./SimpleSwiper.jsx";
import SimplePagination from "../Pagination/propertyPagination.jsx";
import { Link } from "react-router-dom";

const PropertyCard = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProperties = data.slice(startIdx, startIdx + itemsPerPage);

  const handleContact = (type, property) => {
    const phone = "971501234567";
    const email = "info@luxury-properties.com";

    switch (type) {
      case "whatsapp": {
        const message = `Hello, I'm interested in ${property.name} priced at ${property.price}`;
        window.open(
          `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
          "_blank",
        );
        break;
      }
      case "call":
        window.open(`tel:${phone}`, "_blank");
        break;
      case "email":
        window.open(
          `mailto:${email}?subject=Inquiry about ${property.name}&body=Hello, I'm interested in learning more about ${property.name} listed at ${property.price}.`,
          "_blank",
        );
        break;
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors group font-medium">
            <ArrowLeft
              size={20}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to Properties
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {currentProperties.map((property, index) => {
            const globalIndex = startIdx + index;

            return (
              <Link
                to={`/properties/${property._id}`}
                key={property._id || globalIndex}
                className=" backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group hover:-translate-y-1">
                {/* Image Gallery */}
                <div className="p-6 pb-4 relative">
                  {property.featured && (
                    <div className="absolute top-8 left-8 z-10 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      FEATURED
                    </div>
                  )}
                  <img
                    src={property.mainImage || "/gallery/newimg1.jpg"}
                    alt={property.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/gallery/newimg1.jpg";
                    }}
                  />
                </div>

                {/* Property Details */}
                <div className="px-6 pb-8">
                  {/* Title and Price */}
                  <div className="mb-6">
                    <div className="flex justify-between items-start">
                      <h2 className="text-4xl font-bold text-[#fff4ab] mb-2">
                        {property.name}
                      </h2>
                      <span className="bg-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                        NEW
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-emerald-600">
                        {property.price ? `AED ${property.price.toLocaleString()}` : "Price on request"}
                      </p>
                      <div className="flex items-center text-zinc-600">
                        <MapPin size={16} className="mr-1.5 text-rose-500" />
                        <span className="text-sm">{property.location || "Dubai, UAE"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Property Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3 p-4  rounded-xl shadow-sm">
                      <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                        <Home size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase font-semibold tracking-wider">
                          Type
                        </p>
                        <p className="font-medium text-zinc-800">
                          {property.propertyType?.name || "Apartment"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4  rounded-xl shadow-sm">
                      <div className="p-3 bg-rose-100 rounded-xl text-rose-600">
                        <BedDouble size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                          Bedrooms
                        </p>
                        <p className="font-medium text-zinc-800">
                          {property.beds || property.bedrooms || 0}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4  rounded-xl shadow-sm">
                      <div className="p-3 bg-violet-100 rounded-xl text-violet-600">
                        <Bath size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                          Bathrooms
                        </p>
                        <p className="font-medium text-zinc-800">
                          {property.baths || property.bathrooms || 0}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4  rounded-xl shadow-sm">
                      <div className="p-3 bg-green-100 rounded-xl text-green-600">
                        <AreaChart size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                          Area
                        </p>
                        <p className="font-medium text-zinc-800">
                          {property.area || property.sqft ? `${property.area || property.sqft} sqft` : "N/A"}
                        </p>
                      </div>
                    </div>

                    {property.developer && (
                      <div className="flex items-center space-x-3 p-4  rounded-xl shadow-sm">
                        <div className="p-3 bg-violet-100 rounded-xl text-violet-600">
                          <UserCog2 size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                            Developer
                          </p>
                          <p className="font-medium text-zinc-800">
                            {property.developer}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-3 p-4  rounded-xl shadow-sm capitalize">
                      <div
                        className={`p-3 rounded-xl ${
                          property.status === "available"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-rose-100 text-rose-600"
                        }`}>
                        {property.status === "available" ? (
                          <Check size={18} />
                        ) : (
                          <X size={18} />
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                          Status
                        </p>
                        <p
                          className={`font-medium ${
                            property.status === "available"
                              ? "text-emerald-600"
                              : "text-rose-600"
                          }`}>
                          {property.status || "Available"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleContact("email", property);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-xl transition-all duration-300 hover:scale-[1.02] font-medium text-sm">
                      <Mail
                        size={18}
                        className="transition-transform group-hover:scale-110"
                      />
                      <span>Email</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleContact("whatsapp", property);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all duration-300 hover:scale-[1.02] font-medium text-sm">
                      <FaWhatsapp
                        size={18}
                        className="transition-transform group-hover:scale-110"
                      />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleContact("call", property);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 hover:scale-[1.02] font-medium text-sm">
                      <Phone
                        size={18}
                        className="transition-transform group-hover:scale-110"
                      />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <SimplePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
