import Image from "next/image";
import React from "react";
import { ArrowDown, BritishFlag } from "../lib/icons";

export default function Navbar() {
  return (
    <div className="container mx-auto py-[20px] flex justify-between items-center">
      <Image src="/logo.svg" width={180} height={28} alt="logo" />
      <ul className="text-[14px] text-[#00145C] flex gap-x-[36px]">
        <li className="group relative font-medium cursor-pointer">
          Home
          <span className="top-[25px] absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#008DB9] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="group relative flex gap-x-[10px] items-center cursor-pointer">
          Property
          <ArrowDown />
          <span className="top-[25px] absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#008DB9] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="group relative cursor-pointer">
          Lands
          <span className="top-[25px] absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#008DB9] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="group relative flex gap-x-[10px] items-center cursor-pointer">
          More
          <ArrowDown />
          <span className="top-[25px] absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#008DB9] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="group relative cursor-pointer">
          Sell
          <span className="top-[25px] absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#008DB9] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
      </ul>
      <div className="flex gap-x-[24px] items-center">
        <BritishFlag />
        <div className="bg-[#E0DEF7] h-[40px] w-[1px]"></div>
        <button className="bg-[#00145C] rounded-[8px] text-white w-[159px] py-[9px]">
          Sign in
        </button>
      </div>
    </div>
  );
}
