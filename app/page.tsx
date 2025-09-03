"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const contentMap: Record<string, string> = {
  Home: "This is the Home section.",
  Services: "Here are our Services.",
  Portfolio: "Take a look at our Portfolio.",
  About: "About us information goes here.",
  Blog: "Welcome to our Blog.",
  Contact: "Get in touch via Contact.",
};

export default function Page() {
  const [active, setActive] = useState("Home");

  return (
    <main className="flex min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* 左のコンテンツエリア */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold mb-4">{active}</h1>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            {contentMap[active]}
          </p>
        </div>
      </div>

      {/* PCナビ（右縦並び、中央寄せ） */}
      <nav className="hidden lg:flex flex-col fixed top-1/2 right-0 -translate-y-1/2 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 w-32 py-4 space-y-4 items-center">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`w-full text-center py-2 transition ${
              active === item.label
                ? "bg-blue-600 text-white font-semibold rounded-md"
                : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Tabletナビ（上部横タブ） */}
      <nav className="hidden md:flex lg:hidden fixed top-0 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 justify-center space-x-6 py-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`px-3 py-2 transition ${
              active === item.label
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobileナビ（下部ボトムナビ） */}
      <nav className="flex md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 justify-around py-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`flex flex-col items-center text-xs transition ${
              active === item.label
                ? "text-blue-600 font-semibold"
                : "text-gray-700 dark:text-gray-200 hover:text-blue-600"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </main>
  );
}
