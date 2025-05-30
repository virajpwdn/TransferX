import React from "react";
// import { Twitch } from "lucide-react";
//  bg-[#050c1b]

const Discord = () => {
  return (
    <div className="pb-32">
      <hr className="text-zinc-700" />
      <div className="py-32 flex items-center justify-center flex-col gap-3">
        {/* <Twitch className="font-bold h-20 w-20" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tabler-icon tabler-icon-brand-discord "
        >
          <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
          <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
          <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
          <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
        </svg>
        <h1 className="text-5xl font-semibold text-center">
          Ready to join this <span className="text-[#3A34AD]">Community?</span>
        </h1>
        <p className="text-zinc-400 max-w-[450px] text-center py-5">
          Join our vibrant Discord community! Connect, share, and grow with
          like-minded enthusiasts. Click to dive in! 🚀
        </p>
        <button className="px-4 py-2 bg-[#182234] rounded-md hover:bg-[#182234b6]">Join Discord</button>
      </div>
      <hr className="text-zinc-700" />
    </div>
  );
};

export default Discord;
