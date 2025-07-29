import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const cardDescriptionVariants = {
  initial: { opacity: 0, y: 40 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Simple fade-in-up animation for headers
const headerFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function PropertiesListingComp({ link, index, item }) {
  return (
    <Link to={`${link}`}>
      <motion.div
        style={{
          cursor: 'url("/HoverArrow.svg") 16 16, auto',
        }}
        className="relative group overflow-hidden h-[80vh] md:h-[60vh] lg:h-[80vh] rounded-sm "
        custom={index}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        {/* Image */}
        <div className="h-[70%] md:h-[70%] lg:h-[82%] overflow-hidden w-full relative rounded-sm ">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/40 to-transparent transition duration-500 group-hover:from-[#203772]/70 group-hover:via-[#203772]/40" />
        </div>

        {/* Title and Details below the image */}
        <div className="font-regular mt-4 md:mt-4">
          <h3
            className={`text-2xl mb-2 ${
              index === 2 ? "text-white" : "text-[#F6BC6D]"
            }`}
            style={index === 2 ? { color: "white" } : {}}
          >
            {item.title}
          </h3>
          <p className="text-md line-clamp-3">
            <span className="text-gray-300"> {item.location}</span>
            <br />
            <span>{item.price}</span>
          </p>
        </div>

        {/* Overlay */}

        {/* Tags */}
        {item?.tag?.length > 0 && (
          <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
            {item.tag.map((tag, i) => (
              <div
                key={i + tag}
                className="bg-[#003560] rounded-full flex items-center px-4 py-1.5 text-sm text-[#F6BC6D]"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </Link>
  );
}

export default PropertiesListingComp;
