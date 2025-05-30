const VideoComp = () => {
    return (
      <video
        src="/videos/myvideo.mp4"
        controls
        autoPlay
        muted
        loop
        width={600}
        height={400}
        className="rounded-md"
      />
    );
  };
  
  export default VideoComp;
  