import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const data = [
  { id: 1, name: "Fund Me", url: "/" },
  { id: 2, name: "All Projects", url: "/about" },
  { id: 3, name: "Top Projects", url: "/contact" },
  { id: 4, name: "Discord", url: "/contact" },
  { id: 5, name: "Connect", url: "/contact", selected: true },
];

const FooterMenu = () => {
  const router = useRouter();
  return (
    <ul className="hidden md:flex items-center gap-8 font-monument_reg text-base my-4">
      {data.map((item) => {
        return item.selected ? (
          <React.Fragment key={item.id}>
            <li className="cursor-pointer border py-2 rounded-2xl px-4 bg-[#7843E8] border-[black] shadow-[5px_5px_0px_#FFFFFF] hover:scale-95 duration-200 ">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment key={item.id}>
            <li className="cursor-pointer border py-2 rounded-2xl px-4 hover:scale-95 duration-200">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default FooterMenu;
