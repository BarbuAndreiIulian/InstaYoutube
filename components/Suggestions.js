import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(
      [...Array(5)].map((profile) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
      }))
    );
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mt-3">
        <p className="text-sm font-semibold text-gray-400">
          Suggestions for you
        </p>
        <p className="font-semibold text-xs">See All</p>
      </div>
      <div>
        {suggestions.map((profile) => (
          <div className="flex justify-between mt-4" key={profile.userId}>
            <div className="flex items-center">
              <img
                src={profile.avatar}
                alt=""
                className="rounded-full w-8 h-8 mr-3"
              />
              <div className="">
                <p className="text-sm font-semibold">{profile.username}</p>
                <p className="text-xs text-gray-500">Suggested for you</p>
              </div>
            </div>

            <button className="text-xs font-semibold text-[#0095f6]">
              Follow
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap text-xs mt-6 text-semibold text-[#d2d2d2] space-x-1">
        <p className="infoBtn">About</p>
        <span>&#183;</span>
        <p className="infoBtn">Help</p>
        <span>&#183;</span>
        <p className="infoBtn">Press</p>
        <span>&#183;</span>
        <p className="infoBtn">API</p>
        <span>&#183;</span>
        <p className="infoBtn">Jobs</p>
        <span>&#183;</span>
        <p className="infoBtn">Privacy</p>
        <span>&#183;</span>
        <p className="infoBtn">Terms</p>
        <span>&#183;</span>
        <p className="infoBtn">Locations</p>
        <span>&#183;</span>
        <p className="infoBtn mt-1">Language</p>
      </div>
      <p className="text-xs mt-6 text-semibold text-[#d2d2d2]">
        © 2022 INSTAGRAM FROM META
      </p>
    </div>
  );
};

{
  /* <div className="flex items-center flex-wrap text-xs mt-6 text-semibold text-[#d2d2d2] space-x-1">
        <p className="infoBtn ">About</p>
        <span className="">&#183;</span>
        <p className="infoBtn">Help</p>
        <span>&#183;</span>
        <p className="infoBtn">Press</p>
        <span>&#183;</span>
        <p className="infoBtn">API</p>
        <span>&#183;</span>
        <p className="infoBtn">Jobs</p>
        <span>&#183;</span>
        <p className="infoBtn">Privacy</p>
        <span>&#183;</span>
        <p className="infoBtn">Terms</p>
        <span>&#183;</span>
        <p className="infoBtn">Locations</p>
        <span>&#183;</span>
        <p className="pt-1 infoBtn">Language</p>
      </div> */
}

export default Suggestions;
