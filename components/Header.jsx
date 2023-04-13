import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0yarm");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] border-b flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} font-monument_reg`}
    >
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto h-[60px] flex justify-between items-center">
        <Link href="/">
          {/* <Image
            src="/assets/logo.svg"
            className="w-[40px] md:w-[60px]"
            width="60"
            height="60"
            alt="logo"
          /> */}
          <h2 className="text-base">Roller Dao</h2>
        </Link>
        <Menu />
        {mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}
        <div className="flex font-monument_reg">
          {/* <ConnectButton
            chainStatus={{
              smallScreen: "none",
              largeScreen: "icon",
            }}
            showBalance={false}
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          /> */}
          <button className="bg-white rounded-3xl text-black px-3 py-2 hover:scale-95 text-sm gap-10 shadow-[5px_5px_0px_#7843E8]">
            Connect Wallet
          </button>
          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
