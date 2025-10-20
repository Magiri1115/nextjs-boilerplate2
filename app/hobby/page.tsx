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
    <div className="w-[80vw] h-[80vh] mx-auto flex flex-col items-center justify-center py-12 px-4 bg-[#0B0B0F] text-white relative overflow-hidden rounded-2xl shadow-lg">
      {/* 左ボタン（縦長四角） */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-[calc(50%-40%)] -translate-y-1/2 z-50 w-10 h-24 bg-white/20 hover:bg-white/40 text-white text-3xl flex items-center justify-center rounded-md shadow-lg cursor-pointer transition-colors"
      >
        ＜
      </button>

      {/* 右ボタン（縦長四角） */}
      <button
        onClick={next}
        className="absolute top-1/2 right-[calc(50%-40%)] -translate-y-1/2 z-50 w-10 h-24 bg-white/20 hover:bg-white/40 text-white text-3xl flex items-center justify-center rounded-md shadow-lg cursor-pointer transition-colors"
      >
        ＞
      </button>

      {/* スワイプ操作エリア */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <HobbyCard hobby={hobbies[currentIndex]} />
      </div>

      {/* フッター（.hobby-borderと横幅を揃える／bottomから15%位置） */}
      <footer className="absolute bottom-[15%] w-[80%] mx-auto overflow-hidden whitespace-nowrap z-40">
        <div className="inline-block whitespace-nowrap animate-[marquee_40s_linear_infinite]">
          <span className="px-8">
            📧 busmagiri6@gmail.com ｜ 🐙 GitHub:
            <a
              href="https://github.com/Magiri1115"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 mx-1"
            >
              Magiri1115
            </a>
            ｜ 今後：X・Instagram追加予定
          </span>
          <span className="px-8">
            📧 busmagiri6@gmail.com ｜ 🐙 GitHub:
            <a
              href="https://github.com/Magiri1115"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 mx-1"
            >
              Magiri1115
            </a>
            ｜ 今後：X・Instagram追加予定
          </span>
        </div>
      </footer>

      {/* marquee アニメーション */}
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
