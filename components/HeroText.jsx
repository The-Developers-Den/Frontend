import React from "react";

const HeroText = () => {
  return (
    <div className="md:basis-[50%] text-center px-5  md:border-r font-otf">
      <div className="w-full relative h-full flex flex-col max-md:justify-center justify-center">
        <h1 className="md:text-7xl max-md:text-6xl">Lending</h1>
        <h1 className="md:text-7xl max-md:text-6xl ">World</h1>
        <h2 className="text-[#A3A3A3] my-5 md:text-sm max-md:text-xs font-monument_reg">
          We aim to grow as a crowdfunding platform to help users build their
          dreams and help others to achieve what they want to create.
        </h2>
        <span className="max-md:hidden absolute bottom-5 -right-16 rounded-full text-white bg-[#454545] h-20 w-20 flex justify-center content-center">
          <svg
            width="70"
            height="70"
            viewBox="0 0 15 15"
            fill="none"
            className="my-auto border-2 rounded-full p-4 border-dashed font-bold "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default HeroText;
