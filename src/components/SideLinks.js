const SideLinks = () => {
  return (
    <div>
      <div orientation="left" className="downwards-left">
        <ul>
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
      </div>
      <div orientation="right" className="downwards-right">
        <div className="link-wrap">
          <a
            href="mailto:denismwaura96@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            denismwaura96@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideLinks;
