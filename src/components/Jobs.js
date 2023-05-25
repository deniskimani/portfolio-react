import "../styles/jobs.css";
import placeholder from "../assets/placeholder.png";
import Projects from "./Projects";

const Jobs = () => {
  return (
    <>
      <div className="jobs" id="projects">
        <h2 className="numbered-heading">Some Things I’ve Built</h2>
        <ul>
          <li className="project-list first">
            <div className="info-wrapper">
              <div className="featured">
                <p className="featured-p">Featured Project</p>
                <h3 className="project-title"> Project Title</h3>
              </div>
              <div className="project-description">
                <p>
                  {" "}
                  To be allowed to transfer land to the buyers who have no
                  objection to the Grant dated 7th Feb 2023. All the 10 buyers
                  on LR NO 13287/183 have no objection. Their portions of land
                  will be transferred to them subject to the buyers clearing
                  their balances.
                </p>
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
            </div>
            <div className="project-image">
              <a href="hak">
                <img src={placeholder} alt="pic" />
              </a>
            </div>
          </li>
          {/* second item */}
          <li className="project-list second">
            <div className="info-wrapper">
              <div className="featured">
                <p className="featured-p">Featured Project</p>
                <h3 className="project-title"> Project Title</h3>
              </div>
              <div className="project-description">
                <p>
                  {" "}
                  To be allowed to transfer land to the buyers who have no
                  objection to the Grant dated 7th Feb 2023. All the 10 buyers
                  on LR NO 13287/183 have no objection. Their portions of land
                  will be transferred to them subject to the buyers clearing
                  their balances.
                </p>
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
            </div>
            <div className="project-image">
              <a href="hak">
                <img src={placeholder} alt="pic" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Projects />
    </>
  );
};

export default Jobs;
