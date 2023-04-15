import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import Menu from "./Menu";
import { useAccount, useConnect } from "wagmi";
import MenuMobile from "./MenuMobile";

import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] border-b flex items-center justify-between z-20  top-0 transition-transform duration-300 font-monument_reg`}
    >
      <div className="w-full max-w-screen px-5 md:px-10 mx-auto h-[60px] flex justify-between items-center">
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
          {isConnected && (
            <div className="bg-white rounded-3xl text-black px-3 py-2 hover:scale-95 text-sm gap-10 shadow-[5px_5px_0px_#7843E8] duration-200">
              {address.slice(0, 4).concat("...").concat(address.slice(-4))}
            </div>
          )}

          {!isConnected &&
            connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                className="bg-white rounded-3xl text-black px-3 py-2 hover:scale-95 text-sm gap-10 shadow-[5px_5px_0px_#7843E8] duration-200"
                onClick={() => connect({ connector })}
              >
                Connect Wallet
                {isLoading &&
                  pendingConnector?.id === connector.id &&
                  " (connecting)"}
              </button>
            ))}

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
