import React from "react";
import Image from "next/image";
const Ticket = () => {
  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto min-h-[500px]">
      <div className="flex gap-2 content-center justify-center my-5 md:my-10 py-5">
        <div className="border-2 border-[#fff] shadow-[8px_8px_0_#7843E8] hover:shadow-[2px_2px_0px_#7843E8] w-[30%] bg-[#fff]  rounded-md mx-5 min-h-fit my-2">
          <Image
            src={"/demo-event.png"}
            width={350}
            height={350}
            alt="top-product"
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center mx-4 w-[40%]">
          <h2 className="font-otf text-3xl text-[#7843E8]">Text</h2>
          <h2 className="font-monument_bold text-sm my-1">SubText</h2>
          <h2 className="font-monument_reg text-sm my-1">Dec 13, 2023</h2>
          <h2 className="font-monument_reg text-xs my-2 text-white">
            Lorem ing elit. Qui dicta minus molestiae vel beatae natus eveniet
            ratione temporibus aperiam harum alias officiis assumenda officia
            quibusdam deleniti eos cupidibu bus aperiam harum alias officiis
            assumenda officia quibusdam deleniti eos cupidibu
          </h2>

          <button className="bg-[#7843E8] rounded-3xl text-white px-3 my-1 hover:scale-95 text-xs gap-10 shadow-[5px_5px_0px_#fff] hover:shadow-[2px_2px_0px_#FFFFFF] duration-200 font-monument_reg border border-black py-4 w-[40%]">
            Buy for 7 ETH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
