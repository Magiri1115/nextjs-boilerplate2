"use client";

import { useState, useRef } from "react";
import HobbyCard from "../components/hobby-card";
import { hobbies } from "./hobbies";

export default function HobbyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % hobbies.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + hobbies.length) % hobbies.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (diff > 50) next();
    if (diff < -50) prev();
    startX.current = null;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 bg-transparent text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        My Hobby
      </h1>

      {/* === HobbyCard とボタンを並べるエリア === */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex items-center justify-center w-full max-w-4xl bg-transparent rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 backdrop-blur-md"
      >
        {/* 左ボタン（PCのみ表示） */}
        <button
          onClick={prev}
          className="hidden lg:flex w-10 h-20 bg-white/20 hover:bg-white/40 text-white text-3xl items-center justify-center rounded-md shadow-md transition-colors mr-4"
        >
          ＜
        </button>

        {/* HobbyCard（真ん中） */}
        <div className="flex-1 flex items-center justify-center">
          <HobbyCard hobby={hobbies[currentIndex]} />
        </div>

        {/* 右ボタン（PCのみ表示） */}
        <button
          onClick={next}
          className="hidden lg:flex w-10 h-20 bg-white/20 hover:bg-white/40 text-white text-3xl items-center justify-center rounded-md shadow-md transition-colors ml-4"
        >
          ＞
        </button>
      </div>

      {/* スマホ・タブレット専用説明文 */}
      <p className="text-sm text-white/70 mt-4 lg:hidden">
        左右フリックで趣味を確認
      </p>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
