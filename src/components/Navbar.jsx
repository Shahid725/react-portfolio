import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setNav(false); // Close the mobile navigation when a link is clicked
  };
  return (
    <div className="flex justify-between items-center w-full h-25 px-4 mt-0  text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature p-2 ml-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Mohammed Shahid
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links?.map(({ link, id }) => (
          // <li
          //   className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-blue-600  duration-200"
          //   key={id}
          // >
          <li
            className={`px-4 cursor-pointer capitalize font-medium ${
              activeLink === link ? "text-blue-600" : "text-gray-500"
            } hover:scale-105 hover:text-blue-600 duration-200`}
            key={id}
          >
            <Link
              to={link}
              smooth
              duration={500}
              onClick={() => handleLinkClick(link)}
              // className=" hover:text-blue-700 "
            >
              {" "}
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute
         top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 "
        >
          {links?.map(({ link, id }) => (
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              key={id}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {" "}
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
