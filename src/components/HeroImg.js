import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroImg.css";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          src="https://raw.githubusercontent.com/tech2etc/React-JS-Crash-Course/main/src/assets/intro-bg.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <p>HI, I AM FREELANCER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <a
            href="https://novoresume.com/editor/resume/28cb3f00-6e24-11ed-a5ea-47c57cc27c24"
            className="btn-light"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
