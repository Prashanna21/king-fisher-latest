import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./pages/Index.jsx";
import { RouterProvider } from "react-router-dom";
import { MenuProvider } from "./state/MenuContext.jsx";
import { BannerHeightProvider } from "./Context/BannerHeightContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MenuProvider> */}
      <BannerHeightProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </BannerHeightProvider>
    {/* </MenuProvider> */}
  </StrictMode>
);
