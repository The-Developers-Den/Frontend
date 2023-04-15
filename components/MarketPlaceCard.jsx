import React from "react";
import Image from "next/image";
const MarketPlaceCard = () => {
  return (
    <div className="flex min-h-fit justify-center hover:scale-105 duration-300 p-5 text-black">
      <div className="border border-black shadow-[8px_8px_0_#000000] min-w-[22vw] max-w-[25vw] bg-[#FFF89F]  rounded-md mx-4  flex justify-center content-center flex-col px-3 min-h-fit">
        <div className="bg-black rounded-lg h-[85%] w-full mx-auto mt-10 ">
          <Image
            src={"/hero-img.png"}
            width={200}
            height={200}
            alt="top-product"
            className="object-contain"
          />
        </div>
        <section className="flex justify-between my-2 mb-5">
          <section>
            <h2 className="font-monument_bold text-black text-xs">
              Current Bid
            </h2>
            <h2 className="font-monument_bold text-[#7843E8] text-xl">7 ETH</h2>
          </section>
          <button className="bg-[#7843E8] rounded-3xl text-white px-3 my-1 hover:scale-95 text-xs gap-10 shadow-[5px_5px_0px_#000000] duration-200 font-monument_reg border border-black ">
            Bid Now
          </button>
        </section>
      </div>
      <div className="flex flex-col justify-center mx-1">
        <h2 className="font-monument_bold text-sm my-1">Dec 13, 2023</h2>
        <h2 className="font-otf text-2xl text-[#7843E8]">Text</h2>
        <h2 className="font-monument_bold text-sm my-1">SubText</h2>
        <h2 className="font-monument_reg text-xs my-2 text-black/[0.65]">
          Lorem ing elit. Qui dicta minus molestiae vel beatae natus eveniet
          ratione temporibus aperiam harum alias officiis assumenda officia
          quibusdam deleniti eos cupidibu
        </h2>
      </div>
    </div>
  );
};

export default MarketPlaceCard;
