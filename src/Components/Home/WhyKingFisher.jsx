import React from "react";
import { Home, Wrench, Globe, Award, ShieldCheck, Leaf } from "lucide-react";
import HeadingWithHighlight from "../HeadingWithHighlight";

const features = [
  {
    label: "Homes Successfully Delivered",
    description:
      "Over 48,000 homes delivered globally with exceptional standards.",
    icon: Home,
  },
  {
    label: "Units Under Development",
    description: "50,000+ units currently under development worldwide.",
    icon: Wrench,
  },
  {
    label: "Global Industry Awards",
    description: "Recognized with 100+ awards for design and quality.",
    icon: Award,
  },
  {
    label: "Countries with Active Projects",
    description: "Active real estate ventures in over 7 countries.",
    icon: Globe,
  },
  {
    label: "Legacy of Trust",
    description: "Trusted by investors and families across generations.",
    icon: ShieldCheck,
  },
  {
    label: "Sustainable Development",
    description: "Forward-thinking, eco-conscious building technologies.",
    icon: Leaf,
  },
];

const Whykingfisher = () => {
  return (
    <section
      className=" text-white py-20 px-4 md:px-8 lg:px-16 relative"
      id="why-us"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative w-full mx-auto flex justify-center items-center ">
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-center text-[#F6BC6D]">
            <HeadingWithHighlight
              text="Why Choose Kingfisher?"
              highlights={["Kingfisher?"]}
            />
          </h2>
          {/* <img
            src="/Kingfisher.gif"
            alt="Real-state"
            srcset="Real state business in Dubai"
            className="backdrop-grayscale-0 h-32 opacity-80"
          /> */}
        </div>

        {/* Table Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-3 mt-20 border-0 border-zinc-500 rounded-xl overflow-hidden ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={"px-6 py-10 flex flex-col gap-4 bg-blue-950/90"}
              >
                {/* <div className="text-[#F5BC6D]">
                  <Icon className="w-6 h-6" />
                </div> */}
                <h3 className="text-4xl font-semibold text-[#F5BC6D]">
                  {feature.label}
                </h3>
                <p className="text-md text-zinc-100">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Whykingfisher;
