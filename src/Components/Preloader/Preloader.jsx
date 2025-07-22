import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#242363] w-full h-full scrollbar-hidden">
      <img
        src="/logo/preloader.gif"
        alt="Loading..."
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default Preloader;
