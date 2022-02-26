import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mt-40 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey!👋
      </p>
      <p className="text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4">
        I am a Software Developer with holistic knowledge of software
        development. I am also a self-taught software developer with a strong
        eye for innovative design and a keen understanding of techniques geared
        toward optimum user experience.
      </p>

      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-blue-500 text-3xl" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
