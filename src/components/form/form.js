import React, { useState } from 'react';
import './form.scss';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      {submitted ? (
        <div className="thank-you-note">
          Thank You for Submitting, for a quicker response please call, text or DM us on Instagram.
        </div>
      ) : (
        <>
          <h1 className='form-header'>Fill out this form to be contacted</h1>
          <p className="smaller-text">*For a quicker response please reach out directly through text or Instagram.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Phone Number" required />
            <textarea placeholder="Reason for reaching out" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;