import React from "react";
import { FaSchool, FaShieldAlt, FaLeaf, FaCar } from "react-icons/fa";
import { MdVolumeUp } from "react-icons/md";
import Similar_Apartment from "./Similar-Apartment";

export default function PropertyExtras() {
  return (
    <div className="space-y-12 mt-6">
      {/* Similar Apartments */}
      {/* <Similar_Apartment /> */}

      {/* Promote Section */}
      <section className=" border border-dashed border-zinc-300 text-black p-8 rounded-xl flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8145/8145131.png"
          alt="Post listing"
          className="w-40 h-40"
        />
        <div className="space-y-3">
          <p className="bg-primary-color text-center text-sm px-3 py-1 rounded-full w-fit">
            Successfully Verified
          </p>
          <h3 className="text-2xl font-semibold sub-heading-font">
            Post listings, collect applications, and screen buyer or tenants
          </h3>
          <p className="text-zinc-500 paragraph-font ">
            Your property is in front of millions of buyers and tenants. Easily
            manage everything with our simple tools.
          </p>
          <button className="bg-primary-color text-center px-6 py-2 mt-2 cursor-pointer rounded-lg font-medium">
            Post a Listing
          </button>
        </div>
      </section>
    </div>
  );
}
