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

  // PCではクリック、モバイルではタップで反転
  const isPC = typeof window !== "undefined" && window.innerWidth >= 1024;

  const handleClick = () => {
    if (isPC) setFlipped((f) => !f);
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
      className="w-64 md:w-80 h-96 cursor-pointer perspective"
    >
      <div
        className={`relative w-full h-full duration-700 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* === 表面 === */}
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-2xl bg-black/20 text-white shadow-lg p-6">
          <img src={icon} alt={title} className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-bold text-center bg-black/30 px-2 py-1 rounded">
            {title}
          </h3>
          <p className="mt-3 text-sm text-center bg-black/20 px-3 py-2 rounded">
            {description}
          </p>
        </div>

        {/* === 裏面 === */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center rounded-2xl bg-black/30 text-white shadow-lg p-6">
          <img src={backIcon} alt={`${title} back`} className="w-48 h-32 mb-4" />
          <h3 className="text-lg font-bold mb-2">大変だったこと</h3>
          <p className="text-sm text-center bg-black/40 px-3 py-2 rounded">
            {challenge}
          </p>
        </div>
      </div>
    </div>
  );
}
