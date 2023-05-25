import "../components/work/projects/index.md";
import { useEffect, useState } from "react";
import MarkdownParser from "./MarkdownParser";

const Projects = () => {
  const fileName = "index.md";
  const initialState = {
    project: "",
  };
  const [project, setProject] = useState(initialState.project);
  useEffect(() => {
    import(`../components/work/projects/${fileName}`).then((res) => {
      fetch(res.default).then((res) =>
        res.text().then((res) => setProject(res))
      );
    });
  }, []);

  return (
    <div>
      <div className="extra-work">
        <h2 className="numbered-heading">Other notable mentions</h2>
        <h4>view the archive</h4>
        <MarkdownParser markdown={project} />
        <div className="project-cards">
          <div className="card">
            <div>
              <span className="folder">folder</span>
              <span className="link-icon">link</span>
            </div>
            <h3>Project title</h3>
            <p>
              kjfhfwiojwe ewiknd jdnkandka qeadakdnkda dkankdnankand nakjdnakda
              adnka nadkjnad nakd a dnknd adkadfn afcjafdk fafkad
            </p>
            <ul className="tools">
              <li>tool</li>
              <li>tool</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
