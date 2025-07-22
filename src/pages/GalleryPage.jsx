import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { MenuContext } from "../state/MenuContext";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import api from "../services/api";
import { showErrorToast } from "../config/toastConfig";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalImgIndex, setModalImgIndex] = useState(null);
  const modalRef = useRef(null);
  const galleryRef = useRef(null);

  // Fetch gallery images from API
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        const response = await api.get('/home-galleries/active');
        if (response.data.success) {
          setGalleryImages(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        showErrorToast('Failed to load gallery images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // Disable scroll on modal open
  useEffect(() => {
    document.body.style.overflow = modalImgIndex !== null ? "hidden" : "auto";
  }, [modalImgIndex]);

  // Scroll animation
  useEffect(() => {
    if (loading) return;
    
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gallery-img").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, galleryRef);
    return () => ctx.revert();
  }, [galleryImages]);

  // Modal animation
  useEffect(() => {
    if (modalImgIndex !== null && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [modalImgIndex]);

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalImgIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handlePrev = () =>
    setModalImgIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );

  const handleNext = () =>
    setModalImgIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Gallery
          </h1>
          <Breadcrumbs />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image._id}
              className="gallery-img overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 group"
              onClick={() => setModalImgIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.imageUrl}
                  alt={image.title || `Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                  }}
                />
                {(image.title || image.description) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      {image.title && <h3 className="font-bold text-lg">{image.title}</h3>}
                      {image.description && <p className="text-sm opacity-90">{image.description}</p>}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalImgIndex !== null && galleryImages[modalImgIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setModalImgIndex(null)}
            >
              <div
                ref={modalRef}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setModalImgIndex(null)}
                  className="absolute -top-16 right-0 text-white hover:text-gray-300 z-10 p-2"
                  aria-label="Close modal"
                >
                  <X size={32} />
                </button>

                <div className="relative">
                  <motion.img
                    src={galleryImages[modalImgIndex].imageUrl}
                    alt={galleryImages[modalImgIndex].title || `Gallery image ${modalImgIndex + 1}`}
                    className="max-h-[80vh] w-auto mx-auto rounded-lg"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
                    }}
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImgIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
                    }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white text-4xl bg-black/50 hover:bg-black/70 p-2 rounded-full"
                    aria-label="Previous image"
                  >
                    ❮
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImgIndex(prev => (prev + 1) % galleryImages.length);
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white text-4xl bg-black/50 hover:bg-black/70 p-2 rounded-full"
                    aria-label="Next image"
                  >
                    ❯
                  </button>
                </div>

                {(galleryImages[modalImgIndex].title || galleryImages[modalImgIndex].description) && (
                  <div className="mt-4 text-center text-white">
                    {galleryImages[modalImgIndex].title && (
                      <h3 className="text-xl font-semibold">{galleryImages[modalImgIndex].title}</h3>
                    )}
                    {galleryImages[modalImgIndex].description && (
                      <p className="text-gray-300">{galleryImages[modalImgIndex].description}</p>
                    )}
                    <div className="mt-2 text-sm text-gray-400">
                      {modalImgIndex + 1} / {galleryImages.length}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
