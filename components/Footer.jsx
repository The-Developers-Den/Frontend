import React from "react";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <footer className="w-full h-[100px] md:h-[120px] border-t  z-20  font-monument_reg ">
      <div className="w-full max-w-[1280px] flex flex-col items-center justify-between px-5 md:px-10 mx-auto">
        <FooterMenu />
        <h2 className="text-[10px] my-2">2023 © All rights reserved</h2>
      </div>
    </footer>
  );
};

export default Footer;
