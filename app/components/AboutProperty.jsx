import React from "react";

export default function AboutProperty() {
  return (
    <div className="container mx-auto mt-[24px] pb-48 px-4 lg:px-0">
      <h1 className="text-[#00145C] text-[20px] font-medium -tracking-[4%]">
        About property
      </h1>
      <div className="text-[#878787] max-w-[730px] -tracking-[0.8px] leading-[21px] md:leading-[24px]">
        {" "}
        <p className="mt-[30px]">
          A charming 1+1 apartment is now available for sale in the picturesque
          area of Iskele, Long Beach.
        </p>
        <p className="mt-8">
          This property offers a modern and cozy living space, ideal for singles
          or couples looking for a serene coastal lifestyle.
        </p>
        <p>
          Located in one of the most sought-after regions, the apartment is just
          a short walk from the pristine sandy beaches and crystal-clear waters
          of Long Beach.{" "}
        </p>
        <p className="mt-8">
          The area boasts a variety of amenities including restaurants, shops,
          and recreational facilities, making it a perfect spot for both
          permanent residence and holiday getaways.{" "}
        </p>
        <p className="mt-8">
          Don’t miss the opportunity to own a piece of paradise in Iskele.
        </p>
        <div className="bg-[#EFEFFB] w-full md:w-[540px] h-[1.5px] mt-[24px]"></div>
      </div>
    </div>
  );
}
