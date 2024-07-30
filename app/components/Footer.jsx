import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailFooter,
  PhoneFooter,
} from "../lib/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-[#EFEFFB] w-full  h-[1.5px]  mt-[50px]"></div>
      <div className="container mx-auto mt-[50px] mb-[50px] px-4 lg:px-0">
        <div className="flex flex-col md:flex-row gap-y-[50px] justify-between gap-x-4">
          <div className="flex flex-col md:flex-row gap-y-[24px] gap-x-[64px] order-1">
            <div className="grid grid-cols-4 gap-x-[24px] md:gap-x-[64px]  text-[14px]">
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
            </div>
            <div className="text-[14px]">
              <div className="text-[#00145C] font-medium">Company</div>
              <div className="text-[#818181] flex flex-row  md:flex-col gap-[12px] mt-[12px]">
                <div>Terms and Conditions </div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[24px] order-2">
            <FacebookIcon />
            <div className="h-[25px] w-[1px] bg-[#E0DEF7]"></div>
            <InstagramIcon />
            <div className="h-[25px] w-[1px] bg-[#E0DEF7]"></div>
            <LinkedinIcon />
          </div>
        </div>
        <div className="bg-[#EFEFFB] w-full  h-[1.5px]  mt-[100px]"></div>
        <div className="flex flex-col md:flex-row gap-y-[50px] justify-between mt-[40px]">
          <div className="flex gap-x-[30px] -tracking-[0.9px]">
            <Link
              href="tel:905391144525"
              className="px-4 md:px-[22px] py-[7px] rounded-[8px] text-[#00145C] text-[12px] flex gap-x-[6px] border-[1px] border-[#E0DEF7]"
            >
              <PhoneFooter />
              +90 539 114 4525
            </Link>
            <Link
              href="mailto:info@selectedglobal.com"
              className="px-4 md:px-[22px] py-[7px] rounded-[8px] text-[#00145C] text-[12px] flex gap-x-[6px] border-[1px] border-[#E0DEF7]"
            >
              <MailFooter />
              info@selectedglobal.com
            </Link>
          </div>

          <div className="font-medium text-[12px] text-[#878787]">
            2024 Selected Global. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}
