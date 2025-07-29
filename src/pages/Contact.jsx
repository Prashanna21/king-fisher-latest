import ContactFormSection from "../Components/Contact/formSection";
import ContactHeroSection from "../Components/Contact/heroSection";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const ContactForm = () => {
  return (
    <div className=" min-h-screen text-white font-sans text-lg mb-10">
      <div className="relative h-screen w-full bg-[#0E1C41] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('gallery/newimg4.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1430] via-[#0A1430]/60 to-[#0A1430] transition-all duration-1000" />
        </div>
        {/* Bottom Blend Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#0E1C41] to-transparent z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center mt-20">
          {/* Heading */}
          <motion.div
            className="w-full max-w-screen-xl"
            initial="initial"
            animate="animate"
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-7xl font-normal text-[#F5BC6D] leading-tight mx-auto md:mx-0">
              Contact Us
              <br />
              <span className="font-bold text-white">By The Form Provided</span>
            </h1>
          </motion.div>
        </div>
      </div>
      <ContactFormSection />
    </div>
  );
};

export default ContactForm;
