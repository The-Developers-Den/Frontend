import React, { useEffect, useState } from "react";
// import Ticker from "react-ticker";

const Headline = ({ text }) => {
  const [show, setShow] = useState("translate-x-12");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollVal, setScrollVal] = useState(0);
  const controlNavbar = () => {
    console.log(window.scrollY, show);
    if (window.scrollY > 50) {
      let val = window.scrollY - lastScrollY;
      val += 2;
      setShow(`-translate-x-[${window.scrollY - lastScrollY}px]`);
      setScrollVal(val);
    }
    //   if (window.scrollY > lastScrollY) {
    //     console.log("here");
    //     setShow(`translate-x-[${window.scrollY - lastScrollY}rem]`);
    //   } else {
    //     setShow(`translate-x-${lastScrollY - window.scrollY}`);
    //   }
    // } else {
    //   setShow("translate-x-0");
    // }
    // setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, scroll, scrollVal]);
  return (
    <div>
      <section className="w-full relative flex content-center overflow-hidden border-b border-t  font-monument_bold text-lg py-2 whitespace-nowrap">
        {/* <marquee> */}
        <div
          className={`flex hover:-translate-x-[5rem] duration-700 ${show} whitespace-nowrap`}
        >
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="m-2 mx-5 w-fit whitespace-nowrap">
                {text}
              </div>
            ))}
        </div>
        {/* </marquee> */}
      </section>
    </div>
  );
};

export default Headline;
