import MapSection from "../Components/Home/MapSection.jsx";
import FloorPlanSelector from "../Components/Home/FloorPlanSelector.jsx";
import Whykingfisher from "../Components/Home/WhyKingFisher.jsx";
import PartnerLogos from "../Components/Partners/Associated-Partners.jsx";
import Home1 from "../Components/Home/home.jsx";
import AboutPage from "../Components/Home/AboutPage.jsx";
import PropertySection from "../Components/Home/PropertySection.jsx";
import HorizontalSlider from "../Components/Home/propertySlider.jsx";

const Home = () => {
  return (
    <>
      <section data-theme="light" className="min-h-screen relative">
        <Home1 />
      </section>
      <section className="min-h-screen" id="our-story">
        <AboutPage />
      </section>
      <section className="min-h-screen ">
        <PropertySection />
      </section>
      <section className="">
        <HorizontalSlider />
      </section>
      <section>
        <Whykingfisher />
      </section>

      {/* <section>
        <MapSection />
      </section> */}
      <section>
        <FloorPlanSelector />
      </section>
      <section>
        <PartnerLogos />
      </section>
     
    </>
  );
};

export default Home;
