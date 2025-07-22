// import React, { useState, useEffect, useRef } from "react";
// // import { blogPosts } from "../data/blogdata";
// import FeaturedCarousel from "../Components/FeaturedCarousel/FeaturedCarousel";
// import BlogCard from "../Components/BlogCard/BlogCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useBannerHeight } from "../Context/BannerHeightContext";
// import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
// import api from "../services/api";

// const BlogPage = () => {
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTag, setSelectedTag] = useState("All");
//   const [allTags, setAllTags] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   const bannerRef = useRef(null);
//   // const { setMenuColor } = useContext(MenuContext);
//   const { setBannerHeight } = useBannerHeight();

//   const [loading, setLoding] = useState(true);
//   const [blogPosts, setBlogPosts] = useState([]);

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       try {
//         const response = await api.get("/blogs/active");
//         if (response.data.success) {
//           setBlogPosts(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching blog posts:", error);
//       } finally {
//         setLoding(false);
//       }
//     };

//     fetchBlogPosts();
//   }, []);

//   console.log("blogPosts:", blogPosts);

//   useEffect(() => {
//     if (bannerRef.current) {
//       setBannerHeight(bannerRef.current.offsetHeight);
//     }
//   }, []);

//   // Calculate total pages
//   const totalPages = Math.ceil(blogPosts.length / postsPerPage);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogPosts?.slice(indexOfFirstPost, indexOfLastPost);

//   useEffect(() => {
//     let filtered = blogPosts;
//     if (selectedTag !== "All") {
//       filtered = filtered.filter((post) => post.tags.includes(selectedTag));
//     }
//     if (searchTerm) {
//       filtered = filtered.filter(
//         (post) =>
//           post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           post.tags.some((tag) =>
//             tag.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//       );
//     }
//     setFilteredPosts(filtered);
//     setAllTags([...new Set(blogPosts.flatMap((post) => post.tags))]);
//   }, [selectedTag, searchTerm]);

//   console.log("filteredPosts:", filteredPosts);

//   return (
//     <div className="min-h-screen w-full bg-gray-50 ">
//       <style jsx>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
//       `}</style>

//       <div
//         className="relative w-full mx-auto h-screen bg-cover bg-center text-white -mt-25 darkSection"
//         style={{
//           backgroundImage: 'url("/property/property.jpg")',
//           fontFamily: `'Wellsbrook Initials SG Regular'`,
//           height: "75vh",
//           padding: "0 50px",
//         }}
//         ref={bannerRef}
//       >
//         {/* Black overlay at 80% */}
//         <div className="absolute inset-0 bg-black/60 z-0"></div>

//         {/* Centered Text */}
//         <div className="absolute top-[450px] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
//           <p
//             className="font-bold heading-font tracking-widest uppercase leading-tight"
//             style={{
//               fontSize: "clamp(1.75rem, 4vw, 3.5rem)", // Responsive size
//             }}
//           >
//             Blog
//           </p>
//           <Breadcrumbs />
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Featured Carousel */}
//         <FeaturedCarousel posts={blogPosts} />

//         {/* Blog Posts Grid */}
//         <div className="flex items-center justify-center">
//           <h1 className="text-6xl font-bold  uppercase leading-20">
//             You May Also Like
//           </h1>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {currentPosts.map((post, index) => (
//             <BlogCard key={index} post={post} />
//           ))}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-12">
//             <div className="flex items-center space-x-2">
//               {/* Previous Button */}
//               <button
//                 onClick={() => setCurrentPage((prev) => prev - 1)}
//                 disabled={currentPage === 1}
//                 className={`p-2 rounded-full transition-colors duration-200 ${
//                   currentPage === 1
//                     ? "text-gray-400 cursor-not-allowed"
//                     : "text-gray-600 hover:text-gray-800"
//                 }`}
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>

//               {/* Page Numbers */}
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (page) => (
//                   <button
//                     key={page}
//                     onClick={() => setCurrentPage(page)}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
//                       page === currentPage
//                         ? "bg-[#f6bc6d] text-white"
//                         : "text-gray-600 hover:bg-gray-100"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 )
//               )}

//               {/* Next Button */}
//               <button
//                 onClick={() => setCurrentPage((prev) => prev + 1)}
//                 disabled={currentPage === totalPages}
//                 className={`p-2 rounded-full transition-colors duration-200 ${
//                   currentPage === totalPages
//                     ? "text-gray-400 cursor-not-allowed"
//                     : "text-gray-600 hover:text-gray-800"
//                 }`}
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* No Results */}
//         {blogPosts.length === 0 && (
//           <div className="text-center py-12 fade-in-up">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//               No posts found
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Try adjusting your search or filter criteria
//             </p>
//             <button
//               onClick={() => {
//                 setSelectedTag("All");
//                 setSearchTerm("");
//               }}
//               className="inline-flex items-center px-6 py-3 bg-[#f6bc6d] text-white rounded-lg hover:bg-[#f5b86b] transition duration-300"
//             >
//               Reset Filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;

import React, { useState, useEffect, useRef } from "react";
import FeaturedCarousel from "../Components/FeaturedCarousel/FeaturedCarousel";
import BlogCard from "../Components/BlogCard/BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBannerHeight } from "../Context/BannerHeightContext";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import api from "../services/api";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const bannerRef = useRef(null);
  const { setBannerHeight } = useBannerHeight();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await api.get("/blogs/active");
        if (response.data.success) {
          setBlogPosts(response.data.data);
        }
        console.log("Blog posts:", response.data);
        
      } catch (error) {
        
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

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
      <div
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Carousel */}
        <FeaturedCarousel posts={blogPosts} />

        {/* Blog Posts Grid */}
        <div className="flex items-center justify-center">
          <h1 className="text-2xl lg:text-6xl font-bold uppercase leading-20">
            You May Also Like
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {currentPosts.map((post, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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
  );
};

export default BlogPage;
