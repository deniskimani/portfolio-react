import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-links">
        <li>
          <i className="lni lni-instagram-original"></i>
        </li>
        <li>
          <i className="lni lni-twitter"></i>
        </li>
        <li>
          <i className="lni lni-linkedin"></i>
        </li>
        <li>
          <i className="lni lni-github"></i>
        </li>
      </ul>

      <p>
        Built By{" "}
        <a
          href="https://github.com/deniskimani/portfolio-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Mwaura Kimani
        </a>
      </p>
      <p>
        Designed by{" "}
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>
      </p>
    </div>
  );
};

export default Footer;
