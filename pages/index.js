import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h2 className="font-monument_bold">Hola</h2>
      <h2 className="font-otf text-2xl">Hola</h2>
    </main>
  );
}
