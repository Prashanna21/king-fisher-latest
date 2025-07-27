// components/HeadingWithHighlight.jsx
const HeadingWithHighlight = ({
  text,
  highlights = [],
  highlightClass = "",
  className = "",
}) => {
  if (!text) return null;

  const escapedHighlights = highlights.map((word) =>
    word.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
  );
  const regex = new RegExp(`(${escapedHighlights.join("|")})`, "gi");

  const parts = text.split(regex);

  // Default base styles
  const baseClass =
    "text-primary font-light text-4xl sm:text-6xl text-center text-[#F6BC6D]";
  const baseHighlightClass = "text-white font-semibold";

  return (
    <p className={`${baseClass} ${className}`}>
      {parts.map((part, i) => {
        const isMatch = highlights.some(
          (h) => h.toLowerCase() === part.toLowerCase()
        );
        return isMatch ? (
          <span key={i} className={`${baseHighlightClass} ${highlightClass}`}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </p>
  );
};

export default HeadingWithHighlight;
