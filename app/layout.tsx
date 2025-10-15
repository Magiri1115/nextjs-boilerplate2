"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./globals.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(true);
  const [tabletOpen, setTabletOpen] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [init, setInit] = useState(false);
  const timeouts = useRef<number[]>([]);

  const fadeDuration = 600;
  const whiteHold = 300;

  // ✅ Hydration安全ガード
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ ページフェード管理
  useEffect(() => {
    document.body.classList.add("fade-out");
    const t = window.setTimeout(() => {
      document.body.classList.remove("fade-out");
      document.body.classList.add("fade-in");
    }, fadeDuration + whiteHold);
    timeouts.current.push(t);

    return () => {
      timeouts.current.forEach((id) => clearTimeout(id));
      timeouts.current = [];
    };
  }, []);

  const handleNav = (href: string) => {
    if (href === pathname || transitioning) return;
    setTransitioning(true);

    document.body.classList.remove("fade-in");
    document.body.classList.add("fade-out");

    const t1 = window.setTimeout(() => {
      router.push(href);
      const t2 = window.setTimeout(() => {
        document.body.classList.remove("fade-out");
        document.body.classList.add("fade-in");
        setTransitioning(false);
      }, whiteHold);
      timeouts.current.push(t2);
    }, fadeDuration);

    timeouts.current.push(t1);
  };

  // ✅ パーティクル初期化（SSR安全）
  useEffect(() => {
    if (typeof window === "undefined") return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <html lang="ja">
      <body>
        <main className="relative flex min-h-screen text-white overflow-x-hidden">
          {/* 背景の雪 */}
          {isClient && init && (
            <Particles
              id="tsparticles"
              className="fixed top-0 left-0 w-screen h-screen z-[-1]"
              options={{
                background: { color: { value: "#0a0a0a" } },
                fpsLimit: 60,
                particles: {
                  number: { value: 120, density: { enable: true, value_area: 800 } },
                  color: { value: "#ffffff" },
                  shape: { type: "circle" },
                  opacity: { value: 0.8 },
                  size: { value: { min: 1, max: 4 }, random: true },
                  move: {
                    enable: true,
                    direction: "bottom",
                    speed: { min: 0.5, max: 2 },
                    straight: false,
                    outModes: { default: "out" },
                  },
                },
                interactivity: {
                  events: { onHover: { enable: false }, onClick: { enable: false } },
                },
                detectRetina: true,
              }}
            />
          )}

          {/* コンテンツ */}
          <div className="fade-wrapper flex-1 flex items-center justify-center">
            {children}
          </div>

          {/* 🖥️ PCナビ */}
          <div className="hidden lg:block fixed top-1/2 right-0 -translate-y-1/2 z-[10000]">
            <div
              className={`relative w-32 bg-white/90 dark:bg-gray-900/90 border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-500 ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                onClick={() => !transitioning && setOpen((s) => !s)}
                disabled={transitioning}
                aria-label="Toggle navigation"
                className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-6 h-12 bg-blue-600 text-white flex items-center justify-center rounded-l shadow cursor-pointer disabled:opacity-50"
              >
                {open ? ">" : "<"}
              </button>

              <nav className="flex flex-col py-4 space-y-4 items-center">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.href)}
                    className="w-full text-center py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* 💻 Tabletナビ */}
          <div
            className={`hidden md:block lg:hidden fixed left-0 w-full bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 transform transition-transform duration-500 z-[10000] ${
              tabletOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <button
              onClick={() => !transitioning && setTabletOpen((s) => !s)}
              disabled={transitioning}
              aria-label="Toggle tablet navigation"
              className="absolute left-1/2 -translate-x-1/2 bottom-[-24px] w-12 h-6 bg-blue-600 text-white flex items-center justify-center rounded-b shadow cursor-pointer disabled:opacity-50"
            >
              {tabletOpen ? "⌃" : "⌄"}
            </button>

            <nav className="flex justify-center space-x-6 py-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="px-3 py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* 📱 Mobileナビ（Hydration安全版＋右端修正） */}
          {isClient && (
            <nav
              className="
                flex md:hidden fixed bottom-0 left-0 right-0
                w-full max-w-full
                bg-white/90 dark:bg-gray-900/90
                border-t border-gray-200 dark:border-gray-700
                justify-between items-center py-2
                px-2 sm:px-4
                z-[10000]
              "
              style={{
                paddingBottom: "calc(env(safe-area-inset-bottom) + 8px)",
                boxSizing: "border-box",
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="
                    flex flex-col items-center justify-center
                    text-[11px] sm:text-xs
                    text-gray-700 dark:text-gray-200 hover:text-blue-600
                    cursor-pointer
                    flex-1 min-w-0
                    truncate
                  "
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </main>
      </body>
    </html>
  );
}
