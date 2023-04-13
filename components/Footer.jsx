import React from "react";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <footer className="w-full h-[100px] md:h-[120px] border-t flex flex-col items-center justify-between z-20  font-monument_reg ">
      <FooterMenu />
      <h2 className="text-[10px] my-2">2023 © All rights reserved</h2>
    </footer>
  );
};

export default Footer;
