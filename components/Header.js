import Image from "next/image";
import React from "react";
import home from "../assets/home.png";
import message from "../assets/message.png";
import upload from "../assets/upload.png";
import discover from "../assets/discover.png";
import hearth from "../assets/hearth.png";
import search from "../assets/search.png";
import arrowdown from "../assets/arrowdown.png";
import instagram from "../assets/instagram.png";
import profile from "../assets/profile.jpg";

const Header = () => {
  return (
    <div className="border shadow-sm ">
      <div className="flex justify-between items-center  h-16 px-2 max-w-5xl mx-auto  ">
        {/* Left */}
        <div className="flex  ">
          <div className="flex h-full  w-28">
            <Image src={instagram} />
          </div>

          <div className="w-3 h-3 mt-1">
            <Image src={arrowdown} />
          </div>
        </div>
        {/* Middle */}
        <div className="hidden sm:flex relative mx-4  ">
          <div className="absolute flex items-center h-full w-3 ml-2">
            <Image src={search} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="h-9 w-full rounded-md pl-8 bg-[#efefef] outline-0"
          />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <div className="Btn hidden sm:flex">
            <Image src={home} alt="" />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={message} alt="" />
          </div>
          <div className="Btn">
            <Image src={upload} alt="" />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={discover} alt="" />
          </div>
          <div className="Btn hidden sm:flex">
            <Image src={hearth} alt="" />
          </div>
          <div className="flex">
            <div className="Btn">
              <img src={profile.src} alt="" className="rounded-full" />
            </div>
            <p className="cursor-pointer text-[#0095f6] font-semibold ml-4 whitespace-nowrap">
              Sign out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
