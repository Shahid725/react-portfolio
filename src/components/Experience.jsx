import React from "react";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import react from "../assests/react.png";
import next from "../assests/nextjs.png";
import node from "../assests/node.png";
import tailwind from "../assests/tailwind.png";
import github from "../assests/github.png";
import sharepoint from "../assests/Sharepoint.png";
import powerautomate from "../assests/PowerAutomate.jpg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: next,
      title: "NEXT JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: node,
      title: "NODE JS",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: sharepoint,
      title: "SHAREPOINT",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: powerautomate,
      title: "PowerAutomate",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen lg:pb-11 lg:pt-11"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-400 p-4 inline bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
