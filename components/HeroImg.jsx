import React from "react";
import Image from "next/image";
const HeroImg = () => {
  return (
    <div className="w-[50%] relative basis-[50%] font-otf flex flex-wrap overflow-x-clip justify-center content-center">
      <div className="w-[75%] h-[80%] rounded-full text-6xl break-all  overflow-hidden text-[#9c8e8e4d] ">
        Hola20AMiGo1Hola20AMiGoHola70AM01109iGoME
      </div>
      <Image
        src={"/hero-img.png"}
        width={500}
        height={500}
        alt="hero-img"
        className="absolute z-20 bottom-0 w-[55%] "
      />
    </div>
  );
};

export default HeroImg;
