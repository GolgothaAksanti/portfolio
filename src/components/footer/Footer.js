import React from "react";
import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
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
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{"  "}
          <span className="mr-2" role="link" aria-label="heart">
            {" "}
            ☘️{""}
          </span>
          {""}
          by{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/GolgothaAksanti"
          >
            Golgotha Aksanti
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
