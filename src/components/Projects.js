import { IconExternal, IconFolder, IconGitHub } from "./icons";

const Projects = ({ projects }) => {
  return (
    <div>
      <div className="extra-work">
        <h2 className="numbered-heading">Other notable mentions</h2>
        <h4>view the archive</h4>
        <div className="project-cards">
          {projects.map((project) => (
            <div className="card" key={project.id}>
              <div>
                <span className="folder">
                  <IconFolder />
                </span>
                <span className="link-icon">
                  {project.github.length !== 0 && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconGitHub />
                    </a>
                  )}
                  {project.external.length !== 0 && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconExternal />
                    </a>
                  )}
                </span>
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tools">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
