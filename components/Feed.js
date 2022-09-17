import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex">
      <section className="max-w-[470px] mx-auto w-[100vw]">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      <section>
        {/* MiniProfile */}
        {/* Suggestions */}
      </section>
    </div>
  );
};

export default Feed;
