import React from "react";
import "./NavBar.scss";
import instagram from "../../assets/icons/instagram-icon.png"

function NavBar() {
  return (
    <nav>
      <div className="nav-left">
        <h2 className="nav-title">FINE TUNE MARINE</h2>
      </div>
      <div className="nav-right">
        <ul className="wrapper-nav">
          <li className="icon-instagram-nav">
            <a href="https://www.instagram.com/finetunemarine" target="_blank" rel="noopener noreferrer">
              <img className="icon-instagram-nav" src={instagram} alt='Instagram'/>
            </a>
          </li>
        </ul>
        <a href="#contact" className="nav-contact-button">
          CONTACT ME
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
