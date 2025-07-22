import { useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
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
    { label: "Our Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black backdrop-blur-md z-50 overflow-hidden h-screen"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed top-20 left-0 w-full md:w-[600px] h-full p-8 md:py-10 overflow-hidden flex flex-col"
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
          <nav className="flex flex-col justify-start items-start gap-4 text-lg h-full relative overflow-y-auto">
            {navItems.map((item, i) => {
              const isActive = activeMenu === i;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => {
                    if (submenuTimeout) clearTimeout(submenuTimeout);
                    setActiveMenu(i);
                  }}
                  className={`playfair-display-sc-regular relative block px-4 py-2 font-bold tracking-wide font-serif text-6xl transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-[#f6bc6d]" : "text-zinc-400"
                  }`}
                >
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="text-2xl md:text-6xl lg:text-[63px]"
                  >
                    {item.label}
                  </Link>

                  {/* Submenu + Child Submenu Container */}
                  <AnimatePresence>
                    {isActive && item.subMenu && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-28 left-[600px] flex h-full z-50 border-l  border-zinc-900"
                        onMouseEnter={() => {
                          if (submenuTimeout) clearTimeout(submenuTimeout);
                          setActiveMenu(i);
                        }}
                        onMouseLeave={() => {
                          const timeout = setTimeout(() => {
                            setActiveSubMenu(null);
                            setActiveMenu(null);
                          }, 400);
                          setSubmenuTimeout(timeout);
                        }}
                      >
                        {/* Left Submenu */}
                        <div className="w-[350px] bg-opacity-90 p-6 text-white flex flex-col gap-4 font-semibold text-2xl overflow-y-auto border-l border-[#f6bc6d]  ">
                          {item.subMenu.map((subItem, j) => {
                            const isSubActive = activeSubMenu === j;
                            return (
                              <div
                                key={subItem.label}
                                onMouseEnter={() => setActiveSubMenu(j)}
                                className={`relative cursor-pointer py-3 px-5 transition-colors duration-300 gap-5 flex ${
                                  isSubActive
                                    ? "text-[#f6bc6d]"
                                    : "hover:bg-[#f6bc6d]/30"
                                }`}
                              >
                                <Link
                                  to={subItem.href}
                                  onClick={onClose}
                                  className="block"
                                >
                                  {subItem.label}
                                </Link>
                              </div>
                            );
                          })}
                        </div>

                        {/* Right Child Submenu */}
                        {item.subMenu[activeSubMenu]?.subMenu && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-72 bg-opacity-95 p-4 mt-4 gap-4 text-xl font-normal overflow-y-auto border-l border-[#f6bc6d] scrollbar-hide"
                          >
                            <h3 className="text-2xl font-semibold mb-4">
                              {item.subMenu[activeSubMenu]?.label}
                            </h3>
                            {item.subMenu[activeSubMenu]?.subMenu.map(
                              (child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  onClick={onClose}
                                  className="block px-3 py-2 hover:text-[#f6bc6d] text-white transition-colors duration-200"
                                >
                                  {child.label}
                                </Link>
                              )
                            )}
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
