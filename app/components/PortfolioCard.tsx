"use client";
import React, { useState } from "react";

type Props = {
  icon: string;
  backIcon: string;
  title: string;
  description: string;
  challenge: string;
};

export default function PortfolioCard({
  icon,
  backIcon,
  title,
  description,
  challenge,
}: Props) {
  const [flipped, setFlipped] = useState(false);

  // 画面幅で挙動を変える
  const isPC = typeof window !== "undefined" && window.innerWidth >= 1024;

  const handleClick = () => {
    if (isPC) {
      setFlipped((f) => !f);
    }
  };

  const handleTouchStart = () => {
    if (!isPC) setFlipped(true);
  };

  const handleTouchEnd = () => {
    if (!isPC) setFlipped(false);
  };

  return (
    <div
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-64 md:w-80 h-96 perspective cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-transparent text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
          <img src={icon} alt={title} className="w-16 h-16 mb-4" />
          <h3 className="mt-4 text-xl font-bold bg-black/30 px-2 py-1 rounded">
            {title}
          </h3>
          <p className="mt-2 text-sm bg-black/20 px-2 py-1 rounded">
            {description}
          </p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-transparent text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
          {/* backIcon を 200% に拡大 */}
          <img
            src={backIcon}
            alt={`${title} back`}
            className="w-48 h-32 mb-4" // ← w-16 h-16 を w-48 h-32 に変更
          />
          <h3 className="mt-4 text-lg font-bold">大変だったこと</h3>
          <p className="mt-2 text-sm">{challenge}</p>
        </div>
      </div>
    </div>
  );
}