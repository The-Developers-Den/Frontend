import React from "react";
import Image from "next/image";
const HeroImg = () => {
  return (
    <div className="md:basis-[50%] max-md:hidden font-otf">
      <div className="w-full h-full relative flex flex-wrap  justify-center content-center overflow-x-clip ">
        <div className="w-[75%] h-[75%] min-h-[100px] min-w-[100px] rounded-full text-6xl break-all  overflow-hidden text-[#9c8e8e4d] ">
          Hola20AMiGo1Hola20AMiGoHola70AM01109iGoME
        </div>
        <Image
          src={"/hero-img.png"}
          width={500}
          height={500}
          alt="hero-img"
          className="absolute z-20 bottom-0 w-[55%] min-w-[300px] "
        />
      </div>
    </div>
  );
};

export default HeroImg;
