import React from "react";
import {
  Home,
  Building2,
  Calendar,
  Landmark,
  TreePalm,
  Car,
} from "lucide-react";

const highlights = [
  { icon: Home, label: "Townhomes" },
  { icon: Building2, label: "No HOA Fee" },
  { icon: Calendar, label: "Built in 2002" },
  { icon: Landmark, label: "City View" },
  { icon: TreePalm, label: "Garden Available" },
  { icon: Car, label: "Parking Available" },
];

const Highlight = () => {
  return (
    <section className="bg-white py-8 pr-6 rounded-xl  mt-8">
      <h2 className="text-2xl font-semibold tracking-[2px] mb-6 sub-heading-font">
        Property Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-4 p-6 border border-gray-400 rounded-lg  transition duration-200"
            >
              <div className="p-2 bg-white rounded-full ">
                <Icon className="w-6 h-6 primary-color" />
              </div>
              <span className="text-gray-700 font-medium text-base">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Highlight;
