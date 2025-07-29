import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import ToggleSidebar from "./toggleSidebar";
import { useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Properties",
    href: "/properties",
    subMenu: [
      {
        label: "Apartments",
        href: "/properties/apartments",
        subMenu: [
          {
            label: "ABC Apartments",
            href: "/details/luxury-city-apartment",
            description: "This is a description for ABC Apartments",
            img: "https://modal-cdn.com/navbar-use-case-fine-tuning.webp",
          },
          {
            label: "XYZ Apartments",
            href: "/details/modern-villa",
            description: "This is a description for XYZ Apartments",
            img: "https://modal-cdn.com/navbar-use-case-job-queues.webp",
          },
          {
            label: "Luxury Apartments",
            href: "/details/cozy-studio-apartment",
            description: "This is a description for Luxury Apartments",
            img: "https://modal-cdn.com/navbar-use-case-sandboxes.webp",
          },
        ],
      },
      {
        label: "Villas",
        href: "/properties/villas",
        subMenu: [
          {
            label: "Luxury Beach Villa",
            href: "/details/luxury-beach-villa",
            description:
              "Exclusive beachfront villa with private pool and ocean views.",
            img: "/gallery/img3.jpg",
          },
          {
            label: "Modern Family Villa",
            href: "/details/modern-family-villa",
            description:
              "Spacious family villa with garden and modern amenities.",
            img: "/gallery/img4.jpg",
          },
          {
            label: "Elegant Townhouse",
            href: "/details/elegant-townhouse",
            description:
              "Sophisticated townhouse with rooftop terrace and city views.",
            img: "/gallery/img5.jpg",
          },
        ],
      },
      {
        label: "Villamates",
        href: "/properties/villamates",
        subMenu: [
          {
            label: "Premium Villamate",
            href: "/details/premium-villamate",
            description:
              "Luxury villamate with shared amenities and community living.",
            img: "/gallery/img6.jpg",
          },
          {
            label: "Garden Villamate",
            href: "/details/garden-villamate",
            description:
              "Peaceful villamate surrounded by lush gardens and nature.",
            img: "/gallery/img7.jpg",
          },
          {
            label: "Modern Villamate",
            href: "/details/modern-villamate",
            description:
              "Contemporary villamate with smart home features and modern design.",
            img: "/gallery/img8.jpg",
          },
        ],
      },
    ],
  },
  { label: "About Us", href: "/about" },
  // { label: "Our Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  // { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isInPropertySlider, setIsInPropertySlider] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const propertySliderSection = document.querySelector(
        '[data-section="property-slider"]'
      );

      if (propertySliderSection) {
        const rect = propertySliderSection.getBoundingClientRect();
        const isInSection = rect.top <= 0 && rect.bottom >= 0;

        if (isInSection && !isInPropertySlider) {
          setIsInPropertySlider(true);
          setIsNavbarVisible(false);
        } else if (!isInSection && isInPropertySlider) {
          setIsInPropertySlider(false);
          setIsNavbarVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInPropertySlider]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: isNavbarVisible ? 0 : -100,
        opacity: isNavbarVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        opacity: { duration: 0.3 },
      }}
      role="navigation"
      className={`mt-[20px] fixed top-0 left-1/2 transform -translate-x-1/2 bg-[#0E1C41] text-white z-60 w-11/12 md:max-w-7xl ${
        hoveredIndex !== null ? "rounded-t-2xl" : "rounded-2xl"
      } ${activeSubMenu ? "shadow-lg " : ""}`}
      onMouseLeave={() => {
        setHoveredIndex(null);
        setActiveSubMenu(null);
      }}
    >
      {/* Top Nav */}
      <div className="px-5 py-3 ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-[#F6BC6D]">
            <img
              src="/logo/logo1.png"
              alt="Kingdom Properties logo"
              className="h-5 md:h-10 object-contain"
              loading="lazy"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-2 md:gap-10 items-center relative">
            {navItems.map((item, idx) =>
              item.subMenu ? (
                <div
                  key={idx}
                  className="flex"
                  onMouseEnter={() => {
                    setHoveredIndex(idx);
                    setActiveSubMenu(item.subMenu?.[0]?.label || null);
                  }}
                >
                  <Link
                    to={item.href}
                    className={` font-medium cursor-pointer transition-opacity duration-200 ${
                      hoveredIndex === idx ? "opacity-100" : "hover:opacity-80"
                    } ${activeSubMenu ? "text-[#F6BC6D]" : ""}`}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={hoveredIndex === idx}
                  >
                    <div className="flex justify-center items-center gap-1">
                      {" "}
                      {item.label}
                      <span
                        className={` ${
                          hoveredIndex === idx
                            ? "opacity-100"
                            : "hover:opacity-80"
                        } `}
                      >
                        <ChevronDown className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.href}
                  className={`font-medium transition-opacity ${
                    currentPath === item.href
                      ? "text-[#F6BC6D]"
                      : "hover:text-[#F6BC6D] hover:opacity-80"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          {/* Contact Button */}
          <div className="flex gap-4 items-center">
            {isMobile ? (
              <Menu onClick={toggleSidebar} color="white" size={30} />
            ) : (
              <Link to="/contact" className="flex gap-3 items-center">
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
                    Contact
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
            )}
          </div>
        </div>
      </div>

      {/* Submenu */}
      <AnimatePresence>
        {hoveredIndex !== null && navItems[hoveredIndex]?.subMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-[#0E1C41]/95 z-40 px-6 pt-8 pb-10 rounded-b-2xl shadow-2xl backdrop-blur-md"
          >
            <div className="relative flex">
              {/* Left Panel */}
              <div className="flex flex-col w-1/3 bg-[#1A2B5F]/70 backdrop-blur border border-[#263a75] rounded-xl p-5">
                <div className="flex gap-5">
                  <div className="w-1/2">
                    <h3 className="text-[#F6BC6D] font-bold text-xl mb-3">
                      Title
                    </h3>
                    <p className="text-sm text-white/80">
                      Explore different categories of properties we offer.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    {navItems[hoveredIndex].subMenu.map((column, colIdx) => (
                      <Link
                        to={column.href}
                        key={colIdx}
                        onClick={() => setActiveSubMenu(column.label)}
                        className={`flex items-center justify-between px-3 py-2 text-sm font-medium text-white rounded-full border border-[#334b85] hover:bg-[#2d437c] transition-all duration-200 gap-3 ${
                          colIdx === 1 ? "w-full" : "w-fit"
                        }`}
                      >
                        <span>{column.label}</span>
                        <ArrowRight
                          size={16}
                          className="text-black bg-amber-300/50 rounded-full rotate-320 h-6 w-6"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="relative w-2/3">
                {navItems[hoveredIndex].subMenu.map((column, colIdx) => {
                  const isActive = activeSubMenu === column.label;
                  return (
                    <div
                      key={colIdx}
                      className={`absolute w-full transition-all duration-500 ease-in-out transform ${
                        isActive
                          ? "opacity-100 translate-x-0 pointer-events-auto"
                          : "opacity-0 translate-x-4 pointer-events-none"
                      }`}
                    >
                      {column.subMenu && (
                        <div className="relative px-4 md:px-6">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {column.subMenu
                              .slice(0, 3)
                              .map((subItem, subIdx) => (
                                <Link
                                  to={subItem.href}
                                  key={subIdx}
                                  onClick={() => {
                                    setHoveredIndex(null);
                                    setActiveSubMenu(null);
                                  }}
                                  className="group bg-[#22386f] hover:bg-[#2c4787] transition-all duration-300 rounded-xl border border-[#334b85] overflow-hidden"
                                >
                                  <div className="h-[185px] w-full overflow-hidden rounded-t-xl p-4 bg-[#22386f]">
                                    <h3 className="text-white font-semibold text-lg mb-2">
                                      {subItem.label}
                                    </h3>
                                    <div className="flex h-full gap-4 relative">
                                      <div className="w-1/2">
                                        <p className="text-[#F6BC6D] text-sm">
                                          {subItem.description}
                                        </p>
                                      </div>
                                      <div className="w-1/2 absolute -right-5 bottom-0">
                                        <img
                                          src={subItem.img}
                                          alt={subItem.label}
                                          className="w-full h-[100px] object-cover rounded-md"
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                          </div>
                          <div className="flex justify-end mt-2">
                            <Link
                              to={column.href}
                              className="text-sm font-medium text-[#F6BC6D] hover:underline flex items-center gap-1"
                            >
                              View All <ArrowRight size={16} />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Sidebar Panel */}
      {isOpen && <ToggleSidebar onClose={closeSidebar} />}
    </motion.nav>
  );
}
