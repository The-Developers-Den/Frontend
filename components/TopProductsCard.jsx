import React from "react";
import Image from "next/image";
const TopProductsCard = () => {
  return (
    <div className="flex min-h-fit justify-center hover:scale-105 duration-300 p-5  max-md:flex-col">
      <div className="border-2 border-white shadow-[8px_8px_0_#FFF253] min-w-fit bg-black rounded-lg mx-4  flex justify-center content-center max-md:my-4 max-md:mx-auto p-5  md:p-10 ">
        <Image
          src={"/hero-img.png"}
          width={200}
          height={200}
          alt="top-product"
          className="object-contain "
        />
      </div>
      <div className="flex flex-col justify-center mx-1 max-md:text-center">
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
