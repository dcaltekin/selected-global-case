"use client";
import React, { useState } from "react";
import { ArrowRightSeeAll, HeartProjects } from "../lib/icons";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function SimilarProjects() {
  const [filledHearts, setFilledHearts] = useState({});

  const toggleHeart = (id) => {
    setFilledHearts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const projects = [
    {
      id: 1,
      price: "600 £",
      title: "2+1 Flat For Rent In Sakarya, Famagusta",
      location: "Sakarya, Famagusta (K.K.T.C)",
      details: "2 Beds - 1 Bathrooms - 80 m²",
      images: ["/project.jpg", "/project2.jpg"],
    },
    {
      id: 2,
      price: "700 £",
      title: "2+1 Flat For Rent In Sakarya, Famagusta",
      location: "Sakarya, Famagusta (K.K.T.C)",
      details: "2 Beds - 1 Bathrooms - 80 m²",
      images: ["/project2.jpg", "/project.jpg"],
    },
    {
      id: 3,
      price: "800 £",
      title: "2+1 Flat For Rent In Sakarya, Famagusta",
      location: "Sakarya, Famagusta (K.K.T.C)",
      details: "2 Beds - 1 Bathrooms - 80 m²",
      images: ["/project.jpg", "/project2.jpg"],
    },
    {
      id: 4,
      price: "900 £",
      title: "2+1 Flat For Rent In Sakarya, Famagusta",
      location: "Sakarya, Famagusta (K.K.T.C)",
      details: "2 Beds - 1 Bathrooms - 80 m²",
      images: ["/project2.jpg", "/project.jpg"],
    },
  ];
  return (
    <div className="container mx-auto mt-[24px] px-4 lg:px-0">
      <div className="flex justify-between items-center">
        <h1 className="text-[#00145C] text-[20px] font-medium -tracking-[4%]">
          Similar Projects
        </h1>
        <button className="border-[1px] border-[#E0DEF7] px-[16px] py-[12px] flex gap-x-[6px] text-[#00145C] rounded-[8px] items-center">
          See all
          <ArrowRightSeeAll />
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:hidden gap-y-[25px] gap-x-[30px] mt-[24px] ">
        {projects.slice(0, 2).map((project) => (
          <div
            key={project.id}
            className="relative w-full cursor-pointer rounded-[8px] overflow-hidden group "
          >
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper rounded-[8px] overflow-hidden"
              loop
            >
              {project.images.map((image) => (
                <SwiperSlide key={image.id}>
                  <Image
                    src={image}
                    width={255}
                    height={232}
                    alt="project image"
                    className="w-full object-cover scale-100 hover:scale-110 transition-all duration-500 h-[232px] "
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={() => toggleHeart(project.id)}
              className="absolute z-[100] top-4 right-4 w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-colors duration-300 ${
                  filledHearts[project.id]
                    ? "fill-current text-blue-900"
                    : "fill-none"
                }`}
              >
                <path
                  d="M9.35087 13.8733C9.12421 13.9533 8.75087 13.9533 8.52421 13.8733C6.59087 13.2133 2.27087 10.46 2.27087 5.79335C2.27087 3.73335 3.93087 2.06668 5.97754 2.06668C7.19087 2.06668 8.26421 2.65335 8.93754 3.56001C9.61087 2.65335 10.6909 2.06668 11.8975 2.06668C13.9442 2.06668 15.6042 3.73335 15.6042 5.79335C15.6042 10.46 11.2842 13.2133 9.35087 13.8733Z"
                  stroke="#00145C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex flex-col gap-y-[13px] leading-[100%]">
              <div className="mt-[13px] text-[#008DB9] font-bold">
                {project.price}
              </div>
              <div className="text-[#00145C] font-medium text-[13px]">
                {project.title}
              </div>
              <div className="text-[12px] text-[#6C727F] font-medium">
                {project.location}
              </div>
              <div className="text-[#6C727F] font-medium text-[12px]">
                {project.details}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" hidden lg:grid grid-cols-4 gap-x-[30px] mt-[24px] ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full cursor-pointer rounded-[8px] overflow-hidden group "
          >
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper rounded-[8px] overflow-hidden"
              loop
            >
              {project.images.map((image) => (
                <SwiperSlide key={image.id}>
                  <Image
                    src={image}
                    width={255}
                    height={232}
                    alt="project image"
                    className="w-full object-cover scale-100 hover:scale-110 transition-all duration-500 "
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={() => toggleHeart(project.id)}
              className="absolute z-[100] top-4 right-4 w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-colors duration-300 ${
                  filledHearts[project.id]
                    ? "fill-current text-blue-900"
                    : "fill-none"
                }`}
              >
                <path
                  d="M9.35087 13.8733C9.12421 13.9533 8.75087 13.9533 8.52421 13.8733C6.59087 13.2133 2.27087 10.46 2.27087 5.79335C2.27087 3.73335 3.93087 2.06668 5.97754 2.06668C7.19087 2.06668 8.26421 2.65335 8.93754 3.56001C9.61087 2.65335 10.6909 2.06668 11.8975 2.06668C13.9442 2.06668 15.6042 3.73335 15.6042 5.79335C15.6042 10.46 11.2842 13.2133 9.35087 13.8733Z"
                  stroke="#00145C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex flex-col gap-y-[13px] leading-[100%]">
              <div className="mt-[13px] text-[#008DB9] font-bold">
                {project.price}
              </div>
              <div className="text-[#00145C] font-medium text-[13px]">
                {project.title}
              </div>
              <div className="text-[12px] text-[#6C727F] font-medium">
                {project.location}
              </div>
              <div className="text-[#6C727F] font-medium text-[12px]">
                {project.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
