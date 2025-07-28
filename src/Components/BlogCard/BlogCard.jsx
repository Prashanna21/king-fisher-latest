import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  console.log(post);

  if (!post) return null;

  const handleReadArticle = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <Link to={`/blog/${post.id}`}>
      <article
        className="group cursor-pointer h-full"
        style={{
          cursor: 'url("/HoverArrow.svg") 16 16, auto',
        }}
        onClick={handleReadArticle}
        role="button"
      >
        <div className="flex flex-col h-full  rounded-sm overflow-hidden transition-all duration-500 border-[#F5BC6D] bg-transparent  ">
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
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
                    className="px-3 py-1 bg-g[#f6bc6d] text-[#F6BC6D] bg-[#003560] text-xs font-medium rounded-full border-1"
                  >
                    {tag || "Tag"}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#F6BC6D] mb-3 leading-tight transition-colors duration-200 line-clamp-1">
                {post.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-300 text-sm raleway-regular leading-relaxed line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.description }}
              ></p>
            </div>

            {/* Footer */}
            <div className="mt-2 ml-2  flex items-center justify-between mb-2">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>
                  {new Date(post.updatedAt).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
