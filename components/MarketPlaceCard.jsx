import React from "react";
import Image from "next/image";
import Link from "next/link";
const MarketPlaceCard = () => {
  return (
    <div className="flex min-h-fit justify-center hover:scale-105 duration-300 p-5 text-black max-md:flex-col max-md:mx-auto max-md:text-center mx-2">
      <div className="border border-black shadow-[8px_8px_0_#000000] min-w-fit bg-[#FFF89F]  rounded-md mx-4  flex justify-center content-center flex-col px-3 min-h-fit  max-md:mx-auto max-md:my-4 ">
        <div className="bg-black rounded-lg h-[85%] w-full mx-auto mt-10 p-5 md:p-3">
          <Image
            src={"/demo-project.png"}
            width={200}
            height={200}
            alt="top-product"
            className="object-contain"
          />
        </div>
        <section className="flex justify-between my-2 mb-5">
          <section>
            <h2 className="font-monument_bold text-black text-xs">
              Current Price
            </h2>
            <h2 className="font-monument_bold text-[#7843E8] text-xl">7 ETH</h2>
          </section>
          <button className="bg-[#7843E8] rounded-3xl text-white px-3 my-1 hover:scale-95 text-xs gap-10 shadow-[5px_5px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] duration-200 font-monument_reg border border-black  min-w-fit max-md:mx-auto max-md:px-5 ">
            Pledge
          </button>
        </section>
      </div>
      <div className="flex flex-col justify-center mx-1 max-md:content-center">
        <h2 className="font-otf text-2xl text-[#7843E8]">Text</h2>
        <h2 className="font-monument_bold text-sm my-1">SubText</h2>
        <h2 className="font-monument_reg text-xs my-2 text-black/[0.65]">
          Lorem ing elit. Qui dicta minus molestiae vel beatae natus eveniet
          ratione temporibus aperia massumenda officia quibusdam deleniti eos
          cupidibu
        </h2>
        <Link
          href="/project/Abjdfk123412d"
          className="bg-[#FFF89F] rounded-3xl text-black py-2 my-1 px-3  hover:scale-95 text-xs gap-10 shadow-[5px_5px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] duration-200 font-monument_reg border border-black text-center min-w-fit max-md:mx-auto max-md:px-5"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default MarketPlaceCard;
