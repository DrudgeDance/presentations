import React from "react";
import videoSource from "./../../assets/videos/cowani.mov";

export default function BackgroundVideo() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full min-h-full max-w-none"
        style={{
          position: 'absolute', 
          top: '0', // Anchors the video at the top
          left: '50%',
          transform: 'translateX(-50%)', // Centers the video horizontally
          minHeight: '100vh' // Ensures the video covers the full viewport height
        }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
