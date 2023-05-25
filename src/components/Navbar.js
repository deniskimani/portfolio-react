import logo from "../assets/M.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import resume from "../assets/Denis_Mwaura_E.pdf";
import { Link } from "react-scroll";
import "../styles/SmoothScroll.css"; // Create this CSS file for custom styles

import "../styles/navbar.css";

const Navbar = () => {
  function openSideNav(e) {
    e.preventDefault();
    const sideNav = document.querySelector(".overlay-for-nav");
    const navbar = document.querySelector(".navbar");

    navbar.classList.remove("backdrop-filter");
    sideNav.classList.add("block");
  }
  function closeSideNav() {
    const sideNav = document.querySelector(".overlay-for-nav");
    const navbar = document.querySelector(".navbar");

    navbar.classList.remove("hidden");
    navbar.classList.add("backdrop-filter");
    sideNav.classList.remove("block");
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <button className="menu" type="button" onClick={openSideNav}>
        <img width={25} src={menu} alt="menu" />
      </button>

      <div className="links">
        <ol>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="jobs"
              spy={true}
              smooth={true}
              offset={-210}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>

          <li className="resume">
            <a
              className="resume-button"
              rel="noopener noreferrer"
              href={resume}
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ol>
      </div>

      <div className="overlay-for-nav" onClick={closeSideNav}>
        <div className="overlay-nav">
          <button className="close" type="button" onClick={closeSideNav}>
            <img width={25} src={close} alt="close" />
          </button>
          <div className="overlay-links">
            <ol>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={closeSideNav}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="jobs"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={closeSideNav}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeSideNav}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeSideNav}
                >
                  Contact
                </Link>
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
