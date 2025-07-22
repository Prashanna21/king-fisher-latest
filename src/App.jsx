import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Header/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
// import useThemeObserver from "./hook/useThemeObserver.js";
import LayoutWrapper from "./pages/LayoutWrapper.jsx";
import { useEffect, useState } from "react";
import Preloader from "./Components/Preloader/Preloader.jsx";

function App() {
  // useThemeObserver();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowPreloader(true);
      const timer = setTimeout(() => {
        sessionStorage.setItem("hasVisited", "true");
        setShowPreloader(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (showPreloader) {
    return <Preloader />;
  }
  return (
    <>
      {/* <Preloader /> */}
      <div
        className={`${
          showPreloader ? "overflow-hidden h-screen " : "overflow-auto"
        }`}
      >
        <LayoutWrapper>
          <Navbar />
          <main
            className={`min-h-[78vh] scrollbar-hidden ${
              showPreloader ? "scrollbar-hidden" : " scrollbar-hidden"
            }`}
          >
            <Outlet />
          </main>
          <Footer />
        </LayoutWrapper>
      </div>
      {/* Global Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        style={{
          top: "80px",
          right: "20px",
          width: "auto",
          minWidth: "300px",
          maxWidth: "400px",
        }}
        toastStyle={{
          backgroundColor: "#ffffff",
          color: "#1f2937",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "16px 20px",
          marginBottom: "16px",
          borderLeft: "4px solid #4f46e5",
          transition: "all 0.3s ease",
        }}
        bodyStyle={{
          margin: "0",
          padding: "0",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
        progressStyle={{
          background: "linear-gradient(to right, #4f46e5, #7c3aed)",
          height: "3px",
        }}
        closeButton={({ closeToast }) => (
          <button
            onClick={closeToast}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="close"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      />
    </>
  );
}

export default App;
