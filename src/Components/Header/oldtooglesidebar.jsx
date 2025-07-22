import { useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function ToggleSidebar({ onClose }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [navHovered, setNavHovered] = useState(false);

  const navItems = [
    ["/", "Home"],
    ["/properties", "Properties"],
    ["/about", "About Us"],
    ["/services", "Our Services"],
    ["/blog", "Blog"],
    ["/contact", "Contact"],
  ];

  const navContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 22,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-black/80 to-black/80 backdrop-blur-md z-50"
        onClick={onClose}
      >
        {/* Sidebar Content */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed top-10 left-0 w-full md:w-[600px] h-full rounded-r-3xl p-8 md:py-10 overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={navContainer}
            className="flex flex-col justify-center items-start gap-4 text-lg h-screen "
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => {
              setNavHovered(false);
              setHoveredIndex(null);
            }}
          >
            {navItems.map(([href, label], i) => {
              // Determine text color class based on hover states
              let textColorClass ="text-[#f6bc6d]";

              if (navHovered) {
                textColorClass =
                  i === hoveredIndex ? "text-[#f6bc6d]" : "text-zinc-400";
              }

              return (
                <motion.div
                  variants={navItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`playfair-display-sc-regular relative block px-4 py-2 rounded-full font-bold tracking-wide font-serif text-6xl uppercase  transition-colors duration-300  ${textColorClass}`}
                >
                  <Link
                    key={href}
                    to={href}
                    onClick={onClose}
                    className="text-2xl md:text-6xl lg:text-[63px] "
                  >
                    {label}
{/*
                    <span
                      className={`absolute -top-1 -right-1 rounded-full border w-6 h-6 flex items-center justify-center text-xs ${textColorClass}`}
                    >
                      {i + 1}
                    </span> */}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>
        </motion.div>

        {/* Centered Social Icons */}
        <div className="fixed bottom-10 left-0 right-0 md:bottom-110 flex items-center justify-center pointer-events-none z-50">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center gap-4 sm:gap-6 pointer-events-auto"
          >
            {[
              {
                icon: <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />,
                hoverColor: "hover:text-pink-500",
                href: "https://instagram.com/yourprofile",
              },
              {
                icon: <FaFacebookF className="w-6 h-6 sm:w-8 sm:h-8" />,
                hoverColor: "hover:text-blue-500",
                href: "https://facebook.com/yourprofile",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-gray-300 ${item.hoverColor} transition-all duration-300 cursor-pointer`}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
