import React from 'react';
import './contact.scss';
import Weather from '../weather/weather';
import Form from '../form/form';
import instagram from "../../assets/icons/instagram-icon.png"
import phone from "../../assets/icons/phone-icon.png"
import car from "../../assets/icons/car-icon.png"

function Contact() {

    return (
    <div id="contact">
        <div className='contact-page'>
        
           <h2 className='contact-section-title'>GET IN TOUCH!</h2>
   
        <div className='contact-section'>
        <div className='contact-section-text'>
        <ul className="wrapper">
  <p className= "insta-title">Follow me on Instagram!</p>
  <li className="icon-instagram">
            <a href="https://www.instagram.com/finetunemarine" target="_blank" rel="noopener noreferrer">
              <img className="icon-instagram" src={instagram} alt='Instagram'/>
            </a>
            </li>
       </ul>
          <div className='phone-number-area'>
        <img className="icon-phone" src={phone} alt='phone icon'/>
        <p className='phone-number'>+1(305)-916-9321 </p>
        </div>
        <div className='address-area'>
        <img className="icon-car" src={car} alt='car icon'/>
  <p className='address-text'>We come to you! Serving Miami-Fort Lauderdale Area</p>
  </div>

       </div>
       <div className='form-div'>
       <Form/>
       </div>
       </div>
       <div className='weather-title'>Plan Ahead for Smooth Sailing or Repairs!</div>
       <div className='location-title'> Miami Forecast</div>
       <div className='weather-div'>
       <Weather/>
       </div>
      </div>
      </div>
      );
    }
    
    export default Contact;