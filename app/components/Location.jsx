import React from "react";

export default function Location() {
  return (
    <div className="container mx-auto mt-[24px] px-4 lg:px-0 ">
      <div className="flex flex-col md:flex-row gap-y-[24px] justify-between md:items-center">
        <h1 className="text-[#00145C] text-[20px] font-medium -tracking-[4%]">
          Location
        </h1>
        <h2 className="text-[#000929] text-[14px]">
          We have confirmed that this is the exact location of the property.
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5488.412244246468!2d33.936930534939926!3d35.120955337090415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc837bb60e7e3%3A0xbd16908ab7925daf!2sAn%C4%B1t%20Park%2C%20Fevzi%20%C3%87akmak%20Blv%2C%20Gazima%C4%9Fusa%2099450!5e0!3m2!1str!2str!4v1722274704610!5m2!1str!2str"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-[24px] w-full h-[400px] md:h-[350px] lg:h-[400px]"
      ></iframe>
    </div>
  );
}
