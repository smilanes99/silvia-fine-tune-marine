import React from 'react';
import './HomePage.scss';
import leftWaves from "../../assets/images/waves left.svg"

function HomePage() {
  return (
    <section id="main">
      <div className="container">
        <div className='hero-text'>
        <h1 className='hero-title'>MARINE<br></br> TECHNICIAN</h1>
        <h2 className='hero-sub-title'>EXPERT IN RIGGING, SOUND SYSTEMS &amp; LIGHTING </h2>
        </div>
        {/* <div className='left-corner'>
        <img src={leftWaves} alt='Left corner blue waves'/>
        </div> */}
        <div className="hero-img">
        </div>
      </div>
    </section>
  );
}

export default HomePage;