import "../styles/jobs.css";
import placeholder from "../assets/placeholder.png";

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
      <div className="extra-work">
        <h2 className="numbered-heading">Other notable mentions</h2>
        <h4>view the archive</h4>
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
    </>
  );
};

export default Jobs;
