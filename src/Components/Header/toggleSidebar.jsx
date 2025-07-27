import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function ToggleSidebar({ onClose }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

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
              label: "abc apartments",
              href: "/properties/apartments/apartments",
            },
            { label: "abc apartments", href: "/properties/apartments/villas" },
          ],
        },
        {
          label: "Villas",
          href: "/properties/villas",
          subMenu: [
            { label: "abc villas", href: "/properties/villas/apartments" },
            { label: "abc villas", href: "/properties/villas/villas" },
          ],
        },
        {
          label: "Villamates",
          href: "/properties/villamates",
          subMenu: [
            {
              label: "abc villamates",
              href: "/properties/villamates/apartments",
            },
            { label: "abc villamates", href: "/properties/villamates/villas" },
          ],
        },
      ],
    },
    { label: "About Us", href: "/about" },
    // { label: "Our Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 top-14 md:top-18 bg-[#0E1C41] rounded-2xl backdrop-blur-md z-50 overflow-hidden h-[90vh]"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed top-20 left-0 w-full h-full item-center overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={() => {
            const timeout = setTimeout(() => {
              setActiveMenu(null);
              setActiveSubMenu(null);
            }, 400);
            setSubmenuTimeout(timeout);
          }}
          onMouseEnter={() => {
            if (submenuTimeout) {
              clearTimeout(submenuTimeout);
              setSubmenuTimeout(null);
            }
          }}
        >
          <nav className="flex flex-col justify-start items-center gap-3 md:gap-6 text-lg h-full relative overflow-y-auto">
            {navItems.map((item, i) => {
              const isActive = activeMenu === i;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => {
                    if (submenuTimeout) clearTimeout(submenuTimeout);
                    setActiveMenu(i);
                  }}
                  className={`playfair-display-sc-regular relative block px-4 py-2 font-bold tracking-wide font-serif transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-[#f6bc6d]" : "text-zinc-400"
                  }`}
                >
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="text-3xl md:text-6xl text-[#f6bc6d]"
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
