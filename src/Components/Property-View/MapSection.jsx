import React, { useState } from "react";
import { FaHome, FaTree, FaCar, FaCity } from "react-icons/fa";
import { MdLocationCity, MdCalendarToday } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { PiStorefrontLight } from "react-icons/pi";

const tabs = ["Map", "School", "Shop & Restaurant", "Commute location"];

export default function MapSection() {
  const [activeTab, setActiveTab] = useState("Map");

  return (
    <section className="bg-white rounded-xl mt-4">
      <h2 className="text-2xl font-semibold mb-6 tracking-[2px] sub-heading-font">
        Location Information
      </h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm border ${
              activeTab === tab
                ? "bg-[#232266] text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Map/Image Placeholder */}
      <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        {/* Replace with real map component */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724443.944068738!2d48.92924907723635!3d24.27141081559052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2z4KS44KSC4KSv4KWB4KSV4KWN4KSkIOCkheCksOCkrCDgpIfgpK7gpL_gpLDgpYfgpJ_gpY3gpLg!5e0!3m2!1sne!2snp!4v1751536894494!5m2!1sne!2snp" width={800} height={600} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>
    </section>
  );
}
