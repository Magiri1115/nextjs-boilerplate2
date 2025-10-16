"use client";
import React, { useState, useEffect } from "react";

export default function FlipImage() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flip-container w-40 h-40">
      <div className={`flip-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-front flex items-center justify-center">
          <img src="/icons/Godot.svg" alt="Godot" className="w-full h-full object-contain" />
        </div>
        <div className="flip-back flex items-center justify-center">
          <img src="/icons/portfolio4.png" alt="Portfolio4" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
