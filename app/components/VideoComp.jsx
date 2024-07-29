import Image from "next/image";
import React from "react";
import { Play } from "../lib/icons";

export default function VideoComp() {
  return (
    <div className="container mx-auto mt-[24px]  px-4 lg:px-0">
      <h1 className="text-[#00145C] text-[20px] font-medium -tracking-[4%]">
        Video
      </h1>
      <div className="bg-[url(/bg.jpg)] w-full xs:w-[540px] h-[280px] bg-cover mt-[24px] bg-center flex items-center justify-center rounded-[8px]">
        <div className="w-[40px] h-[40px] rounded-[8px] bg-[#00145C] flex items-center justify-center">
          <Play />
        </div>
      </div>
      <div className="bg-[#EFEFFB] w-full md:w-[540px] h-[1.5px] mt-[24px]"></div>
    </div>
  );
}
