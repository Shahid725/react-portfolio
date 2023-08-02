import React from "react";
import HeroImage from "../assests/heroImage2.jpeg";
// import HeroImage from "../assests/heroImage.jpeg";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import { BiSolidDownload } from "react-icons/bi";
import { GoDownload } from "react-icons/go";
import "./Home.css";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            To work in a challenging position in a company where I can
            significantly contribute my expertise and Improve my skills
            Capabilities in Building frontend models and managed them with React
          </p>
          <div className="flex">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href={"/shahid .pdf"}
              className="group text-white w-fit px-6 py-3 my-2 mx-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              download
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <span className="group-hover:scale-110 duration-300">
                {" "}
                {/* <BiSolidDownload size={25} className="ml-1" /> */}
                <GoDownload size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              animation: "waving 5s infinite",
            }}
            src={HeroImage}
            alt="My Profile"
            className="mx-auto w-2/3 "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
