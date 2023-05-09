import React from "react";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <div className="nav-left">
        <h2>FINE TUNE MARINE</h2>
      </div>
      <div className="nav-right">
        <ul className="wrapper">
          <li className="icon-facebook">
            <span className="tooltip">Facebook</span>
            <span><i className="fab fa-facebook-f"></i></span>
          </li>
          <li className="icon-instagram">
            <span className="tooltip">Instagram</span>
            <span><i className="fab fa-instagram"></i></span>
          </li>
        </ul>
        <a href="/" className="nav-contact-button">
          CONTACT ME
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
