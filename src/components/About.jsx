import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi there! I am a passionate web developer with a love for building
          beautiful and functional websites. I have experience in HTML, CSS,
          JavaScript, and React.js. I am always eager to learn new technologies
          and improve my skills. When I am not coding, you can find me exploring
          new places or enjoying a good book.'
        </p>
        <br />
        <p className="text-xl">
          I am constantly learning and exploring new technologies to improve my
          skills.
        </p>
      </div>
    </div>
  );
};

export default About;
