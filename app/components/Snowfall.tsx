// app/components/Snowfall.tsx
"use client";

import Lottie from "lottie-react";
import snowfallAnimation from "@/public/animations/snowfall.json";

export default function Snowfall() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Lottie animationData={snowfallAnimation} loop autoplay />
    </div>
  );
}
