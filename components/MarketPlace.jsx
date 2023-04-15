import React from "react";
import MarketPlaceCard from "./MarketPlaceCard";

const MarketPlace = () => {
  return (
    <div className="min-h-[60vh] bg-[#FFF253] grid grid-cols-2 grid-flow-row gap-5 px-5 py-4">
      <MarketPlaceCard />
      <MarketPlaceCard />
      <MarketPlaceCard />
      <MarketPlaceCard />
      <MarketPlaceCard />
      <MarketPlaceCard />
    </div>
  );
};

export default MarketPlace;
