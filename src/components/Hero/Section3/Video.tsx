"use client";
import React, { useRef, useState } from "react";
import Heading from "@/components/ReuseComps/Heading";
import { Play } from "lucide-react";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center pb-32 max-sm:pb-22 w-full">
      <Heading
        subtitle={"Demo"}
        title={"How to Use TransferX"}
        text={
          "Watch this short video to see how easy it is to share and store files with TransferX."
        }
      />
      <div className="bottom relative max:px-20 max-md:py-0">
        <video
          ref={videoRef}
          src="https://adnaan-personal.s3.us-east-1.amazonaws.com/landing-page-see-it-in-action.mp4"
          muted
          loop
          className="rounded-md"
          controls={isPlaying} // show controls only when playing
        />
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 h-16 w-16 shadow-md text-black rounded-full flex items-center justify-center"
          >
            <Play className="h-12 w-12 hover:cursor-pointer" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Video;
