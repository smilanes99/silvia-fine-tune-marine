import React from 'react';
import Palm from '../../assets/images/palmTree.png'
import './contact.scss';
import Weather from '../weather/weather';



function Contact() {

    return (
        <div className='contact-page'>
        <div className='contact-section'>
        <h2 className='contact-section-title'>GET IN TOUCH FOR FINE-TUNED MARINE SERVICES</h2>
        <div className='contact-section-text'>
        <p className='phone-number'>Phone:+1(305)-916-9321 </p>
  <p>Address:We come to you! Serving Miami-Fort Lauderdale Area</p>
  <p>Follow us on social media!</p>
  </div>
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
       </div>
       <Weather/>
       {/* <img classNameNameName='palm-tree' src={Palm} alt='Palm tree Lines'/> */}
        </div>
      );
    }
    
    export default Contact;