import React, { useState } from "react";
import { Phone, MessageCircle, Calendar, User, Mail, MapPin } from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";

const Booking = () => {
  const { apartmentId } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const apartmentTitle = searchParams.get('title') || 'Property';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Booking submitted:', formData);
    alert('Booking request submitted successfully! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-[#0E1C41]">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#0E1C41] opacity-90">
          <div className="absolute inset-0 bg-repeat bg-[length:auto] opacity-10"
               style={{ backgroundImage: "url('/bg-texture.png')" }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Book Your Visit
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Schedule a viewing for {apartmentTitle}
            </p>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to={`/details/${apartmentId}`}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          ← Back to Property
        </Link>
      </section>

      {/* Booking Form Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Ready to experience {apartmentTitle}? Fill out the form and our team will get back to you within 24 hours to schedule your visit.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <div className="w-12 h-12 bg-[#F6BC6D] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#0E1C41]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Call Us</h3>
                    <p className="text-gray-300">+977 123-456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <div className="w-12 h-12 bg-[#F6BC6D] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#0E1C41]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email Us</h3>
                    <p className="text-gray-300">info@kingfisher.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20">
                  <div className="w-12 h-12 bg-[#F6BC6D] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#0E1C41]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Visit Us</h3>
                    <p className="text-gray-300">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-[#F6BC6D]/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Book Your Visit</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F6BC6D] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F6BC6D] transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F6BC6D] transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-white font-medium mb-2">
                    Preferred Visit Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F6BC6D] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F6BC6D] transition-colors resize-none"
                    placeholder="Tell us about your requirements or any questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#F6BC6D] to-[#F8A145] text-[#0E1C41] font-semibold rounded-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                >
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking; 