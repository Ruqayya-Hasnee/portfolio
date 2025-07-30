// import React from "react";
import { Styles } from "../utils/Style";
import Resume from "../assets/Resume.pdf";
import { IoMdDownload } from "react-icons/io";
import profile from "../assets/profile.jpeg";
import "../App.css";

function About() {
  return (
    <div
      className="flex flex-wrap justify-center items-center mt-10 px-10"
      id="Home"
    >
      <div className="flex-1">
        <span className={Styles.heroHeadText}>
          Hi, I'm <span className="text-orange-600">Ruqayya</span>
          <br />
          <span className={Styles.heroSubText}>
            I'm a Fullstack Developer &
            <br />
            Web Designer
          </span>
        </span>
        <br />
        <div className="w-[14rem]">
          <a href={Resume} download="Resume" target="blank" rel="noreferrer">
            <div className="p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500">
              <IoMdDownload className="text-lg mt-1 mr-3" /> Resume
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <img
          src={profile}
          alt="profile"
          className="element object-contain w-[400px]"
        />
      </div>
    </div>
  );
}

export default About;
