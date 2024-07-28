import React from "react";
import { Area, Floor, Heart, House, Phone, SeeAll, Share } from "../lib/icons";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="container mx-auto mt-[24px]">
      <div className="flex justify-between">
        <h1 className="text-[#00145C] font-medium text-[28px]">
          2+1 For Rent in Sakarya, Famagusta
        </h1>
        <div className="flex gap-x-[20px]">
          <button className="border-[1px] border-[#E0DEF7] rounded-[8px] flex gap-x-[6px] py-[7px] px-[16px] items-center text-[#00145C] text-[14px] -tracking-[4%]">
            <Share /> Share
          </button>
          <button className="border-[1px] border-[#E0DEF7] rounded-[8px] flex gap-x-[6px] py-[7px] px-[16px] items-center text-[#00145C] text-[14px] -tracking-[4%]">
            <Heart /> Save
          </button>
        </div>
      </div>
      <div className="my-[24px] grid grid-cols-12 gap-[4px] ">
        <div className="col-span-6">
          <Image
            src="/bg.jpg"
            width={566}
            height={450}
            alt="bg"
            className="object-cover w-full h-[450px]"
          />
        </div>
        <div className="col-span-3 grid gap-[4px]">
          <Image
            src="/bg2.jpg"
            width={268}
            height={223}
            alt="bg"
            className="object-cover w-full h-[223px]"
          />
          <Image
            src="/bg4.jpg"
            width={268}
            height={223}
            alt="bg"
            className="object-cover w-full h-[223px]"
          />
        </div>
        <div className="col-span-3 grid gap-[4px] ">
          <Image
            src="/bg3.jpg"
            width={268}
            height={223}
            alt="bg"
            className="object-cover w-full h-[223px]"
          />
          <div className="relative">
            <Image
              src="/bg5.jpg"
              width={268}
              height={223}
              alt="bg"
              className="object-cover w-full h-[223px]"
            />
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-[8px] w-[210px]  text-[#00145C] text-[14px] -tracking-[4%] py-[9px] px-[27px] flex gap-x-[6px] items-center">
              <SeeAll /> See all photographs
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[24px] flex justify-between">
        <div className="font-medium">
          <div className="text-[#00145C] text-[20px]">Sakarya, Famagusta</div>
          <div className="mt-[24px] text-[#6C727F]">
            Listing date: 02.03.2024
          </div>
        </div>
        <div className="font-medium">
          <div className="text-[#00145C] text-[28px] text-right">600 £</div>
          <div className="mt-[24px] text-[#6C727F]">TRY 24,603.58</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[540px] pb-24 mt-[29px]">
          <div className="bg-[#EFEFFB] w-[540px] h-[1.5px]"></div>
          <div className="py-[24px] grid grid-cols-3 place-items-center">
            <div className="flex flex-col gap-y-[12px] items-center -tracking-[4%]">
              <House />
              <p className="text-[#00145C] font-medium">Rooms</p>
              <p className="text-[#878787]">2+1</p>
            </div>
            <div className="flex flex-col gap-y-[12px] items-center -tracking-[4%]">
              <Area />
              <p className="text-[#00145C] font-medium">Closed Area</p>
              <p className="text-[#878787]">180m2</p>
            </div>
            <div className="flex flex-col gap-y-[12px] items-center -tracking-[4%]">
              <Floor />
              <p className="text-[#00145C] font-medium">Floor Level</p>
              <p className="text-[#878787]">2</p>
            </div>
          </div>
          <div className="bg-[#EFEFFB] w-[540px] h-[1.5px]"></div>
        </div>
        <button className="bg-[#00145C] rounded-[8px] text-white w-[255px] py-[9px] h-[48px] mt-[24px] flex gap-x-[8px] justify-center items-center">
          <Phone />
          Contact Now
        </button>
      </div>
    </div>
  );
}
