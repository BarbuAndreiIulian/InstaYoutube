import Image from "next/image";
import React, { useEffect, useState } from "react";
import dots from "../assets/dots.png";
import hearth from "../assets/hearth.png";
import redhearth from "../assets/redhearth.png";
import commentIcon from "../assets/comment.png";
import message from "../assets/message.png";
import save from "../assets/save.png";
import emojy from "../assets/emojy.png";
import Moment from "react-moment";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";

const Post = ({ id, profilePic, username, postPhoto, caption, timestamp }) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  //When like updates in the db update the likes in the app as well
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  //Check if user already liked the post
  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  //When clicked once add like
  //When double clicked delete it from db
  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user?.uid), {
        username: session?.user?.name,
      });
    }
  };

  //Send comments to db
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session?.user?.name,
      timestamp: serverTimestamp(),
    });
  };

  //When comments update in db update them in the app as well
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [(db, id)]
  );

  return (
    <div className="border rounded-lg my-3">
      {/* Header */}
      <div className="flex items-center p-3 ">
        <div className="flex items-center w-full ">
          <div className="h-8 w-8 mr-3">
            <img src={profilePic} alt="" className="rounded-full" />
          </div>
          <div className="">
            <p className="font-semibold text-sm">{username}</p>
            <p className="text-xs">Original Audio</p>
          </div>
        </div>
        <div className="h-6 w-6">
          <Image src={dots} />
        </div>
      </div>
      {/* Photo */}
      <div className="">
        <img src={postPhoto} alt="" />
      </div>

      <div className="m-3">
        {/* Buttons */}
        <div className="">
          <div className="flex justify-between ">
            <div className="flex space-x-4">
              <div className="Btn" onClick={likePost}>
                {hasLiked ? (
                  <img src={redhearth.src} alt="" />
                ) : (
                  <img src={hearth.src} alt="" />
                )}
              </div>
              <div className="Btn">
                <img src={commentIcon.src} alt="" />
              </div>
              <div className="Btn">
                <img src={message.src} alt="" />
              </div>
            </div>
            <div className="Btn">
              <img src={save.src} alt="" />
            </div>
          </div>
          <div className="customfont mt-2">
            <p>{likes.length} likes</p>
          </div>
        </div>

        {/* Caption */}
        <div className="flex items-center mt-2">
          <p className="customfont mr-2">{username}</p>
          <p className="truncate">{caption}</p>
        </div>

        {/* View all comments */}
        <p className="text-sm  text-gray-500 mt-1 my-2">
          View all {comments.length} comments
        </p>
        {/* Comments */}
        <div className="max-h-24 overflow-y-scroll">
          {comments.map((comment) => (
            <div key={comment.id} className="flex justify-between   ">
              <div className="flex items-center truncate ">
                <p className="customfont mr-2">{comment.data().username}</p>
                <p className="truncate mr-2 ">{comment.data().comment}</p>
              </div>
              <div className="h-3 w-3 shrink-0">
                <Image src={hearth} />
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="text-gray-400 text-xs my-2">
          <Moment fromNow>{timestamp?.toDate()}</Moment>
        </p>

        {/* BORDER */}
        <div className="border-t -mx-3 my-3"></div>

        {/* Input */}
        <div className="flex justify-between p-1">
          <div className="flex">
            <div className="Btn mr-4">
              <Image src={emojy} />
            </div>

            <input
              type="text"
              placeholder="Add a comment..."
              className="outline-0 "
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button
            className="font-bold text-sm  text-[#0095f6]"
            onClick={sendComment}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
