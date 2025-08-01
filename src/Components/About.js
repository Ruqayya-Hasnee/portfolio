// import React from "react";
import { Styles } from "../utils/Style";
import Resume from "../assets/Resume.pdf";
import { IoMdDownload } from "react-icons/io";
import profile from "../assets/profile.jpeg";
import "../App.css";

function About() {
  return (
    <div
      className="flex flex-wrap justify-center items-center mt-10 p-10"
      id="Home"
    >
      <div className="flex-1">
        <p className={Styles.heroHeadText}>
          Hi, I'm <span className="text-orange-600">Ruqayya</span>
          <br />
          <p className={Styles.heroSubText}>
            I'm a Fullstack Developer &
            <br />
            Web Designer
          </p>
        </p>
        <br />
        <div className="w-[14rem]">
          <a href={Resume} download="Resume" target="blank" rel="noreferrer">
            <div className="p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500">
              <IoMdDownload className="text-lg mt-1 mr-3" /> Resume
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap p-4">
        <img
          src={profile}
          alt="profile"
          className="element object-contain w-[450px]"
        />
      </div>
    </div>
  );
}

export default About;
