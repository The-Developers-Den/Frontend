import React from "react";
import Image from "next/image";
const TopProductsCard = () => {
  return (
    <div className="flex min-h-fit justify-center hover:scale-105 duration-300 p-5">
      <div className="border-2 border-white shadow-[8px_8px_0_#FFF253] min-w-[22vw] max-w-[25vw] bg-black rounded-lg mx-4 h-[330px] flex justify-center content-center">
        <Image
          src={"/hero-img.png"}
          width={200}
          height={200}
          alt="top-product"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center mx-1">
        <h2 className="font-otf text-2xl">Text</h2>
        <h2 className="font-monument_bold text-sm my-1">SubText</h2>
        <h2 className="font-monument_reg text-xs my-2">
          Lorem ing elit. Qui dicta minus molestiae vel beatae natus eveniet
          ratione temporibus aperiam harum alias officiis assumenda officia
          quibusdam deleniti eos cupiditate dolore doloribu
        </h2>
      </div>
    </div>
  );
};

export default TopProductsCard;
