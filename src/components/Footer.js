import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-links">
        <li>link</li>
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>

      <p>
        Built By{" "}
        <a
          href="https://github.com/denisKimanii"
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
