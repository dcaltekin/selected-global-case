import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailFooter,
  PhoneFooter,
} from "../lib/icons";

export default function Footer() {
  return (
    <>
      <div className="bg-[#EFEFFB] w-full  h-[1.5px]  mt-[50px]"></div>
      <div className="container mx-auto mt-[50px] mb-[50px]">
        <div className="flex justify-between gap-x-4">
          <div className="grid grid-cols-5  text-[14px]">
            <ul className="flex flex-col gap-y-[12px]">
              <li className="text-[#00145C] font-medium">Menu</li>
              <li className="text-[#818181]">Home</li>
              <li className="text-[#818181]">Projects</li>
              <li className="text-[#818181]">Lands</li>
            </ul>
            <ul className="flex flex-col gap-y-[12px]">
              <li className="text-[#00145C] font-medium">Property</li>
              <li className="text-[#818181]">For Rent</li>
              <li className="text-[#818181]">For Sale</li>
            </ul>
            <ul className="flex flex-col gap-y-[12px]">
              <li className="text-[#00145C] font-medium">More</li>
              <li className="text-[#818181]">About us</li>
              <li className="text-[#818181]">Blog</li>
              <li className="text-[#818181]">Contact</li>
            </ul>
            <ul className="flex flex-col gap-y-[12px]">
              <li className="text-[#00145C] font-medium">Sell</li>
              <li className="text-[#818181]">Property</li>
              <li className="text-[#818181]">Lands</li>
            </ul>
            <ul className="flex flex-col gap-y-[12px]">
              <li className="text-[#00145C] font-medium">Company</li>
              <li className="text-[#818181]">Terms and Conditions</li>
              <li className="text-[#818181]">Privacy Policy</li>
            </ul>
          </div>
          <div className="flex gap-x-[24px]">
            <FacebookIcon />
            <div className="h-[25px] w-[1px] bg-[#E0DEF7]"></div>
            <InstagramIcon />
            <div className="h-[25px] w-[1px] bg-[#E0DEF7]"></div>
            <LinkedinIcon />
          </div>
        </div>
        <div className="bg-[#EFEFFB] w-full  h-[1.5px]  mt-[100px]"></div>
        <div className="flex justify-between mt-[40px]">
          <div className="flex gap-x-[30px]">
            <button className="px-[22px] py-[7px] rounded-[8px] text-[#00145C] text-[12px] flex gap-x-[6px] border-[1px] border-[#E0DEF7]">
              <PhoneFooter />
              +90 539 114 4525
            </button>
            <button className="px-[22px] py-[7px] rounded-[8px] text-[#00145C] text-[12px] flex gap-x-[6px] border-[1px] border-[#E0DEF7]">
              <MailFooter />
              info@selectedglobal.com
            </button>
          </div>
          <div className="font-medium text-[12px] text-[#878787]">
            2024 Selected Global. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}
