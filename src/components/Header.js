import React from "react";
import Social from "./Social";

function Header() {
  return (
    <React.Fragment>
      <h1 className="heading accent">Manan Gupta</h1>
      <h2 className="sub-heading">Front-end Software Developer</h2>
      <div className="socials">
        <Social>
          <i class="far fa-envelope"></i>
          <span>guptamanan1991@gmail.com</span>
        </Social>
        <Social>
          <i class="fab fa-github"></i>
          <span>github.com/manan-gup</span>
        </Social>
        <Social>
          <i class="fas fa-phone"></i>
          <span>+91-8105320110</span>
        </Social>
      </div>
    </React.Fragment>
  );
}

export default Header;
