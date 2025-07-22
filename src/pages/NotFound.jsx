// src/pages/NotFound.tsx

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Tried to access:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative w-full h-screen bg-text-yellow-300">
      {/* Background Image */}
      <img
        src="/404.jpg"
        alt="404 Not Found"
        className="absolute inset-0 w-full h-full object-contain "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 text-yellow-300 bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-yellow-300 px-6">
        <Link
          to="/"
          className="absolute bottom-10 px-6 py-3 bg-[#F5BC6D] text-white font-semibold rounded-lg shadow hover:bg-yellow-400 transition flex flex-row items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2zM10 7H8v2h2zm0 0h2V5h-2zm0 10H8v-2h2zm0 0h2v2h-2z"
            />
          </svg>
          <span>Go Back Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
