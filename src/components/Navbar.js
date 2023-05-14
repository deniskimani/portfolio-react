import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="csk" alt="logo" />
      </div>
      <div className="links">
        <ol>
          <li>
            <a href="hj">About</a>
          </li>
          <li>
            <a href="hjn">Experience</a>
          </li>
          <li>
            <a href="dfg">Work</a>
          </li>
          <li>
            <a href="tyu">Contact</a>
          </li>
        </ol>
      </div>
      <div className="resume">
        <a className="resume-button" href="dsjs">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
