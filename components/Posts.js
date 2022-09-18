import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return () => {
      unSubscribe();
    };
  }, [db]);

  return (
    <div className="mt-4 mx-1">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          profilePic={post.data().profileImg}
          postPhoto={post.data().image}
          caption={post.data().caption}
          timestamp={post.data().timestamp}
        />
      ))}
    </div>
  );
};

export default Posts;
