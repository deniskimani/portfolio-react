import menu from "../assets/menu.png";
import close from "../assets/close.png";
import resume from "../assets/Denis_Mwaura_E.pdf";
import ScrollReveal from "scrollreveal";

import "../styles/navbar.css";

const Navbar = () => {
  function openSideNav() {
    const sideNav = document.querySelector(".overlay-for-nav");
    sideNav.classList.add("block");
  }
  function closeSideNav() {
    const sideNav = document.querySelector(".overlay-for-nav");
    sideNav.classList.remove("block");
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src="csk" alt="logo" />
      </div>

      <button className="menu" type="button" onClick={openSideNav}>
        <img width={25} src={menu} alt="menu" />
      </button>

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
        <a
          className="resume-button"
          rel="noopener noreferrer"
          href={resume}
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div className="overlay-for-nav" onClick={closeSideNav}>
        <div className="overlay-nav">
          <button className="close" type="button" onClick={closeSideNav}>
            <img width={25} src={close} alt="close" />
          </button>
          <div className="overlay-links">
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
          <div className="overlay-resume">
            <a
              className="resume-button"
              rel="noopener noreferrer"
              href={resume}
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
