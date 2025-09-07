import SwiperSection from "../components/SwiperSection";

const aboutData = [
  { icon: "/icons/about1.svg", title: "挑戦心", description: "新しい技術やアイデアに対して学び続けます。" },
  { icon: "/icons/about2.svg", title: "リーダーシップ", description: "ともに歩み、導ける存在を目指しています。" },
  { icon: "/icons/about3.svg", title: "人とのつながり", description: "ご縁を大切にし信頼関係を築くことに全力を尽くします。" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* スマホ＋タブレット専用 */}
      <SwiperSection items={aboutData} />

      {/* PC＋タブレット（sm以上） */}
      <div className="hidden sm:flex md:flex min-h-screen items-center justify-center space-x-6 flex-wrap justify-center">
        {aboutData.map((a, i) => (
          <div key={i} className="w-64 md:w-80 bg-transparent text-white rounded-2xl p-6 text-center shadow-lg flex flex-col items-center mb-6">
            <img src={a.icon} alt={a.title} className="w-16 h-16 mb-4" />
            <h3 className="mt-4 text-xl font-bold">{a.title}</h3>
            <p className="mt-2 text-sm">{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
