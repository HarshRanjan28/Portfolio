import React, { useState } from "react";
import "../styles/WorkCard.css";
import WorkCradData from "../components/WorkCradData";
const WorkCard = () => {
  const [data, setData] = useState(WorkCradData);
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {data.map((curData) => {
          return (
            <>
              <div className="project-card">
                <img src={curData.imgsrc} alt="" />
                <h2 className="project-title">{curData.title}</h2>
                <div className="pro-details">
                  <p>{curData.text}</p>
                  <div className="pro-btns">
                    <a href={curData.View} className="btn">
                      View
                    </a>
                    <a href={curData.Source} className="btn">
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
