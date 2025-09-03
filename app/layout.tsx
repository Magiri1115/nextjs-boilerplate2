import "./globals.css";
import { ReactNode } from "react";
import TabNav from "./components/TabNav";

export const metadata = {
  title: "My Website",
  description: "Responsive Next.js layout",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts + Material Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>
        <div style={{ display: "flex" }}>
          {/* コンテンツエリア */}
          <div style={{ flex: 1, padding: "20px", marginRight: "240px" }}>
            {children}
          </div>
          {/* タブナビ */}
          <TabNav />
        </div>
      </body>
    </html>
  );
}
