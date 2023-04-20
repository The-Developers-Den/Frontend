import React from "react";
import Image from "next/image";
const create = () => {
  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto min-h-[80vh]">
      <form className="bg-[#FFF253] rounded-lg border border-[#ffffff]  my-5 md:my-10 px-5 w-[77%] lg:w-[70%] mx-auto text-black flex flex-col py-5 font-monument_reg shadow-[10px_10px_0px_#7843E8] ">
        <h2 className="text-2xl my-2 text-[#7843E8] font-otf ">
          Create Project
        </h2>
        <label className="text-sm font-thin my-2">Project Name</label>
        <input
          type="text"
          placeholder="Enter event name"
          className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%]  "
        />
        <label className="text-sm font-thin my-2">Project Description</label>
        <input
          type="text"
          placeholder="Enter event description"
          className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%]"
        />
        <label className="text-sm font-thin my-2">Pledge Price</label>
        <input
          type="number"
          placeholder="Enter ticket price"
          className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%] "
        />
        <label className="text-sm font-thin my-2">Project Image</label>
        <Image
          src={"/Image-placeholder.png"}
          width="120"
          height="120"
          alt="ticket-img"
          className="rounded-lg my-1 mb-2"
        />
        <input type="file" />
        <button className="bg-[#7843E8] rounded-3xl text-white p-3 my-7 hover:scale-95 text-xs gap-10 shadow-[5px_5px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] duration-200 font-monument_reg border border-black  w-[30%] ">
          Create
        </button>
      </form>
    </div>
  );
};

export default create;
