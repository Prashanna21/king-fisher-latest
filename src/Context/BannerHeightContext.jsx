import { createContext, useContext, useState } from "react";

const BannerHeightContext = createContext();

export const useBannerHeight = () => useContext(BannerHeightContext);

export const BannerHeightProvider = ({ children }) => {
  const [bannerHeight, setBannerHeight] = useState(700); // default fallback value

  return (
    <BannerHeightContext.Provider value={{ bannerHeight, setBannerHeight }}>
      {children}
    </BannerHeightContext.Provider>
  );
};
