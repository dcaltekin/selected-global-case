import React from "react";

export default function Breadcrumb() {
  return (
    <div className="container mx-auto mt-[24px] hidden md:flex gap-x-[12px] text-[12px] text-[#6C727F] font-medium px-4 md:px-0">
      <div>Home</div>
      <div>-</div>
      <div>Property</div>
      <div>-</div>
      <div>For Rent</div>
      <div>-</div>
      <div className="text-[#008DB9] ">2+1 For Rent in Sakarya, Famagusta</div>
    </div>
  );
}
