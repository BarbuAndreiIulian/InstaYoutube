import Image from "next/image";
import React from "react";
import dots from "../assets/dots.png";
import hearth from "../assets/hearth.png";
import comment from "../assets/comment.png";
import message from "../assets/message.png";
import save from "../assets/save.png";
import emojy from "../assets/emojy.png";
import Moment from "react-moment";

const Post = ({ id, profilePic, username, postPhoto, caption, timestamp }) => {
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
              <div className="Btn   ">
                <img src={hearth.src} alt="" />
              </div>
              <div className="Btn">
                <img src={comment.src} alt="" />
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
            <p>20,761 likes</p>
          </div>
        </div>

        {/* Caption */}
        <div className="flex items-center mt-2">
          <p className="customfont mr-2">{username}</p>
          <p className="truncate">{caption}</p>
        </div>
        {/* Comments */}
        <div className="">
          <p className="text-sm  text-gray-500 mt-1 my-2">
            View all 326 comments
          </p>
          <div className="flex justify-between  ">
            <div className="flex items-center ">
              <p className="customfont mr-2">{username}</p>
              <p>You can Like Comment and Post</p>
            </div>
            <div className="h-3 w-3">
              <Image src={hearth} />
            </div>
          </div>
          <div className="flex justify-between   ">
            <div className="flex items-center truncate ">
              <p className="customfont mr-2">{username}</p>
              <p className="truncate mr-2 ">
                Second Comment here and i'm very very very long
              </p>
            </div>
            <div className="h-3 w-3">
              <Image src={hearth} />
            </div>
          </div>
          <p className="text-gray-400 text-xs my-2">
            <Moment fromNow>{timestamp?.toDate()}</Moment>
          </p>
        </div>

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
            />
          </div>
          <button className="font-bold text-sm  text-[#0095f6]">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
