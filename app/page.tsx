export default function HomePage() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.jpg')" }} // public/hero.jpg を置いてください
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
        Welcome to My Website
      </h1>
    </div>
  );
}

