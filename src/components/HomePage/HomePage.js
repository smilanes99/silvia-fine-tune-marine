import React from "react";
import "./HomePage.scss";
import leftWaves from "../../assets/images/waves left.svg";
import rightWaves from "../../assets/images/waves right2.svg";
import boatLines from '../../assets/images/heroboat.svg';

function HomePage() {
  return (
    <section className="hero">
            <div className="hero__cont">
                <div className="hero__sec">
                    <div className="hero--text">
                        <h1 className="hero--title">MARINE TECHNICIAN</h1>
                        <h2 className="hero--subtitle">EXPERT IN RIGGING, SOUND SYSTEMS &amp; LIGHTING</h2>
                    </div>
                    <div className="hero__boat">
                        <img className="hero__boat--img" src={boatLines} alt="" />
                    </div>
                </div>
                <div className="hero__sec">
                    <div className="hero__bg">
                      
                        <img className="hero__bg--img2" src={leftWaves} alt=" right blue corner waves" />
                    </div>
                </div>
            </div>
        </section>
  );
}

export default HomePage;
