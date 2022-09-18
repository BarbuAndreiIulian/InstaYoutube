import React, { Profiler } from "react";
import profile from "../assets/profile.jpg";

const MiniProfile = () => {
  return (
    <div className="flex justify-between mt-8">
      <div className="flex items-center">
        <img src={profile.src} alt="" className="w-14 h-14 rounded-full mr-4" />
        <p className="text-sm font-semibold">Andrei Barbu</p>
      </div>
      <button className="text-xs font-semibold text-[#0095f6]">Sign out</button>
    </div>
  );
};

export default MiniProfile;
