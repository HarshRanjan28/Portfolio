import React from "react";
import { Link } from "react-router-dom";
import "../styles/aboutContent.css";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I am a react front-end developer. I create responsive secure websites
          for my clients
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-stack top">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
