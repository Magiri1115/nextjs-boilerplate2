import SwiperSection from "../components/SwiperSection";

const servicesData = [
  { icon: "/icons/service1.svg", title: "サービスA", description: "短い説明文が入ります。" },
  { icon: "/icons/service2.svg", title: "サービスB", description: "短い説明文が入ります。" },
  { icon: "/icons/service3.svg", title: "サービスC", description: "短い説明文が入ります。" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* スマホ＋タブレット専用 */}
      <SwiperSection items={servicesData} />

      {/* PC＋タブレット（sm以上） */}
      <div className="hidden sm:flex md:flex min-h-screen items-center justify-center space-x-6 flex-wrap justify-center">
        {servicesData.map((s, i) => (
          <div key={i} className="w-64 md:w-80 bg-transparent text-white rounded-2xl p-6 text-center shadow-lg flex flex-col items-center mb-6">
            <img src={s.icon} alt={s.title} className="w-16 h-16 mb-4" />
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
