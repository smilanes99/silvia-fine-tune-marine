import React, { useState } from 'react';
import './form.scss';
import { useForm } from '@formspree/react';
import instagram from "../../assets/icons/instagram-icon.png"

const Form = () => {
  // const [submitted, setSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("xdovjbdq");
  if (state.succeeded) {
      return <div className="form-container">
      <div className="thank-you-note">
      Thank You for Submitting, for a quicker response please call, text or DM us on Instagram. 
 
    <a className="icon-instagram-form" href="https://www.instagram.com/finetunemarine" target="_blank" rel="noopener noreferrer">
     <img className="icon-instagram-form" src={instagram} alt='Instagram'/></a>
    </div>  
    </div>   ;
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setSubmitted(true);
  // }

  return (
    
    <div className="form-container">
        <>
          <h1 className='form-header'>Fill out this form to be contacted</h1>
          <p className="smaller-text">*For a quicker response please reach out directly through text or Instagram.</p>
          <form action="https://formspree.io/f/xdovjbdq" method="POST" onSubmit={handleSubmit}>
          <input type="text" name="Name" placeholder="Name" required />
            <input type="text" name="PhoneNumber" placeholder="Phone Number" required />
            <textarea name="Message" placeholder="How can I help?" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </>
      
    </div>
  );
};
export default Form;