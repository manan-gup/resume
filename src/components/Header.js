import React from "react";
import Social from "./Social";

function Header() {
  return (
    <div className="header">
      <div className="header__headings">
        <h1 className="header__heading textAccent">Manan Gupta</h1>
        <h2 className="header__sub-heading">Front-end Software Developer</h2>
      </div>
      <div className="socials">
        <Social>
          <i className="far fa-envelope"></i>
          <span className="socials__text">
            <a target="_blank" href="mailto:guptamanan1991@gmail.com">
              guptamanan1991@gmail.com
            </a>
          </span>
        </Social>
        <Social>
          <i className="fab fa-github"></i>
          <span className="socials__text">
            <a target="_blank" href="https://github.com/manan-gup">
              github.com/manan-gup
            </a>
          </span>
        </Social>
        <Social>
          <i className="fas fa-phone"></i>
          <span className="socials__text">+91-8105320110</span>
        </Social>
        <Social>
          <i class="fab fa-linkedin"></i>
          <span className="socials__text">
            <a
              target="_blank"
              href="https://linkedin.com/in/manan-gupta-6888a5199"
            >
              linkedin.com/in/manan-gupta-6888a5199
            </a>
          </span>
        </Social>
      </div>
    </div>
  );
}

export default Header;
