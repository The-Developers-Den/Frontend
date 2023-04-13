import React from "react";
import Link from "next/link";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Projects", url: "/about" },
  { id: 3, name: "About", url: "/contact" },
  //   { id: 4, name: "About", url: "/contact" },
];

const Menu = () => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-monument_reg text-base">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className="cursor-pointer">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
