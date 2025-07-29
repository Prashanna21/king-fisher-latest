import React, { useState, useEffect, useRef } from "react";
import BlogCard from "../Components/BlogCard/BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBannerHeight } from "../Context/BannerHeightContext";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import api from "../services/api";
import HeadingWithHighlight from "../Components/HeadingWithHighlight";
import { motion } from "framer-motion";

const BlogPage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  // Replace useState([]) with this for static data:
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Exploring the Future of Real Estate",
      description:
        "A deep dive into how technology is reshaping real estate investments and property management.",
      image: "/gallery/newimg1.jpg",
      tags: ["Real Estate", "Technology"],
      updatedAt: "2025-06-10T10:00:00Z",
    },
    {
      id: 2,
      title: "Top 10 Property Investment Tips for 2025",
      description:
        "These key strategies can help you maximize your ROI in the property market.",
      image: "/gallery/newimg2.jpg",
      tags: ["Investment", "Tips"],
      updatedAt: "2025-06-20T14:30:00Z",
    },
    {
      id: 3,
      title: "How to Choose the Right Neighborhood",
      description:
        "Location matters more than ever. Here’s how to find the best area for your investment.",
      image: "/gallery/newimg3.jpg",
      tags: ["Real Estate", "Advice"],
      updatedAt: "2025-05-15T08:00:00Z",
    },
    {
      id: 4,
      title: "The Rise of Smart Homes",
      description:
        "Smart homes aren’t just a trend — they're the future. Discover the top features to look for.",
      image: "/gallery/img1.jpg",
      tags: ["Smart Home", "Technology"],
      updatedAt: "2025-04-25T16:45:00Z",
    },
    {
      id: 5,
      title: "Navigating Property Taxes in 2025",
      description:
        "Learn how to stay ahead of tax regulations as they evolve with the housing market.",
      image: "/gallery/img2.jpg",
      tags: ["Finance", "Tax"],
      updatedAt: "2025-03-10T09:00:00Z",
    },
    {
      id: 6,
      title: "Sustainable Building: The Next Big Shift",
      description:
        "Eco-friendly materials and designs are taking over. Here's how to build smart and green.",
      image: "/gallery/img3.jpg",
      tags: ["Sustainability", "Green Building"],
      updatedAt: "2025-02-18T11:20:00Z",
    },
    {
      id: 7,
      title: "The Role of AI in Property Management",
      description:
        "From chatbots to predictive maintenance, AI is transforming property management.",
      image: "/gallery/img4.jpg",
      tags: ["AI", "Management"],
      updatedAt: "2025-01-05T15:10:00Z",
    },
    {
      id: 8,
      title: "Interior Design Trends for Luxury Homes",
      description:
        "Opulence meets functionality in these hot interior design trends for 2025.",
      image: "/gallery/img5.jpg",
      tags: ["Design", "Luxury"],
      updatedAt: "2024-12-22T13:30:00Z",
    },
  ]);

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const bannerRef = useRef(null);
  const { setBannerHeight } = useBannerHeight();

  // useEffect(() => {
  //   const fetchBlogPosts = async () => {
  //     try {
  //       const response = await api.get("/blogs/active");
  //       if (response.data.success) {
  //         setBlogPosts(response.data.data);
  //       }
  //       console.log("Blog posts:", response.data);

  //     } catch (error) {

  //       console.error("Error fetching blog posts:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogPosts();
  // }, []);

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, []);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen w-full">
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Banner */}
      {/* <div
        className="relative w-full mx-auto h-screen bg-cover bg-center text-white -mt-25 darkSection"
        style={{
          backgroundImage: 'url("/property/property.jpg")',
          height: "75vh",
          padding: "0 50px",
        }}
        ref={bannerRef}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute top-[450px] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
          <p
            className="font-bold heading-font tracking-widest uppercase leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
            }}
          >
            Blog
          </p>
          <Breadcrumbs />
        </div>
      </div> */}

      <div className="relative h-screen w-full bg-[#0E1C41] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('gallery/newimg3.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1430] via-[#0A1430]/80 to-[#0A1430] transition-all duration-1000" />
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
              Blogs
              <br />
              <span className="font-bold text-white">You May Like</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="w-full mx-auto px-4 md:px-4 py-12 min-h-screen relative ">
        {/* texture */}
        <div
          className="absolute inset-0 bg-repeat bg-[length:auto] z-0"
          style={{ backgroundImage: "url('/bg-texture.png')" }}
        />

        <div className="z-10 relative">
          {/* Blog Posts Grid */}
          <div className="flex items-center justify-center">
            <HeadingWithHighlight
              text="You May Also Like"
              highlights={["Like"]}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3   gap-8 mt-12">
            {currentPosts.map((post, index) => (
              <div key={index} className="">
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 ">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-white hover:text-gray-800"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        page === currentPage
                          ? "bg-[#f6bc6d] text-white"
                          : "text-[#f6bc6d] hover:bg-white"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* No Results */}
          {!loading && blogPosts.length === 0 && (
            <div className="text-center py-12 fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No posts found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn&apos;t find any blog posts at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
