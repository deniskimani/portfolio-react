import React, { useEffect, useState } from "react";
import placeholder from "../assets/placeholder.png";
import "../components/icons/index";
import grayMatter from "gray-matter";
import { Buffer } from "buffer";
import { IconExternal, IconGitHub } from "../components/icons/index";

const MarkdownParser = ({ markdown }) => {
  global.Buffer = Buffer;
  const initialState = {
    firstFeatureData: {},
    tech: [],
  };
  const [firstFeatureData, setFirstFeatureData] = useState(
    initialState.firstFeatureData
  );
  const [tech, setTech] = useState(initialState.tech);

  useEffect(() => {
    const parseMarkdown = (markdownContent) => {
      const { data, content } = grayMatter(markdownContent);
      return { metadata: data, content };
    };
    const firstFeature = parseMarkdown(markdown);
    firstFeature.metadata.content = firstFeature.content;

    setFirstFeatureData(firstFeature.metadata);
    // setTimeout(() => {
    setTech(firstFeature.metadata.tech);
    // }, 1000);
  }, [markdown]);

  console.log(tech);

  return (
    <div>
      <div className="jobs" id="projects">
        <h2 className="numbered-heading">Some Things I’ve Built</h2>
        <ul>
          <li className="project-list first">
            <div className="info-wrapper">
              <div className="featured">
                <p className="featured-p">Featured Project</p>
                <h3 className="project-title">{firstFeatureData.title}</h3>
              </div>
              <div className="project-description">
                <p> {firstFeatureData.content}</p>
              </div>

              <ul className="project-tech-list">
                {tech && tech.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>

              <div className="project-links">
                <a
                  href={firstFeatureData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconGitHub />
                </a>
                <a
                  href={firstFeatureData.external}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <i className="fa fa-external-link" aria-hidden="true"></i> */}
                  <IconExternal />
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
    </div>
  );
};

export default MarkdownParser;
