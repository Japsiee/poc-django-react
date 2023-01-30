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
      <div className="flex justify-center items-center bg-gray-600 w-4/6 h-full relative mx-auto text-white">
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
