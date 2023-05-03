import React from 'react';
import './NavBar.scss'; 

function NavBar() {
  return (
    <nav>
      <div className="nav-left">
        <h2>FINE TUNE MARINE</h2>
      </div>
      <div className="nav-right">
      <ul class="wrapper">
         <li class="icon-facebook">
         <span class="tooltip">Facebook</span>
        <span><i class="fab fa-facebook-f"></i></span>
        </li>
        <li class="icon-instagram">
        <span class="tooltip">Instagram</span>
       <span><i class="fab fa-instagram"></i></span>
       </li>
       </ul>
       <a href="/" class="nav-contact-button">
    CONTACT ME
</a>
          
      </div>
    </nav>
  );
}

export default NavBar;