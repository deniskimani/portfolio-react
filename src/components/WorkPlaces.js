import "../styles/work-places.css";

import Experience from "./work/Experience";
import { useState } from "react";

const WorkPlaces = ({ jobs }) => {
  const [job, setJob] = useState(jobs.oaknet);
  function onClick(e) {
    const employer = e.currentTarget.getAttribute("data-value");
    setJob(jobs[employer]);
    highlight(e);
  }

  function highlight(e) {
    const element = document
      .querySelector(".work-navbar")
      .querySelectorAll("button");

    console.log(element);

    element.forEach((element) => {
      element.classList.remove("highlighted");
    });
    const className = e.target.className;
    const link = document.querySelector(`.${className}`);

    link.classList.add("highlighted");
  }
  return (
    <div className="work-places" id="jobs">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="work-view">
        <div className="work-navbar">
          <button
            className="oaknet highlighted"
            data-value="oaknet"
            onClick={(e) => onClick(e)}
          >
            Oaknet Business
          </button>

          <button
            className="futurefast"
            data-value="futurefast"
            onClick={(e) => onClick(e)}
          >
            FutureFast Tech
          </button>

          <button
            className="blue-reveal"
            data-value="bluereveal"
            onClick={(e) => onClick(e)}
          >
            BlueReveal
          </button>

          <button
            className="deskim"
            data-value="deskim"
            onClick={(e) => onClick(e)}
          >
            Deskim Hardware
          </button>

          <button
            className="freelance"
            data-value="freelance"
            onClick={(e) => onClick(e)}
          >
            Freelance
          </button>
        </div>
        <div className="router-view">
          <Experience job={job} />
        </div>
      </div>
    </div>
  );
};

export default WorkPlaces;
