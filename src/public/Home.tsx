import FirstBox from "../pages/home/firstBox";
import FirstCard from "../pages/home/FirstCard";
import Hero from "../pages/home/Hero";
import Ourclient from "../pages/home/ourclients";

function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50">
      <Hero />
      <FirstBox />
      <FirstCard />
      <Ourclient />
    </main>
  );
}

export default Home;