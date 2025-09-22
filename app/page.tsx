"use client";

import { useState } from "react";

export default function Home() {
  const [showCareer, setShowCareer] = useState(false);

  const toggleCareer = () => setShowCareer((prev) => !prev);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-transparent">
      {/* タイトル */}
      <h1 className="text-6xl font-bold mb-6">Welcome to My Website</h1>

      {/* 経歴カード */}
      {showCareer && (
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl h-[70vh] p-6 bg-white text-gray-900 rounded-2xl shadow-2xl overflow-y-auto animate-fadeIn z-10">
          <h2 className="font-bold text-2xl mb-4">経歴</h2>
          <p className="text-base text-left leading-relaxed">
            ポートフォリオをご覧いただきありがとうございます。伊藤誠隆と申します。
            幼い頃からゲームが大好きで、その体験から生まれる感動を、今度は私が作り手として提供したいと考えるようになりました。
            特に、モンスターハンターで4人の仲間と協力し、強大なモンスターを倒した経験は、「ともに困難を乗り越える達成感」を深く心に刻みました。
            複雑な役割分担や戦略が求められるシステムでも、誰でも直感的に理解し、協力できる点が素晴らしいと感じました。
            この体験から、私はゲームの面白さを、より多くの人に届けるための土台となる「プラットフォーム」開発に携わりたいと強く考えるようになりました。
            特に、ユーザーが迷うことなくゲームの核心的な体験に辿り着けるような、可読性と使いやすさを追求したシステム開発に貢献したいです。
            私はこれまで、ReactとNext.jsを用いた可読性の高いシステム開発を得意としてきました。
            特に「誰が読んでも理解しやすいコード」を意識し、長期的に保守しやすい設計を心がけています。
            この姿勢は、協力プレイの基盤となるような、多くのエンジニアが関わるプラットフォーム開発において不可欠なものだと信じています。
            技術面では、UIライブラリ（Tailwind CSS）を活用した効率的な開発経験を持ち、デザインと機能の両立を実現してきました。
            これまでの経験で最も印象的だったのは、在職時に行った既存システムのレイアウト修正です。
            他人のコードを理解する際、単にコードを追うのではなく「なぜこのコードが書かれているのか」という
            意図を深く洞察する姿勢を持つことで、システム全体を壊すことなく不具合箇所を特定し、改善に成功しました。
            この経験から、既存のコードへのリスペクトと深い洞察力が、高品質な開発につながることを学びました。
            大学時代のゲーム開発プロジェクトでは、リーダー兼プログラマーとしてチームを牽引しました。
            一方的に決定するのではなく、メンバー全員が意見を出し合える環境を整えることで、
            「このチームだからこそ作れた」と感じられる作品を完成させることができました。
            これは、多様なプレイヤーに最高の体験を届けるというプラットフォーム開発の理念にも通じると考えています。
            フロントエンド開発において、可読性の高いコードを書くことは、ユーザーの信頼を得るための第一歩であり、
            持続的な成長の基盤になると考えています。
            今後は、アクセシビリティ対応やパフォーマンス改善にも積極的に取り組み、プラットフォーム開発を通じて、世界中の人々に
            「ともに困難を乗り越える達成感」を届けられるような信頼されるエンジニアへと成長していきたいです。
          </p>
        </div>
      )}

      {/* ボタン */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 ${
          showCareer ? "bottom-[5%]" : "bottom-[20%]"
        }`}
      >
        <button
          onClick={toggleCareer}
          className="px-6 py-3 bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          {showCareer ? "閉じる" : "経歴を見る"}
        </button>
      </div>

      {/* アニメーション用CSS */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
