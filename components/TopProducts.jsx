import React from "react";
import TopProductsCard from "./TopProductsCard";

const TopProducts = () => {
  return (
    <div className="min-h-[60vh] bg-[#7843E8] grid md:grid-cols-2 gap-2 content-center max-md:grid-rows-2 px-5 py-2">
      <TopProductsCard />
      <TopProductsCard />
    </div>
  );
};

export default TopProducts;
