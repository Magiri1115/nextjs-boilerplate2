export default function AboutPage() {
  const career = [
    { year: "2017年3月", text: "常陸太田市立瑞竜中学校 卒業" },
    { year: "2017年4月", text: "私立水城高等学校 入学" },
    { year: "2020年3月", text: "私立水城高等学校 卒業" },
    { year: "2021年4月", text: "東京情報大学 総合情報学部 入学" },
    { year: "2025年3月", text: "東京情報大学 総合情報学部 卒業" },
    { year: "2025年6月", text: "有限会社クリフト 入社 （フロントエンド開発・テストケース作成担当）" },
    { year: "2025年9月～現在", text: "React / Next.js を中心にポートフォリオ開発を継続" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      {/* スクロール可能エリア */}
      <div
        className="
          scroll-container
          w-full max-w-3xl px-4
          h-[70vh] overflow-y-scroll
          rounded-xl
        "
      >
        <div className="space-y-6">
          {career.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 bg-transparent p-4 rounded-xl shadow-lg"
            >
              {/* 年月 */}
              <span className="text-blue-400 font-semibold min-w-[100px]">
                {item.year}
              </span>
              {/* 経歴テキスト */}
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
