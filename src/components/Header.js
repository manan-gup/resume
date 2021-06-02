import React from "react";
import Social from "./Social";

function Header() {
  return (
    <React.Fragment>
      <h1 className="header__heading textAccent">Manan Gupta</h1>
      <h2 className="header__sub-heading">Front-end Software Developer</h2>
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
      </div>
    </React.Fragment>
  );
}

export default Header;
