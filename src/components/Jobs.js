import React from "react";

const Jobs = () => {
  return (
    <div>
      <h3>Some Things I’ve Built</h3>
      <ul>
        <li>
          <div className="image-contianer">
            <img src="fha" alt="pic" />
            <div className="job-overlay"></div>
          </div>
          <div>
            <p className="featured">Featured Project</p>
            <h3 className="project-title"> Project Title</h3>
          </div>
          <div className="project-description">
            <p>project description</p>
          </div>
          <ul className="project-tech-list">
            <li>list</li>
            <li>list</li>
            <li>list</li>
          </ul>
          <div className="project-links">
            <a href="sfjsk" rel="noopener noreferrer">
              link
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Jobs;
