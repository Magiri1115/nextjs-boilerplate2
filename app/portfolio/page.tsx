import SwiperSection from "../components/swiper-section";
import PortfolioCard from "../components/portfolio-card";

const portfolioData = [
  {
    icon: "/icons/Godot_icon.svg",
    backIcon: "/icons/portfolio4.png",
    title: "大学生活をテーマとしたシリアスゲーム開発",
    description:
      "大学生活で直面する課題を解決するシリアスゲームを開発しました。30人以上のフィードバックを受けました。ニュース特集も組まれました。技術スタック: Godot Engine, GDScript",
    challenge: "限られた時間でのチーム開発とゲームバランスの調整が大変でした。",
  },
  {
    icon: "/icons/Typescript_logo.svg",
    backIcon: "/icons/portfolio5.png",
    title: "Web記事を活用した思考ツールの開発",
    description:
      "Web記事を分析し、思考の整理とアイデア創出をサポートするツールを開発しました。企業や教育機関にて好評をいただきました。技術スタック: React, GraphQL, TypeScript",
    challenge: "膨大な記事データの効率的な解析とUIレスポンスの最適化に苦労しました。",
  },
  {
    icon: "/icons/JavaScript_logo.svg",
    backIcon: "/icons/portfolio6.png",
    title: "個人投資家向け投資情報コンテンツサービスの開発",
    description:
      "複雑な投資データを直感的でわかりやすいUIで表現するサービスを開発しました。10社以上の金融機関にて使用されています。技術スタック: JavaScript, HTML/CSS",
    challenge: "非エンジニアユーザーにも理解しやすいUX設計が大きな課題でした。",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-transparent">
    {/* スマホ＋タブレット専用（1072px以下） */}
    <div className="block max-[1072px]:block min-[1073px]:hidden">
      <SwiperSection items={portfolioData} />
    </div>

      {/* PC専用（1073px以上） */}
      <div className="hidden min-[1073px]:flex min-h-screen items-center justify-center flex-wrap gap-6 p-8">
        {portfolioData.map((p, i) => (
          <PortfolioCard
            key={i}
            icon={p.icon}
            backIcon={p.backIcon}
            title={p.title}
            description={p.description}
            challenge={p.challenge}
          />
        ))}
      </div>
    </div>
  );
}