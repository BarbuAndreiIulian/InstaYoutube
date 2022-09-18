import { signIn, signOut, useSession } from "next-auth/react";
import React, { Profiler } from "react";
import profile from "../assets/profile.jpg";
import nouser from "../assets/nouser.jpg";

const MiniProfile = () => {
  const { data: session, status } = useSession();
  return (
    <div className="flex justify-between mt-8">
      <div className="flex  items-center">
        {session ? (
          <>
            <img
              src={session?.user?.image}
              alt=""
              className="w-14 h-14 rounded-full mr-4"
            />
            <p className="text-sm font-semibold">{session?.user?.name}</p>
          </>
        ) : (
          <>
            <img
              src={nouser.src}
              alt=""
              className="w-14 h-14 rounded-full mr-4 "
            />
            <p className="text-sm font-semibold">Please log in</p>
          </>
        )}
      </div>
      <button
        className="text-xs font-semibold text-[#0095f6]"
        onClick={session ? signOut : signIn}
      >
        {session ? "Sign out" : "Log In"}
      </button>
    </div>
  );
};

export default MiniProfile;
