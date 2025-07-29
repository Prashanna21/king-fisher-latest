// LayoutWrapper.tsx
import React from "react";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Global Background Gradient Overlay */}
      <div className="absolute inset-0 -z-10 w-full h-full bg-[#0E1C41]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1430] via-[hsl(224,56%,30%)] to-[#0A1430] opacity-90" />
      </div>

      {/* Page Content */}
      {children}
    </div>
  );
};

export default LayoutWrapper;
