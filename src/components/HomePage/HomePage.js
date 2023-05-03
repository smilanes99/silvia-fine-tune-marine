import React from 'react';
import Heroimage from '../../assets/images/3DBoatLines.png'
import './HomePage.scss';

function HomePage() {
  return (
    <section id="main">
      <div className="container">
        <h1 className='hero-title'>MARINE TECHNICIAN</h1>
        <h2 className='hero-sub-title'>EXPERT IN RIGGING, SOUND SYSTEMS &amp; LIGHTING </h2>
        <img className="hero-img" src={Heroimage} alt="Boat Line Art" />
      </div>
    </section>
  );
}

export default HomePage;