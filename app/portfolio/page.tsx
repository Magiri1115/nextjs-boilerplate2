import SwiperSection from "../components/SwiperSection";

const portfolioData = [
  { icon: "/icons/portfolio1.svg", title: "Eコマース開発", description: "React/Next.js を用いてユーザー数10万人規模のECサイトを構築しました。" },
  { icon: "/icons/portfolio2.svg", title: "業務効率化ツール", description: "Pythonと自動化スクリプトで業務時間を30%削減しました。" },
  { icon: "/icons/portfolio3.svg", title: "データ分析基盤", description: "BigQueryを利用しデータ可視化ダッシュボードを構築しました。" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* スマホ＋タブレット専用 */}
      <SwiperSection items={portfolioData} />

      {/* PC＋タブレット（md以上） */}
      <div className="hidden sm:flex md:flex min-h-screen items-center justify-center space-x-6 flex-wrap justify-center">
        {portfolioData.map((p, i) => (
          <div key={i} className="w-64 md:w-80 bg-transparent text-white rounded-2xl p-6 text-center shadow-lg flex flex-col items-center mb-6">
            <img src={p.icon} alt={p.title} className="w-16 h-16 mb-4" />
            <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-sm">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
