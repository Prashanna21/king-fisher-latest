import { Contact, Download, MoveUpRight } from "lucide-react";
import React, { useState } from "react";

export const floorPlans = [
  {
    SN: 1,
    label: "Queen Bedroom",
    unit: "94",
    sqrft: "785 sq ft — 1022 sq ft",
    image: "/new/bed1.jpg",
  },
  {
    SN: 2,
    label: "King Bedroom",
    unit: "76",
    sqrft: "1102 sq ft — 1375 sq ft",
    image: "/new/bed2.jpg",
  },
  {
    SN: 3,
    label: "Double Bedroom",
    unit: "38",
    sqrft: "1450 sq ft — 1620 sq ft",
    image: "/new/bed3.jpg",
  },
  {
    SN: 4,
    label: "Bedroom Duplex",
    unit: "12",
    sqrft: "1810 sq ft — 2000 sq ft",
    image: "/new/bed4.jpg",
  },
];

const FloorPlanSelector = () => {
  const [selected, setSelected] = useState(floorPlans[0]);

  return (
    <section className="w-full px-6 md:px-20 relative" id="floor-plan">
      {/* Full background texture */}
      <div
        className="absolute inset-0 bg-repeat bg-[length:auto] z-0"
        style={{ backgroundImage: "url('/bg-texture.png')" }}
      ></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto pt-8 pb-12 md:pb-16">
          <div className="text-center">
            <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-thin text-gray-800 tracking-widest mb-4">
              FLOOR PLANS
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full mx-auto pb-12 md:pb-20">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
            {/* Plan Selector */}
            <div className="w-full lg:w-1/3 space-y-4">
              {floorPlans.map((plan, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() => setSelected(plan)}
                    className={`w-full text-left p-4 sm:p-4 mt-1 rounded-xl sm:rounded-2xl transition-all duration-300  ${
                      selected.label === plan.label
                        ? "bg-[#ff9500] backdrop-blur-sm text-white border-[#00014b] shadow-lg"
                        : "bg-[#0E1C41] text-[#F6BC6D] hover:border-[#29344d] hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          selected.label === plan.label
                            ? "bg-white text-amber-600"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {plan.SN}
                      </div>
                      <span className="text-lg sm:text-xl font-light tracking-wide">
                        {plan.label.toUpperCase()}
                      </span>
                    </div>
                    {/* Details */}
                    <div
                      className={`text-xs sm:text-sm space-y-1 sm:space-y-2 transition-all duration-300 ${
                        selected.label === plan.label
                          ? "text-amber-100"
                          : "text-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Units Available</span>
                        <span className="text-base sm:text-lg font-light">
                          {plan.unit}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Size Range</span>
                        <span className="text-xs sm:text-sm">{plan.sqrft}</span>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Image Preview */}
            <div className="w-full lg:w-2/3">
              <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={selected.image}
                  alt={selected.label}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover transition-all duration-500"
                />

                {/* Floating info box */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md">
                  <h3 className="text-lg sm:text-xl font-light text-gray-800 mb-1 tracking-wide">
                    {selected.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {selected.sqrft}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSelector;
