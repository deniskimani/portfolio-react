import React, { useEffect, useState } from "react";
import placeholder from "../assets/placeholder.png";
import "../components/icons/index";
import timepicker from "../components/work/projects/timepicker/timepicker.png";
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
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="project-image">
              <a
                href={firstFeatureData.external}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={timepicker} alt="pic" />
              </a>
            </div>
          </li>
          {/* second item */}
          {/* <li className="project-list second">
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
                  <IconExternal />
                </a>
              </div>
            </div>
            <div className="project-image">
              <a href="hak">
                <img src={placeholder} alt="pic" />
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default MarkdownParser;
