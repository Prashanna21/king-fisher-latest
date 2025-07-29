"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { showErrorToast } from "../config/toastConfig";
import api from "../services/api";
import PurposeSection from "../Components/AboutSection/PurposeSection";
import HeadingWithHighlight from "../Components/HeadingWithHighlight";
import { TextReveal } from "../Components/magicui/text-reveal";
import OurTeamSection from "../Components/AboutSection/OurTeamSection";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function About() {
  const divRef = useRef(null); // for inView
  const stickyRef = useRef(null); // for sticky scroll section
  const isVisible = useInView(divRef, { once: false });

  // Scroll progress for sticky section
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className=" -mt-3">
      <div className="relative h-screen w-full bg-[#0E1C41] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className=" absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('gallery/newimg2.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1430] via-[#0A1430]/70 to-[#0A1430] transition-all duration-1000" />
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
              About Us <br />
              <span className="font-bold text-white">Company in Dubai</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        {/* Background texture */}
        <div
          className="absolute inset-0 bg-repeat bg-[length:auto] z-0"
          style={{ backgroundImage: "url('/bg-texture.png')" }}
        />

        {/* Foreground content */}
        <section className="relative z-10 py-20">
          <HeadingWithHighlight
            text="Know Who We Are"
            highlights={["We", "Are"]}
          />

          {/* Scroll-based Sticky Text Reveal Section */}
          <section className="relative z-10" ref={stickyRef}>
            <div className=" flex mx-auto items-center font-light justify-center px-4 text-3xl max-w-[800px] text-center pt-12 pb-32 ">
              At KingFisher Real Estate, our purpose is to redefine modern
              living through thoughtful design, tailored solutions, and
              sustainable development.
              <br></br> <br></br> We believe that every property should tell a
              story—one of vision, functionality, and lasting value. Our team is
              committed to creating spaces that not only meet our clients’
              expectations but inspire a deeper connection to the environments
              they live and work in. From innovative planning and bespoke
              architecture to eco-conscious materials and energy-efficient
              systems future.
            </div>
          </section>

          <OurTeamSection />
        </section>
      </div>
    </div>
  );
}
