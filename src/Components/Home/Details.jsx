
import {
  CircleCheckBig,
  CreditCard,
  Download,
  MapPin,
  Tag,
} from "lucide-react";

const data = [
  {
    label: "Location",
    value: "Dubai Islands",
    icon: <MapPin size={16} />,
  },
  {
    label: "Payment Plan",
    value: "60/40",
    icon: <CreditCard size={16} />,
  },
  {
    label: "Starting at",
    value: "2.1 M AED",
    icon: <Tag size={16} />,
  },
  {
    label: "Delivery Date",
    value: "Q1 2027",
    icon: <CircleCheckBig size={16} />,
  },
];

const Details = () => {
  return (
    <section 
      className="text-[#1e1e1e]  w-ful"
    >
      {/* Top Info Section */}
      <div className="w-full px-6 py-20 grid grid-cols-2 md:grid-cols-4 text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${
              index !== data.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <p className="text-xs mb-1 uppercase tracking-wider flex justify-center gap-2 paragraph-font heading-font">
              {item.icon}
              {item.label}
            </p>
            <p className="text-lg sm:text-3xl md:text-4xl lg:text-4xl text-zinc-500 tracking-wider paragraph-font">
              {item.value}
            </p>
          </div>
        ))}
      </div>
     
    </section>
  );
};

export default Details
