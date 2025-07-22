import { Star, Settings, Hammer, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Star className="text-white" size={20} />,
    title: "Visionary Development",
    description:
      "We blend creativity with strategy to develop properties that inspire, elevate value, and stand the test of time.",
  },
  {
    icon: <Settings className="text-white" size={20} />,
    title: "Tailored Property Solutions",
    description:
      "Every client has unique needs—our custom real estate strategies ensure the perfect fit for lifestyle and investment goals.",
  },
  {
    icon: <Hammer className="text-white" size={20} />,
    title: "Sustainable Construction",
    description:
      "We prioritize eco-friendly materials and energy-efficient systems to create responsible, future-proof properties.",
  },
];

export default function PurposeSection() {
  return (
    <>
      <Link
        to="/"
        className="flex mt-6 mb-8 px-15 text-gray-700 hover:underline items-center">
        <ArrowLeft size={16} className="mr-2" />
        Back
      </Link>

      <div className="px-15 mx-7">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Our Purpose
        </h2>
      </div>
      <section className="w-full flex flex-col md:flex-row justify-between gap-6 items-center px-6 md:px-12 overflow-hidden">
        {/* Left Side */}
        <div className="w-full md:w-1/2 mx-10 flex flex-col gap-5">
          <div>
            {" "}
            <p className="text-gray-400 text-lg">
              At KingFisher Real Estate, our purpose is to redefine modern
              living through thoughtful design, tailored solutions, and
              sustainable development. We believe that every property should
              tell a story—one of vision, functionality, and lasting value. <br /><br /> Our
              team is committed to creating spaces that not only meet our
              clients’ expectations but inspire a deeper connection to the
              environments they live and work in. From innovative planning and
              bespoke architecture to eco-conscious materials and
              energy-efficient systems, Driven by trust, excellence, and a
              forward-thinking approach, KingFisher exists to craft real estate
              experiences that feel personal, purposeful, and built for the
              future.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/apartments/apartment1.jpg"
              alt="Modern building facade"
              className=" object-contain"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 mx-10 space-y-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start flex-col gap-4 p-6 border border-blue-100 rounded-2xl transition-shadow hover:shadow-md">
              <div className="bg-blue-900 rounded-full p-5">{item.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
