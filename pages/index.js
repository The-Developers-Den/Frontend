import HeroText from "@/components/HeroText";
import HeroImg from "@/components/HeroImg";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-screen px-3 md:px-7 flex min-h-[75vh]">
        <HeroText />
        <HeroImg />
      </div>
    </main>
  );
}
