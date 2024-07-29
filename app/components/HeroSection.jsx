"use client";
import React, { useState, useRef } from "react";
import {
  Area,
  ArrowLeft,
  ArrowRight,
  Floor,
  Heart,
  HeartMobile,
  House,
  Phone,
  SeeAll,
  Share,
  ShareMobile,
} from "../lib/icons";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex + 1);
  };

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const imageData = [
    {
      src: "/bg.jpg",
      width: 566,
      height: 450,
      alt: "bg",
      colSpan: 6,
      rowSpan: 2,
    },
    {
      src: "/bg2.jpg",
      width: 268,
      height: 223,
      alt: "bg",
      colSpan: 3,
      rowSpan: 1,
    },
    {
      src: "/bg4.jpg",
      width: 268,
      height: 223,
      alt: "bg",
      colSpan: 3,
      rowSpan: 1,
    },
    {
      src: "/bg3.jpg",
      width: 268,
      height: 223,
      alt: "bg",
      colSpan: 3,
      rowSpan: 1,
    },
    {
      src: "/bg5.jpg",
      width: 268,
      height: 223,
      alt: "bg",
      colSpan: 3,
      rowSpan: 1,
      button: true,
    },
  ];

  return (
    <div className="container mx-auto mt-[24px] px-4 lg:px-0">
      <div className="flex flex-col">
        <div className="flex justify-between order-last md:order-first">
          <h1 className="text-[#00145C] font-medium text-[24px] lg:text-[28px] -tracking-[1px]">
            2+1 For Rent in Sakarya, Famagusta
          </h1>
          <div className="hidden md:flex gap-x-[20px]">
            <button className="border-[1px] border-[#E0DEF7] rounded-[8px] flex gap-x-[6px] py-[7px] px-[16px] items-center text-[#00145C] text-[14px] -tracking-[4%]">
              <Share /> Share
            </button>
            <button className="border-[1px] border-[#E0DEF7] rounded-[8px] flex gap-x-[6px] py-[7px] px-[16px] items-center text-[#00145C] text-[14px] -tracking-[4%]">
              <Heart /> Save
            </button>
          </div>
        </div>
        {/* for tablet */}
        <div className="my-[24px] block lg:hidden">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {imageData.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <Image
                    src={image.src}
                    width={500}
                    height={500}
                    alt={image.alt}
                    className="object-cover w-full h-[394px]"
                  />
                  <div className="flex md:hidden gap-x-[10px] absolute top-[20px] right-[16px]">
                    <div className=" flex items-center justify-center bg-white w-[26px] h-[26px] rounded-[8px]">
                      <ShareMobile />
                    </div>
                    <div className=" flex md:hidden items-center justify-center bg-white w-[26px] h-[26px] rounded-[8px]">
                      <HeartMobile />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={goToPreviousSlide}
            className=" absolute z-[40] top-[148px] left-8 xs:left-20 flex md:hidden items-center justify-center bg-white w-[26px] h-[26px] rounded-[8px]"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute z-[40] top-[148px] left-16 xs:left-28 flex md:hidden items-center justify-center bg-white w-[26px] h-[26px] rounded-[8px]"
          >
            <ArrowRight />
          </button>
          <button className="flex md:hidden absolute top-[450px] right-8 xs:right-20  z-[40] bg-white rounded-[8px] w-[70px] justify-center text-[#00145C] text-[14px] -tracking-[4%] py-[6px] px-[27px]  gap-x-[6px] items-center">
            {currentSlide}/{imageData.length}
          </button>
          <button className="hidden md:flex absolute bottom-8 right-[17%] transform translate-x-[20%] z-40 bg-white rounded-[8px] w-[210px] justify-center text-[#00145C] text-[14px] -tracking-[4%] py-[9px] px-[27px]  gap-x-[6px] items-center">
            <SeeAll /> See all photographs
          </button>
        </div>
      </div>

      {/* for desktop */}
      <div className="my-[24px] hidden lg:grid grid-cols-12 gap-[4px]">
        <div className="col-span-6">
          <Image
            src={imageData[0].src}
            width={imageData[0].width}
            height={imageData[0].height}
            alt={imageData[0].alt}
            className="object-cover w-full h-[450px]"
          />
        </div>
        <div className="col-span-3 grid gap-[4px]">
          {imageData.slice(1, 3).map((image) => (
            <Image
              key={image.src}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              className="object-cover w-full h-[223px]"
            />
          ))}
        </div>
        <div className="col-span-3 grid gap-[4px]">
          {imageData.slice(3, 5).map((image) => (
            <div key={image.src} className="relative">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className="object-cover w-full h-[223px]"
              />
              {image.button && (
                <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-[8px] w-[210px] text-[#00145C] text-[14px] -tracking-[4%] py-[9px] px-[27px] flex gap-x-[6px] items-center">
                  <SeeAll /> See all photographs
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[24px] flex flex-col md:flex-row justify-between">
        <div className="font-medium">
          <div className="text-[#00145C] text-[20px]">Sakarya, Famagusta</div>
          <div className="mt-[6px] md:mt-[24px] text-[#6C727F]">
            Listing date: 02.03.2024
          </div>
        </div>
        <div className="font-medium mt-[24px] md:mt-0">
          <div className="text-[#00145C] text-[28px] md:text-right">600 £</div>
          <div className="mt-[6px] md:mt-[24px] text-[#6C727F]">
            TRY 24,603.58
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[345px] lg:w-[540px] pb-24 mt-[29px] order-last md:order-first">
          <div className="bg-[#EFEFFB] w-full md:w-[345px] lg:w-[540px] h-[1.5px]"></div>
          <div className="py-[24px] grid grid-cols-2 xl:grid-cols-3 place-items-center gap-y-4">
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
          <div className="bg-[#EFEFFB] w-full md:w-[540px] h-[1.5px]"></div>
        </div>
        <button className="bg-[#00145C] rounded-[8px] text-white w-[255px] py-[9px] h-[48px] mt-[24px] flex gap-x-[8px] justify-center items-center">
          <Phone />
          Contact Now
        </button>
      </div>
    </div>
  );
}
