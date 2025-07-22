import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuColor, setMenuColor] = useState("light");

  return (
    <MenuContext.Provider value={{ menuColor, setMenuColor }}>
      {children}
    </MenuContext.Provider>
  );
};
