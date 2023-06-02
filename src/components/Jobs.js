import "../styles/jobs.css";
import "../components/work/projects/timepicker/index.md";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import MarkdownParser from "./MarkdownParser";
import extraProjects from "../components/work/projects/projects.json";

const Jobs = () => {
  const fileName = "index.md";
  const initialState = {
    project: "",
  };
  const [project, setProject] = useState(initialState.project);
  useEffect(() => {
    import(`../components/work/projects/timepicker/${fileName}`).then((res) => {
      fetch(res.default).then((res) =>
        res.text().then((res) => setProject(res))
      );
    });
  }, []);
  return (
    <>
      <MarkdownParser markdown={project} />
      <Projects projects={extraProjects.projects} />
    </>
  );
};

export default Jobs;
