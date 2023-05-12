import React from 'react';
import './contact.scss';
import Weather from '../weather/weather';
import Form from '../form/form';



function Contact() {

    return (
        <div className='contact-page'>
           <h2 className='contact-section-title'>GET IN TOUCH </h2>
        <div className='contact-section'>
       
        <div className='contact-section-text'>
        <p className='phone-number'>Phone:+1(305)-916-9321 </p>
  <p>Address: We come to you!<br></br> Serving Miami-Fort Lauderdale Area</p>
  <p><strong>Follow us on social media!</strong></p>
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
       <div className='form-div'>
       <Form/>
       </div>
       </div>
       <div className='weather-title'>Plan ahead for smooth sailing or repairs!</div>
       <div className='location-title'> Miami Forecast</div>
       <div className='weather-div'>
       <Weather/>
       </div>
      </div>
      );
    }
    
    export default Contact;