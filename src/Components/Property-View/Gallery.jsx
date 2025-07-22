import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Overview from "./Overview.jsx";
import PropertyExtras from "./Extra.jsx";
import { MoveLeft } from "lucide-react";
import { useInView } from "framer-motion";
import { MenuContext } from "../../state/MenuContext.jsx";

const listingData = {
  title: "Minimal looking apartment, London, UK",
  address: "1901 Hardridge Cir, Shiloh, Hawaii 81063",
  price: "$1,13,200",
  downPayment: "$20,216",
  beds: 2,
  baths: 2,
  area: "1420 sqft",
  overview: `The undercroft comprises a self-contained unit of varying size. The units have
    secured access, from a central private access road at lower ground level. Access
    continues through to a central pedestrianised area, within which the IMAX
    Multiplex Cinema is situated. The accommodation is unheated.`,
  mainImage: "/gallery/img1.jpg",
  thumbnails: ["/gallery/img1.jpg", "/gallery/img2.jpg", "/gallery/img3.jpg"],
  tour: {
    defaultDate: "2023-07-24",
    defaultTime: "12:30",
  },
};

export default function Property_Gallary({ data = listingData }) {
  const [mainImage, setMainImage] = useState(data.mainImage);
  // const divRef = useRef(null);
  // const { setMenuColor } = useContext(MenuContext);

  // const isVisible = useInView(divRef, { once: false });

  // useEffect(() => {
  //   setMenuColor("dark");
  // }, [isVisible]);

  return (
    <section className="lightSection min-h-screen mt-20 p-4 md:p-6 font-sans ">
      <div className="max-w-6xl mx-auto bg-white rounded-xl p-4 md:p-8">
        <Link
          to={"/properties"}
          className="text-lg flex justify-start items-center cursor-pointer text-blue-600  hover:underline"
        >
          <MoveLeft size={16} /> Back
        </Link>
        <h1 className="text-4xl font-semibold heading-font mt-2">
          {data.title}
        </h1>
        <p className="text-lg text-gray-500 paragraph-font ">{data.address}</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 w-full mt-4 gap-1">
          {/* Main Image */}
          <div className="lg:col-span-3">
            <img
              src={mainImage}
              alt="House"
              className="rounded-xl w-full h-64 sm:h-80 md:h-96 object-cover transition-all duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 max-w-11/18 mx-auto my-auto">
            {data.thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(thumb)}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  mainImage === thumb ? "border-blue-500" : "border-transparent"
                }`}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-40 sm:h-24 object-cover hover:opacity-90"
                />
              </button>
            ))}
          </div>
        </div>
        <Overview data={data} />
        <PropertyExtras />
      </div>
    </section>
  );
}
