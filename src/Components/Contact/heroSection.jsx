import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ContactHeroSection = () => {
  return (
    <>
      <div
        className="relative h-[60vh] -mt-24 bg-center bg-cover bg-no-repeat z-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute top-10/12 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
          <p
            className="font-bold heading-font tracking-widest uppercase leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)", // Responsive size
            }}
          >
            Contact
          </p>
          <Breadcrumbs />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-20 py-10">
        <Link to="/" className="flex items-center text-gray-400 mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Link>
      </div>
    </>
  );
};

export default ContactHeroSection;
