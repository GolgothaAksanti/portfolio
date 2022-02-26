import React from "react";
import { FaNodeJs, FaFigma, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPhp,
  SiJava,
} from "react-icons/si";

function Skills() {
  return (
    <div id="tech" className="max-w-4xl mx-auto justify-center py-12">
      <p className="text-2xl text-black text-center sm:text-4xl font-bold">
        Tech I use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <FaNodeJs className="mx-auto text-green-500 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            NodeJs
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <FaFigma className="mx-auto text-blue-500 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Figma
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <FaReact className="mx-auto text-blue-300 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            ReactJs
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <SiJavascript className="mx-auto text-yellow-500 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Javascript
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <SiTypescript className="mx-auto text-blue-900 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Typescript
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <SiGraphql className="mx-auto text-red-500 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            GraphQl
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <SiMysql className="mx-auto text-blue-800 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            MySql
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <SiPostgresql className="mx-auto text-blue-900 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            PostgreSql
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <SiMongodb className="mx-auto text-green-600 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            MongoDB
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <SiPhp className="mx-auto text-blue-800 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            PHP
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:52">
          <SiJava className="mx-auto text-red-800 text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Java
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
