"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      pathname: "/",
    },
    {
      name: "About",
      pathname: "/About",
    },
    {
      name: "Tour",
      pathname: "/Tour",
    },
    {
      name: "Hotels",
      pathname: "/Hotels",
    },
    {
      name: "Blog",
      pathname: "/Blog",
    },
    {
      name: "Contact",
      pathname: "/Contact",
    },
  ];

  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center h-20 px-5 py-3 xl:py-0 xl:px-4 z-50 text-white">
      <div className="flex w-[1110px] justify-between items-center">
        <div className="">
          <div className="text-xl font-bold ">DirEngine.</div>
        </div>
        <div className="md:hidden">
          <AiOutlineMenu size={30} color={"red"} />
        </div>
        <ul className="flex space-x-10 text-base font-semibold sx:hidden md:flex">
          {links.map((link: { name: string; pathname: string }) => {
            return (
              <Link
                key={link.name}
                className={`${
                  pathname === link.pathname ? "text-[#f85959]" : ""
                }`}
                href={link.pathname}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
