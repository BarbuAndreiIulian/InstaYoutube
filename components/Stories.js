import React, { useEffect, useState } from "react";
import Story from "./Story";
import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";

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

  const { data: session } = useSession();

  return (
    <div>
      <div className="flex space-x-4 p-5 bg-white border overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 mx-1 rounded-lg  ">
        {session && (
          <div className="">
            <Story
              key={session?.user?.id}
              username={session?.user?.name}
              avatar={session?.user?.image}
            />
          </div>
        )}

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
