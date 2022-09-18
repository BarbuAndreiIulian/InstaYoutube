import React, { useEffect, useState } from "react";
import Story from "./Story";
import { faker } from "@faker-js/faker";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(
      [...Array(30)].map((profile) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
      }))
    );
  }, []);
  console.log(stories);

  return (
    <div>
      <div className="flex space-x-4 p-5 bg-white border overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 mx-1 rounded-lg  ">
        {stories.map((profile) => (
          <Story
            key={profile.userId}
            username={profile.username}
            avatar={profile.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
