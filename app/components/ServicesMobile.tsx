"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services = [
  { icon: "/icons/service1.svg", title: "サービスA", description: "短い説明文が入ります。" },
  { icon: "/icons/service2.svg", title: "サービスB", description: "短い説明文が入ります。" },
  { icon: "/icons/service3.svg", title: "サービスC", description: "短い説明文が入ります。" },
];

export default function ServicesMobile() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="block md:hidden h-screen w-full relative">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-full"
      >
        {services.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center justify-center h-full text-white text-center px-6 bg-transparent">
              <img src={s.icon} alt={s.title} className="w-20 h-20 mb-6" />
              <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
              <p className="text-lg max-w-xs">{s.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ↑ ボタン */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-1/2 top-16 transform -translate-x-1/2 z-50 w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-white shadow-lg"
      >
        ↑
      </button>

      {/* ↓ ボタン */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute left-1/2 bottom-16 transform -translate-x-1/2 z-50 w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-white shadow-lg"
      >
        ↓
      </button>
    </div>
  );
}
