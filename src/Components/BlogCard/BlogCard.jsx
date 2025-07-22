import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  if (!post) return null;

  const handleReadArticle = () => {
    navigate(`/blog/${post._id}`);
  };

  return (
    <article
      className="group cursor-pointer h-full"
      onClick={handleReadArticle}
      role="button"
    >
      <div className="flex flex-col h-full  rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50 border border-[#F5BC6D] bg-[#15003f]">
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={post.image}
            alt={post.title || "Blog Image"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

          {/* Floating Read Time */}
          {post.readTime && (
            <div className="absolute top-4 right-4  backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 justify-between p-2">
          <div className="p-2">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-2">
              {(post.tags || []).slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-g[#f6bc6d] text-white text-xs font-medium rounded-full border border-gray-200"
                >
                  {tag || "Tag"}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3 leading-tight group-hover:text-white transition-colors duration-200 line-clamp-1">
              {post.title}
            </h3>

            {/* Description */}
            <p
              className="text-gray-600 text-sm raleway-regular leading-relaxed line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.description }}
            ></p>
          </div>

          {/* Footer */}
          <div className="mt-2 mx-5 flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {new Date(post.updatedAt).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            <Link
              to={`/blog/${post._id}`}
              className="flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-gray-600 transition-colors duration-200"
            >
              <span>Read</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
