import SwiperSection from "../components/SwiperSection";
import PortfolioCard from "../components/PortfolioCard";

const portfolioData = [
  {
    icon: "/icons/Godot_icon.svg",
    backIcon: "/icons/portfolio4.png",
    title: "大学生活をテーマとしたシリアスゲーム開発",
    description:
      "大学生活で直面する課題を解決するシリアスゲームを開発しました。技術スタック: Godot Engine, GDScript",
    challenge: "限られた時間でのチーム開発とゲームバランスの調整が大変でした。",
  },
  {
    icon: "/icons/Typescript_logo.svg",
    backIcon: "/icons/portfolio5.svg",
    title: "Web記事を活用した思考ツールの開発",
    description:
      "Web記事を分析し、思考の整理とアイデア創出をサポートするツールを開発しました。技術スタック: React, GraphQL, TypeScript",
    challenge: "膨大な記事データの効率的な解析とUIレスポンスの最適化に苦労しました。",
  },
  {
    icon: "/icons/JavaScript_logo.svg",
    backIcon: "/icons/portfolio6.svg",
    title: "個人投資家向け投資情報コンテンツサービスの開発",
    description:
      "複雑な投資データを直感的でわかりやすいUIで表現するサービスを開発しました。技術スタック: JavaScript, HTML/CSS",
    challenge: "非エンジニアユーザーにも理解しやすいUX設計が大きな課題でした。",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* スマホ＋タブレット専用 */}
      <SwiperSection items={portfolioData} />

      {/* PC＋タブレット（md以上） */}
      <div className="hidden sm:flex md:flex min-h-screen items-center justify-center flex-wrap gap-6 p-8">
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
