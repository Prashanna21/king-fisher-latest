import { motion } from "framer-motion";

const imageData = [
  {
    id: 1,
    image: "/gallery/img1.jpg",
    title: "Exclusive Listings",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: 2,
    image: "/gallery/img2.jpg",
    title: "Sold Listings",
    tag: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    id: 3,
    image: "/gallery/img1.jpg",
    title: "Exclusive Listings",
  },
  {
    id: 4,
    image: "/gallery/img2.jpg",
    title: "Sold Listings",
  },
  {
    id: 5,
    image: "/gallery/img1.jpg",
    title: "Exclusive Listings",
  },
  {
    id: 6,
    image: "/gallery/img2.jpg",
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

const bottomBarVariants = {
  initial: { opacity: 0, y: 40 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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

const PropertySection = () => {
  return (
    <motion.section
      className="w-full px-4 md:px-20 py-12 min-h-screen mb-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}>
      <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-center text-[#F6BC6D] heading-font">
        <span className="text-primary">Property</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-10">
        {imageData.map((item, index) => (
          <motion.div
            key={item.id + item.title}
            className="relative group overflow-hidden h-[55vh] sm:h-[65vh]"
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}>
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition duration-500 group-hover:from-[#203772]/70 group-hover:via-[#203772]/40" />

            {/* Tags */}
            {item?.tag?.length > 0 && (
              <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
                {item.tag.map((tag, i) => (
                  <div
                    key={i + tag}
                    className="bg-[#003560] rounded-xl px-3 py-1.5 text-sm text-[#F6BC6D]">
                    {tag}
                  </div>
                ))}
              </div>
            )}

            {/* Center Button */}
            <div className="absolute inset-0 z-10 hidden group-hover:flex flex-col items-center justify-center text-white text-center px-4 transition duration-300">
              <motion.button
                className="border border-[#F6BC6D] rounded-md px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#F6BC6D] transition duration-300"
                whileHover="hover"
                variants={buttonVariants}>
                View All
              </motion.button>
            </div>
            {/* Bottom Bar */}
            <motion.div
              className="absolute hidden group-hover:flex  bottom-0 z-50 p-3 bg-white/20 w-full text-white"
              initial="initial"
              variants={cardDescriptionVariants}>
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PropertySection;
