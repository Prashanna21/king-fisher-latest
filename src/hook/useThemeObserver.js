import { useEffect, useContext } from "react";
import { MenuContext } from "../state/MenuContext";

 const useThemeObserver = () => {
  const { setMenuColor } = useContext(MenuContext);

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme");
            setMenuColor(theme);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setMenuColor]);
};


export default useThemeObserver