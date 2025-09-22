"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import snowAnimation from "@/public/animations/snowfall.json";

export default function Snowfall() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0, fixed: false });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (w <= 765) {
        // ✅ 幅を固定して、中央寄せにするフラグをON
        setWindowSize({ width: 765, height: h, fixed: true });
      } else {
        setWindowSize({ width: w, height: h, fixed: false });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="fixed top-0 left-1/2 z-0 pointer-events-none"
      style={{
        width: windowSize.width,
        height: windowSize.height,
        transform: windowSize.fixed ? "translateX(-50%)" : "translateX(-50%)", 
        // ✅ 常に中央寄せ。ただし fixed の場合は特に重要
      }}
    >
      <Lottie
        animationData={snowAnimation}
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
