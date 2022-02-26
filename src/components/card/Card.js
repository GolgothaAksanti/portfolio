import React from "react";
import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../../images/profile.png";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center py-5 max-w-xs mx-auto bg-white shadow-xl rounded-xl px-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Golgotha Aksanti</p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Software Developer
          </p>
        </div>
        <div className="flex align-center justify-center mt-4">
          <a
            href="https://github.com/GolgothaAksanti"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-900 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaGithub />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://github.com/GolgothaAksanti"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaLinkedin />
            <span className="sr-only">Linkedin</span>
          </a>
          <a
            href="https://github.com/GolgothaAksanti"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-700 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaTwitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://github.com/GolgothaAksanti"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaYoutube />
            <span className="sr-only">Youtube</span>
          </a>
          <a
            href="https://github.com/GolgothaAksanti"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-900 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaEnvelope />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
