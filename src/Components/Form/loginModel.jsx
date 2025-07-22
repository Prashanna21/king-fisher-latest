import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import gsap from 'gsap';
import countriesData from 'world-countries';
import { Link } from 'react-router-dom';

const countries = countriesData.map((country) => ({
  name: country.name.common,
  code: country.cca2,
  iso3: country.cca3,
  dial: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
}));

const EnquiryModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Animate modal
  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
    );
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
  }, []);

  // Get country by IP
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        const found = countries.find((c) => c.code === data.country_code);
        if (found) {
          setSelectedCountry({ raw: found, value: found.code });
          setPhone(found.dial);
        }
      });
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.in',
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };
  return (
    <div ref={backdropRef} className="fixed inset-0 z-10 min-h-screen bg-black/80 flex justify-center items-center">
      <div ref={modalRef} className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left Image */}
        <div className="md:w-1/2 hidden md:block">
          <img src="/gallery/login.jpg" alt="Luxury" className="w-full h-full object-cover" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10 relative bg-gradient-to-bl from-white to-gray-50">
          {/* <button onClick={handleClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-2xl">&times;</button> */}
          <Link to={"/"} className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-2xl">&times;</Link>

          <h2 className="text-4xl font-['Playfair_Display'] font-bold text-[#1E2C3A] text-center mb-2 tracking-wide heading-font">
            Luxury Living Awaits
          </h2>
          <p className="text-center text-sm mb-6 paragraph-font">
            Complete the form below and our team will connect with you.
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E2C3A] bg-white placeholder:text-gray-400 shadow-sm"
            />

            {/* Country and Phone */}
            <div className="flex gap-3 items-center">
              
              <div className="flex-1 flex items-center">
                <span className="px-4 py-3.5 bg-gray-100 border border-gray-200 rounded-l-xl text-sm text-gray-600">
                  {selectedCountry?.raw.dial || '+__'}
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone.replace(selectedCountry?.raw.dial || '', '')}
                  onChange={(e) =>
                    setPhone((selectedCountry?.raw.dial || '') + e.target.value)
                  }
                  className="flex-1 px-4 py-3 border-t border-b border-r border-gray-200 rounded-r-xl focus:ring-2 focus:ring-[#1E2C3A] bg-white placeholder:text-gray-400 shadow-sm"
                />
              </div>
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E2C3A] bg-white placeholder:text-gray-400 shadow-sm"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E2C3A] bg-white placeholder:text-gray-400 shadow-sm"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#1E2C3A] text-white text-lg font-semibold py-3 rounded-xl hover:bg-[#2A3A4A] transition tracking-wide shadow-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
