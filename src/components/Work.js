import React from "react";
import WorkCradData from "../components/WorkCradData";
import WorkCard from "../components/WorkCard";
const Work = () => {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {WorkCradData.map((val, ind) => {
            return (
              <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                view={val.View}
                source={val.Source}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Work;
