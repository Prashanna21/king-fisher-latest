import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, Calendar, Clock, Loader, NotebookPen } from "lucide-react";
import "swiper/css";
import { useBannerHeight } from "../../Context/BannerHeightContext";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import BlogCard from "../BlogCard/BlogCard";
import { formatTimeAgo } from "../../utils/formatTimeAgo";
import NotFound from "../../pages/NotFound";

export default function BlogViewer() {
  const params = useParams();
  const bannerRef = useRef(null);
  const { setBannerHeight } = useBannerHeight();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [recommendedBlogs, setRecommendedBlogs] = useState([]);

  const getRandomItems = (arr, n) => {
    const result = [];
    const taken = new Set();
    while (result.length < n && result.length < arr.length) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      if (!taken.has(randomIndex)) {
        taken.add(randomIndex);
        result.push(arr[randomIndex]);
      }
    }
    return result;
  };

  useEffect(() => {
    const fetchRecommendedBlogs = async () => {
      try {
        setLoading(true);
        const response = await api.get("/blogs/active"); // Adjust API endpoint as needed

        if (response.data.success && Array.isArray(response.data.data)) {
          const activeBlogs = response.data.data.filter(
            (blog) => blog.isActive
          );

          // Pick 3 random active blogs
          const randomBlogs = getRandomItems(activeBlogs, 3);
          setRecommendedBlogs(randomBlogs);
        }
      } catch (error) {
        console.error("Failed to fetch recommended blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedBlogs();
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/blogs/${params.id}`);
        if (response.data.success) {
          const blogData = response.data.data;

          // Defensive fallback: ensure arrays exist
          blogData.sections = blogData.sections || [];
          blogData.tags = blogData.tags || [];

          blogData.sections.forEach((section) => {
            section.paragraphs = section.paragraphs || [];
            section.bullets = section.bullets || [];
            section.images = section.images || [];
          });

          setBlog(blogData);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  console.log("blog:", blog);

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, [bannerRef, setBannerHeight]);

  if (loading) return <Loader />;
  if (!blog) return <NotFound />;

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div
        className="relative w-full mx-auto h-screen bg-cover bg-center heading-font tracking-widest text-white -mt-25"
        style={{
          backgroundImage: 'url("/property/property.jpg")',
          height: "75vh",
          padding: "0 50px",
        }}
        ref={bannerRef}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute top-[450px] left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
          <p className="text-6xl font-bold tracking-widest uppercase">
            Blog Page
          </p>
          <span>
            {" "}
            <Breadcrumbs title="view" />
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-white hover:text-white mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        {/* Article */}

        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 font-serif line">
              {blog.title}
            </h1>

            <div className="flex items-center text-sm text-white">
              <span className="font-medium text-white mr-2 flex items-center gap-2">
                By {blog.author || "Unknown"}
              </span>
              <span className="mr-2"> </span>
              <span className="mr-2 flex items-center gap-1">
                {" "}
                <Calendar size={16} />
                {new Date(blog.updatedAt).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                {" "}
                <Clock size={16} />
                {formatTimeAgo(blog.updatedAt)}
              </span>
            </div>
          </header>

          {/* Blog Image */}
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full rounded mb-8"
            />
          )}

          {/* Render description as HTML */}
          <div
            className="prose prose-lg max-w-none text-white"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="border-t border-gray-200 pt-8 mt-12">
              <h3 className="text-lg font-semibold mb-4 text-white">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
        <div className="border-t border-gray-200 pt-12 mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">
            Recommended for you
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {recommendedBlogs.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
