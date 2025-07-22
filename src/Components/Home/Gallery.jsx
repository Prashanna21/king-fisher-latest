import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { showErrorToast } from "../../config/toastConfig";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/home-galleries/active");
        if (response.data.success) {
          let items = response.data.data.slice(0, 5);
          if (items.length > 0) {
            items = items.map((item, index) => ({
              ...item,
              img: item.imageUrl,
              span: index === 0 ? 2 : 1,
            }));
          }
          setGalleryData(items);
        }
      } catch (err) {
        console.error("Error fetching gallery data:", err);
        setError("Failed to load gallery. Please try again later.");
        showErrorToast("Failed to load gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Fallback data in case of API failure
  const fallbackData = [
    { title: "MARINA-SIDE BLISS", img: "/gallery/img1.jpg", span: 2 },
    { title: "RESORT-LIKE COMFORT", img: "/gallery/img2.jpg", span: 1 },
    { title: "URBAN VITALITY", img: "/gallery/img3.jpg", span: 1 },
    { title: "SUNSET VIEWS", img: "/gallery/img4.jpg", span: 1 },
    { title: "ISLAND LIFE", img: "/gallery/img5.jpg", span: 1 },
  ];

  const displayData = galleryData.length > 0 ? galleryData : fallbackData;

  const text = [
    {
      title: "Services That Elevate Living",
      description:
        "The apartment holds a kind of quiet that doesn't ask questions, a silence so full of memory it feels like you're borrowing someone else's beautifully unfinished story.",
    },
  ];

  return (
    <section id="services">
      <div className="flex justify-center items-center mt-25 flex-col lightSection">
        {text.map((item, index) => {
          return (
            <div key={index} className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl tracking-widest uppercase mb-6 heading-font">
                {item.title}
              </h1>

              <p className="text-lg text-gray-500 max-w-5xl mx-auto raleway-regular text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
        </div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">
          <p>{error}</p>
          <p className="text-sm text-gray-500 mt-2">Showing fallback images</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 gap-4 mx-4 md:mx-30 mb-20">
          {displayData.map((item, index) => (
            <div
              key={item._id || index}
              className={`relative text-white h-80 bg-cover bg-center group overflow-hidden  rounded-2xl ${
                item.span === 2
                  ? "md:col-span-2 md:row-span-2 h-[660px] -z-50"
                  : ""
              }`}
              style={{
                backgroundImage: `url(${item.img})`,
                zIndex: "-1",
                backgroundPosition: "center",
                backgroundSize: "cover",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-200">{item.description}</p>
                  )}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
