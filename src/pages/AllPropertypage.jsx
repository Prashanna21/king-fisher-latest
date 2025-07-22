import React, { useEffect, useRef, useState } from "react";
import PropertyCard from "../Components/Property-card/PropertyCard";
import { MenuContext } from "../state/MenuContext";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import { useBannerHeight } from "../Context/BannerHeightContext";
import api from "../services/api";





const AllPropertypage = () => {
  const bannerRef = useRef(null);
  // const { setMenuColor } = useContext(MenuContext);
  const { setBannerHeight } = useBannerHeight();

  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (bannerRef.current && scrollY > bannerRef.current.offsetHeight - 80) {
  //       setMenuColor("dark");
  //     } else {
  //       setMenuColor("light");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [setMenuColor]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/properties/active");
        if (response.data.success) {
          setProperties(response.data.data);
        }
        if (!response.data.success) {
          setProperties([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section
        className="relative w-full mx-auto bg-cover bg-center text-white -mt-25 darkSection"
        style={{
          backgroundImage: 'url("/property/property.jpg")',
          fontFamily: `'Wellsbrook Initials SG Regular'`,
          height: "75vh",
          padding: "0 50px",
        }}
        ref={bannerRef}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="absolute top-10/12 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center p-6">
          <button
            onClick={() => window.history.back()}
            className="font-bold heading-font tracking-widest uppercase leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
            }}>
            ALL Properties
          </button>
          <Breadcrumbs />
        </div>
      </section>

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <PropertyCard data={properties} />
      )}
    </>
  );
};

export default AllPropertypage;
