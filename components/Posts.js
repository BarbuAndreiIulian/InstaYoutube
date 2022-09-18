import React from "react";
import profile from "../assets/profile.jpg";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      profilePic: profile,
      username: "AndreiBarbu",
      postPhoto: profile,
      caption: "Hello from the caption sectionHello from the caption section",
      id: "123",
    },
    {
      profilePic: profile,
      username: "AndreiBarbu",
      postPhoto: profile,
      caption: "Hello from the caption section",
      id: "456",
    },
  ];

  return (
    <div className="mt-4 mx-1">
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          username={post.username}
          postPhoto={post.postPhoto}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
