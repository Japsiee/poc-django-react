import React from "react";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {
  ImArrowDown,
  ImArrowLeft,
  ImArrowRight,
  ImArrowUp,
} from "react-icons/im";

const Home = () => {
  return (
    <div className="p-5 h-screen">
      <div
        id="camera-view-placeholder"
        className="flex justify-center items-center bg-gray-600 w-4/6 h-full relative mx-auto text-white"
      >
        <div className="absolute w-full top-0 left-0 h-full">
          {/* 1st option -> normal video stream */}
          <video
            id="stream-viewer"
            className="absolute w-full top-0 left-0 h-full"
            controls
            autoPlay
          >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2" ' />
          </video>

          {/* 2nd option -> this one is for http streaming */}
          {/* <video
            id="stream-viewer"
            className="absolute w-full top-0 left-0 h-full"
            controls
            autoPlay
          >
            <source src="http://localhost:8080/hls/stream.m3u8" type="application/x-mpegURL" />
          </video> */}

          {/* 3rd option -> iframe http stream */}
          {/* <iframe className="absolute top-0 left-0 w-full h-full" src="https://test.antmedia.io:5080/WebRTCAppEE/play.html?name=554221610006205395756180" frameborder="0" allowfullscreen></iframe> */}

        </div>
        <div id="camera-pan" className="flex flex-col absolute top-10 right-10">
          <AiOutlinePlusCircle className="text-6xl my-2" />
          <AiOutlineMinusCircle className="text-6xl my-2" />
        </div>
        <div
          id="controller"
          className="flex flex-col absolute bottom-10 right-10 w-44"
        >
          <div className="flex justify-center items-center">
            <ImArrowUp className="text-6xl" />
          </div>
          <div className="flex justify-between items-center">
            <ImArrowLeft className="text-6xl" />
            <ImArrowRight className="text-6xl" />
          </div>
          <div className="flex justify-center items-center">
            <ImArrowDown className="text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
