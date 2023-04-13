import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import HeroText from "@/components/HeroText";
import HeroImg from "@/components/HeroImg";

const inter = Inter({ subsets: ["latin"] });

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
