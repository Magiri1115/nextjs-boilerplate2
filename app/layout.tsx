// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* Google Fonts（Montserrat / Roboto）のみ読み込み。Material Icons は削除） */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="app-root">
          {/* content エリア（右固定ナビがあるときは CSS の media query で余白を確保します） */}
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
