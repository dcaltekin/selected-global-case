"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowDown, BritishFlag, Hamburger } from "../lib/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navbarElements = [
    {
      id: 1,
      name: "Home",
      arrowDown: false,
    },
    {
      id: 2,
      name: "Property",
      arrowDown: true,
    },
    {
      id: 3,
      name: "Lands",
      arrowDown: false,
    },
    {
      id: 4,
      name: "More",
      arrowDown: true,
    },
    {
      id: 5,
      name: "Sell",
      arrowDown: false,
    },
  ];
  return (
    <div
      className={
        isOpen
          ? "container mx-auto py-[20px] flex justify-between items-center px-4 lg:px-0 sticky top-0 z-[50]"
          : "container mx-auto py-[20px] flex justify-between items-center px-4 lg:px-0"
      }
    >
      <Image
        src="/logo.svg"
        width={180}
        height={28}
        alt="logo"
        className="static z-[60]"
      />
      <ul className="text-[14px] text-[#00145C] hidden lg:flex gap-x-[36px]">
        {navbarElements.map((element) => (
          <li
            key={element.id}
            className="group relative flex gap-x-[10px] items-center cursor-pointer"
          >
            {element.name}
            {element.arrowDown ? <ArrowDown /> : null}
            <span className="top-[25px] absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#008DB9] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
        ))}
      </ul>

      <div className="flex gap-x-[24px] items-center static z-[60]">
        <BritishFlag />

        <div className="bg-[#E0DEF7] h-[40px] w-[1px]"></div>
        <button className="bg-[#00145C] rounded-[8px] text-white w-[159px] py-[9px] hidden lg:block">
          Sign in
        </button>
        <button onClick={toggleMenu} className="block lg:hidden ">
          <Hamburger />
        </button>
      </div>

      {isOpen && (
        <div className="fixed lg:hidden inset-0 bg-gray-400 text-white py-4 pt-24 flex flex-col h-screen px-4 lg:px-0 z-50  ">
          <ul className="text-[14px] flex flex-col gap-y-4 container mx-auto px-4 lg:px-0">
            {navbarElements.map((element) => (
              <li
                key={element.id}
                className="group relative flex gap-x-[10px] items-center cursor-pointer"
                onClick={toggleMenu}
              >
                {element.name}
                {element.arrowDown ? <ArrowDown /> : null}
              </li>
            ))}
            <li>
              <button className="bg-[#00145C] rounded-[8px] text-white w-[159px] py-[9px] mt-4">
                Sign in
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
