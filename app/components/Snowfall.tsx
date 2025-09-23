"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import snowAnimation from "@/public/animations/snowfall.json";

export default function Snowfall() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [delays, setDelays] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // ✅ ランダム遅延
    setDelays({
      left: Math.random() * 3,
      right: Math.random() * 3,
    });

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const isWide = windowSize.width >= 1072;
  const scaleValue = isWide ? 1.2 : 1.5; // ✅ 1072px以上は120%、1071px以下は150%

  return (
    <div
      className="fixed top-0 left-0 z-0 pointer-events-none flex"
      style={{
        width: windowSize.width,
        height: windowSize.height,
      }}
    >
{isWide ? (
  // ✅ PC版 (1072px以上): 左右に配置
  <>
    {/* 左 */}
    <div className="w-1/2 h-full relative overflow-hidden z-10">
      <Lottie
        animationData={snowAnimation}
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scale(1.4)", // ✅ 常に140%拡大
          transformOrigin: "center",
          animationDelay: `${delays.left}s`,
        }}
      />
    </div>
    {/* 右 */}
    <div className="w-1/2 h-full relative overflow-hidden z-20">
      <Lottie
        animationData={snowAnimation}
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scale(1.4) scaleX(-1)", // ✅ 140%拡大＋反転
          transformOrigin: "center",
          animationDelay: `${delays.right}s`,
        }}
      />
    </div>
  </>
      ) : (
        // ✅ スマホ・タブレット版 (1071px以下): 1枚だけ拡大
        <div className="w-full h-full relative">
          <Lottie
            animationData={snowAnimation}
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `scale(${scaleValue})`,
              transformOrigin: "center",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}