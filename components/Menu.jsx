import React from "react";
import Link from "next/link";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Projects", url: "/", ele: "events" },
  { id: 3, name: "Create", url: "/create" },
];

const Menu = () => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-monument_reg text-base">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className="cursor-pointer hover:scale-95 duration-300">
              {item.ele ? (
                <Link href={`#${item.ele}`}>{item.name}</Link>
              ) : (
                <Link href={item?.url}>{item.name}</Link>
              )}
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
