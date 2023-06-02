import "../styles/jobs.css";
import "../components/work/projects/timepicker/index.md";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import MarkdownParser from "./MarkdownParser";

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
      <Projects />
    </>
  );
};

export default Jobs;
