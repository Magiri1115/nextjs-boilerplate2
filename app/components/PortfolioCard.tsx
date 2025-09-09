"use client";
import React, { useState } from "react";
import Image from "next/image";

type PortfolioItem = {
  icon: string;
  backIcon: string;
  title: string;
  description: string;
  challenge: string;
};

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-72 h-96 perspective cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* 表 */}
        <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-4 rounded-xl shadow-lg bg-white/90 dark:bg-gray-900/90">
          <div className="w-24 h-24 mb-6 animate-spin-slow">
            <Image src={item.icon} alt={item.title} width={96} height={96} />
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {item.title}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {item.description}
          </p>
        </div>

        {/* 裏 */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-4 rounded-xl shadow-lg bg-white/90 dark:bg-gray-900/90">
          <div className="w-24 h-24 mb-6 animate-spin-slow">
            <Image src={item.backIcon} alt={item.title + " 裏"} width={96} height={96} />
          </div>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            苦労したこと
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">{item.challenge}</p>
        </div>
      </div>
    </div>
  );
}
