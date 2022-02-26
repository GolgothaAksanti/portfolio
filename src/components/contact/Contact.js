import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <div className="max-w-ld w-full text-center pt-36 pb-10">
      <h1 className="text-2xl sm:text-4xl">Interested working together?</h1>
      <a href="mailto:me.goloking777@gmail.com">
        <span className="mt-10 inline-block w-auto bg-black text-base md:text-xl py-4 px-7 text-white cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3">Get in touch</span>
            <FaArrowRight className="text-white" />
          </div>
        </span>
      </a>
    </div>
  );
}

export default Contact;
