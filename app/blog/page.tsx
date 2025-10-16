"use client";

export default function BlogPage() {
  const blogLinks = [
    {
      title: "グローバル企業のWebCSS構成から企業の意図を読み解く",
      href: "https://docs.google.com/presentation/d/1w4zWHw_wn0hnZ22NFBshwq9akMWkpq05Y_phKca81HU/edit?slide=id.p#slide=id.p",
      comment: "Webデザインを通じて企業メッセージを読み解く講義資料",
    },
    {
      title: "Godotプログラミングの記述法",
      href: "https://docs.google.com/presentation/d/1frJroJ6NNjcG8p7zmYtyYd-O7ZeHoQxe/edit?slide=id.p1#slide=id.p1",
      comment: "軽量で迅速なゲーム開発を可能にしたGodotエンジンと記述法の講義資料",
    },
    {
      title: "ポートフォリオ",
      href: "https://github.com/Magiri1115/nextjs-boilerplate2",
      comment: "個人ポートフォリオ（このサイト）",
    },
    {
      title: "大学を使い倒すゲーム",
      href: "https://www.tuis.ac.jp/topics/20241209articleinterviewofkawanoseminar/",
      comment: "堀潤 Live Junctionでの紹介",
    },
    {
      title: "Narou-Search",
      href: "https://github.com/Magiri1115/Narou-Search/tree/develop",
      comment: "Juliaを使用したハイパフォーマンス検索サイト（構築中）。テキスト感情分析も実装予定。",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 space-y-8 text-center">
      <h1 className="text-4xl font-bold text-white">Blog</h1>
      <ul className="space-y-10">
        {blogLinks.map((item) => (
          <li key={item.title} className="relative group">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-400 hover:underline"
            >
              {item.title}
            </a>
            {/* コメント要素（hover時に表示、1行固定） */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-black/80 text-white text-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.comment}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}