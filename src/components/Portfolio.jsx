import React from "react";

// import { Tooltip, TooltipProvider, TooltipWrapper } from "react-tooltip";

import reactWeather from "../assests/portfolio/reactWeather.jpg";
import foodrecipe from "../assests/portfolio/foodrecipe3.png";

import crud from "../assests/portfolio/CRUD.jpg";
// import {arratDestructure} from "../assests/portfolio/arrayDestruct.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactWeather,
      href: "https://github.com/Shahid725/New-Weather-app",
      desc: "The app allows users to search for a specific location by name or city. Users can enter their desired location, and the app will fetch weather data for that location.The background theme is dynamic based the weather condition",
    },
    {
      id: 2,
      src: foodrecipe,
      href: "https://github.com/Shahid725/foodrecipe",
      desc: "The app allows the user to search foe a specfic recipe by its name. The top 10 recipes are shown in the list.You can click on the link and it will redirect to the new page where you can find the complete recipe of that dish which you have selected ",
    },
    {
      id: 3,
      src: crud,
      href: "https://github.com/Shahid725/CRud-application",
      desc: "This app allows the user to Create, Read, Update and Delete the item . You can view all the items which you have created and you can update and delete the item any time ",
    },
    // {
    //   id: 4,
    //   src: navbar,
    //   href: "https://youtube.com",
    // },
  ];

  const handleButton = (href) => {
    // console.log(href);
    window.open(href, "_blank");
  };
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            PortFolio
          </p>
          <p className="py-6">Check out of my some work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-20 sm:px-0 ">
          {portfolios.map(({ id, src, href, desc }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                  onClick={() => handleButton(href)}
                >
                  Code
                </button>
                <button className=" group w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Description
                  <span
                    style={{ height: "auto", width: "100%" }}
                    className="opacity-0 bg-cyan-800 text-white text-xs rounded-lg py-1 px-2 absolute bottom-0 left-1/2  transform -translate-x-1/2 transition-opacity duration-1000 group-hover:opacity-100"
                  >
                    {desc}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
