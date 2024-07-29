import React from "react";

export default function Subscribe() {
  return (
    <div className="container mx-auto mt-[50px] px-4 lg:px-0 flex flex-col gap-y-[24px] max-w-[445px] pb-24">
      <h1 className="text-[#00145C] text-center text-[22px] font-medium">
        Don't Miss The Latest Updates And Campaigns
      </h1>
      <h2 className="text-[14px] text-[#878787] text-center">
        Join our email list to access the most current information and follow
        our special campaigns.
      </h2>
      <div className="flex   w-full relative h-12">
        <input
          placeholder="Enter your email"
          className=" w-screen px-3 py-[27px] border border-gray-300 rounded-[8px] placeholder:text-[#D8D8D8] "
          type="email"
          name="email"
        />
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-[14px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  hover:bg-[#000E41] absolute w-[110px] h-[42px] right-[7px] top-[7px] bg-[#00145C] text-white px-4 py-2 rounded-[8px]"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
