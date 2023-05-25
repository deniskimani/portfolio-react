import "../styles/about-me.css";
import photo from "../assets/photo.jpg";

const AboutMe = () => {
  function transition() {
    const overlay = document.querySelector("#overlay");
    const movingBorder = document.querySelector(".moving-border");
    overlay.classList.add("remove-bg");
    movingBorder.classList.add("move-border");
  }
  function undo() {
    const overlay = document.querySelector("#overlay");
    const movingBorder = document.querySelector(".moving-border");
    overlay.classList.remove("remove-bg");
    movingBorder.classList.remove("move-border");
  }
  return (
    <div className="about-me" id="about">
      <h2 className="numbered-heading first-heading">About Me</h2>
      <div className="info-pic-container">
        <div className="about-info">
          <p>
            Hello! My name is Kim and I enjoy creating things that live on the
            internet. My interest in web application development started back in
            2016 when I was doing my student industrial attachment, I felt quite
            at home hacking togeteher HTML and CSS to build something
            conceptual.
          </p>
          <p>
            As of today, I have had the privilege of working at{" "}
            <a
              href="https://oaknetbusiness.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              a tech company
            </a>
            ,{" "}
            <a
              href="https://futurefast.co.ke/"
              target="blank"
              rel="noopener noreferrer"
            >
              a start-up
            </a>{" "}
            and as freelance software developer{" "}
            <a
              href="https://futurefast.co.ke/"
              target="blank"
              rel="noopener noreferrer"
            >
              at Upwork
            </a>
            . My main focus is building accessible products and digital
            experiences for clients in need.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>

          <ul className="technologies">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>

            <li>WordPress</li>
            <li>Vue</li>
          </ul>
        </div>
        <div className="styled-pic">
          <img src={photo} alt="pic" />

          <div id="overlay" onMouseEnter={transition} onMouseLeave={undo}>
            <div className="moving-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
