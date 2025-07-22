
import React, { useState, useEffect } from "react";
import "./abc.css";

const TRAIL_COUNT = 10;
const DOT_GAP = 8; // pixels
const FALL_DURATION = 1200; // ms
const INTERVAL_DURATION = 2600; // ms

const AbcPage = () => {
  const [collided, setCollided] = useState(false);
  const [key, setKey] = useState(0);
  const [trailVisible, setTrailVisible] = useState(
    Array(TRAIL_COUNT).fill(true)
  );

  useEffect(() => {
    const reset = () => {
      setCollided(false);
      setKey((prev) => prev + 1);
      setTrailVisible(Array(TRAIL_COUNT).fill(true));

      // Hide trail dots one by one as falling dot reaches them
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const delay = (FALL_DURATION / TRAIL_COUNT) * i;
        setTimeout(() => {
          setTrailVisible((prev) => {
            const updated = [...prev];
            updated[i] = false;
            return updated;
          });
        }, delay);
      }

      // Trigger wave after fall finishes
      setTimeout(() => {
        setCollided(true);
      }, FALL_DURATION);
    };

    reset();
    const interval = setInterval(reset, INTERVAL_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="relative w-40 h-60">
        {/* Trail Dots */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 flex flex-col items-center mt-3 gap-2">
          {trailVisible.map((visible, i) => (
            <div
              key={`trail-${i}-${key}`}
              className={`w-1 h-1 rounded-full bg-gray-300 transition-opacity duration-100 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Falling Main Dot */}
        {!collided && (
          <div
            key={`main-${key}`}
            className="absolute left-1/2 top-0 -translate-x-1/2 z-30 w-2 h-2 bg-gray-300 rounded-full animate-smart-fall"
          />
        )}

        {/* Central Circle */}
        <div className="absolute top-[88px] left-1/2 -translate-x-1/2 z-10">
          <div className="w-36 h-36 bg-white/40 rounded-full" />
        </div>

        {/* Wave Animation */}
        {collided &&
          [...Array(3)].map((_, i) => (
            <div
              key={`wave-${i}-${key}`}
              className="absolute top-[88px] left-1/2 -translate-x-1/2 z-0 w-36 h-36 rounded-full bg-white/30 animate-wave"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
      </div>
    </div>
  );
};

export default AbcPage;
