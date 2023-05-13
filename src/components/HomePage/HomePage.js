import React from "react";
import "./HomePage.scss";
import leftWaves from "../../assets/images/bottomLeftWaves2.svg";
import rightWaves from "../../assets/images/topRightWaves3.svg";
import boatLines from '../../assets/images/heroboat.svg';

function HomePage() {
  return (
    <section className="hero">
      
            <div className="hero__content">
            <img className="hero__background--img2" src={rightWaves} alt=" right blue corner waves" />
            <img className="hero__background--img1" src={leftWaves} alt=" left blue corner waves" />
            
                <div className="hero__section">
                    <div className="hero-text">
                        <h1 className="hero-title">MARINE TECHNICIAN</h1>
                        <h2 className="hero-subtitle">EXPERT IN RIGGING, SOUND SYSTEMS &amp; LIGHTING</h2>
                    </div>
                    <div className="hero__boat">
                        <img className="hero__boat--img" src={boatLines} alt="" />
                    </div>
                </div>
                <div className="hero__section">
                  
                </div>
            </div>
        </section>
  );
}

export default HomePage;
