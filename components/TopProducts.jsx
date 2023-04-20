import React from "react";
import TopProductsCard from "./TopProductsCard";

const TopProducts = () => {
  return (
    <div className="min-h-[30vh] bg-[#7843E8] ">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto grid md:grid-cols-2 gap-2 content-center max-md:grid-rows-2  py-2 md:py-8 ">
        <TopProductsCard />
        <TopProductsCard />
      </div>
    </div>
  );
};

export default TopProducts;
