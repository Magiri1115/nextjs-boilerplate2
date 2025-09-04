"use client";

import { useState } from "react";
import Link from "next/link";
import "./globals.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <html lang="ja">
      <body>
        {/* 背景画像を全ページに共通適用 */}
        <div
          className="min-h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/hero.jpg')" }} // public/hero.jpg を置く
        >
          {/* 背景に薄いオーバーレイを入れる場合 */}
          <div className="absolute inset-0 bg-black/40" />

          <main className="relative flex min-h-screen text-white">
            {/* ページごとの中身 */}
            <div className="flex-1 flex items-center justify-center">
              {children}
            </div>

            {/* ✅ PCナビ（右縦並び＋トグル付き） */}
            <div className="hidden lg:block fixed top-1/2 right-0 -translate-y-1/2">
              <div
                className={`relative w-32 bg-white/90 dark:bg-gray-900/90 border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-500 ${
                  open ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {/* トグルボタン */}
                <button
                  onClick={() => setOpen(!open)}
                  className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-6 h-12 bg-blue-600 text-white flex items-center justify-center rounded-l shadow"
                >
                  {open ? ">" : "<"}
                </button>

                {/* ナビボタン */}
                <nav className="flex flex-col py-4 space-y-4 items-center">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="w-full text-center py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* ✅ Tabletナビ（上部横タブ） */}
            <nav className="hidden md:flex lg:hidden fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 justify-center space-x-6 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* ✅ Mobileナビ（下部ボトムナビ） */}
            <nav className="flex md:hidden fixed bottom-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-700 justify-around py-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-200 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </main>
        </div>
      </body>
    </html>
  );
}

