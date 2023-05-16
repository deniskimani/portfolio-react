import React from "react";

const Experience = ({ job }) => {
  const responsibilities = job.responsibilities;
  return (
    <div>
      <div>
        <h3>
          <span className="title">{job.title}</span>
          <span className="company">
            {" "}
            @{" "}
            <a href="bdjsd" rel=" noopener noreferrer" target="_blank">
              {job.company.name}
            </a>
          </span>
        </h3>
        <p className="period">
          {job.period.from.date} - {job.period.to.date}
        </p>
        <ul>
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
