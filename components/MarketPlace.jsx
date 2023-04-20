import React from "react";
import MarketPlaceCard from "./MarketPlaceCard";

const MarketPlace = () => {
  return (
    <div id="events" className="min-h-[60vh] bg-[#FFF253] ">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 lg:gap-10 grid-flow-row gap-5 ">
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
      </div>
    </div>
  );
};

export default MarketPlace;
