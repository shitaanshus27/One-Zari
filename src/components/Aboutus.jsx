import React from "react";
import video from "../assets/videos/video.mp4";
const Aboutus = () => {
  return (
    <div className="w-full p-6 bg-red-200">
      <div className="md:w-[1280px] mx-auto">
        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
