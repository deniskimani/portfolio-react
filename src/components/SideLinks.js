import "../components/icons/index";
import {
  IconGitHub,
  IconInsta,
  IconLinkedin,
  IconTwitter,
} from "../components/icons/index";
const SideLinks = () => {
  return (
    <div>
      <div orientation="left" className="downwards-left">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/mwaura__kimani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInsta />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/mwaslito60"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/denis-mwaura-b87305190/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/deniskimani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGitHub />
            </a>
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
