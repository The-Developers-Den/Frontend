import HeroText from "@/components/HeroText";
import HeroImg from "@/components/HeroImg";
import Headline from "@/components/Headline";
import TopProducts from "@/components/TopProducts";
import MarketPlace from "@/components/MarketPlace";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-screen px-3 md:px-7 flex max-md:flex-col min-h-[75vh]">
        <HeroText />
        <HeroImg />
      </div>
      <Headline text="Trending Products" />
      <TopProducts />
      <Headline text="Our MarketPlace" />
      <MarketPlace />
      <Headline text="Top Products" />
    </main>
  );
}
