import { motion } from "framer-motion";
import HeadingWithHighlight from "../HeadingWithHighlight";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const imageData = [
  {
    _id: 1,
    image: "/gallery/newimg1.jpg",
    title: "Safa Gate",
    location: "Sheikh Zayed Road, Dubai",
    price: "From AED 2,258,000",
    tag: ["Sea side", "Luxury", "For Living"],
  },
  {
    _id: 2,
    image: "/gallery/newimg2.jpg",
    location: "DAMAC Riverside Community, Dubai",
    price: "From AED 1,503,000",
    title: "DAMAC Riverside Views",
    tag: ["For resale", "For Couple", "For Living"],
  },
  {
    _id: 3,
    image: "/gallery/newimg3.jpg",
    location: "Dubai Harbour, Dubai",
    price: "From AED 7,284,000",
    tag: ["For resale", "For Couple", "For Living"],
    title: "DAMAC Bay 2 by Cavalli",
  },
  {
    _id: 4,
    image: "/gallery/img2.jpg",
    location: "Dubai Islands, Dubai",
    price: "from 1.9M AED",
    tag: ["Sea side", "Luxury", "For Living"],
    title: "Sold Listings",
  },
  {
    _id: 5,
    image: "/gallery/img1.jpg",
    location: "Dubai Islands, Dubai",
    price: "from 1.9M AED",
    tag: ["Sea side", "Luxury", "For Living"],
    title: "Exclusive Listings",
  },
  {
    _id: 6,
    tag: ["Sea side", "Luxury", "For Living"],
    image: "/gallery/img2.jpg",
    location: "Dubai Islands, Dubai",
    price: "from 1.9M AED",
    title: "Sold Listings",
  },
];

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

// const bottomBarVariants = {
//   initial: { opacity: 0, y: 40 },
//   hover: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

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

const PropertySection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full px-4 md:px-4 py-12 min-h-screen">
      {/* <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-center text-[#F6BC6D] heading-font">
        <span className="text-primary">
          Best Properties{""}
          <span className="text-white">
            Just <br /> Designed
          </span>{" "}
          for You
        </span>
      </h2> */}
      <div
        className="absolute inset-0 bg-repeat bg-[length:auto] z-0"
        style={{ backgroundImage: "url('/bg-texture.png')" }}
      ></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="relative z-10"
      >
        <HeadingWithHighlight
          text="Best Properties Just"
          highlights={["Just"]}
        />
        <HeadingWithHighlight
          text="Designed for You"
          highlights={["Designed"]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-4 mt-10">
          {imageData.map((item, index) => (
            <motion.div
              key={item.id + item.title}
              style={{
                cursor: 'url("/HoverArrow.svg") 16 16, auto',
              }}
              className="group cursor-pointer h-full"
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              {/* Card Container */}
              <div className="flex flex-col h-full rounded-sm overflow-hidden transition-all duration-500 border-[#F6BC6D] bg-transparent">
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 justify-between p-2">
                  <div className="p-2">
                    {/* Tags */}
                    {item?.tag?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.tag.map((tag, i) => (
                          <span
                            key={i + tag}
                            className="px-3 py-1 bg-[#003560] text-[#F6BC6D] text-xs font-medium rounded-full border-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h3
                      className={`text-xl font-semibold mb-3 leading-tight transition-colors duration-200 line-clamp-1 text-[#F6BC6D]`}
                    >
                      {item.title}
                    </h3>

                    {/* Location & Price */}
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      <span className="block">{item.location}</span>
                      <span className="text-white">{item.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center items-center text-primary mt-6 mb-8">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          {/* <div className="text-xl">View All Properties</div>

          <div className=" rounded-full h-10 w-10 flex items-center justify-center bg-[#F6BC6D]">
            <ArrowRight
              className={`transition-transform z-20 rotate-320 duration-300 text-[#1b1b3a]`}
              size={20}
            />
          </div> */}

          <Link to="properties/apartments" className="flex gap-3 items-center">
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
                View More
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
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
