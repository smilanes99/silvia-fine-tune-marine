import React from 'react';
import './services.scss'; 
import panel from '../../assets/images/BluePanel.svg'
import gear from '../../assets/images/CogAndWrench.svg'
import light from '../../assets/images/BlueLightBulb.svg'
import cables from '../../assets/images/BlueWires.svg'
import speakers from '../../assets/images/BlueSpeakerIcon.svg'
import topRightImage from '../../assets/images/topRightWaves.svg';
import bottomLeftImage from '../../assets/images/bottomLeftWaves.svg';



function Services() {
  return (
    <div className='entire-services-page'>
      <img className="corner-image top-right" src={topRightImage} alt="Top Right Decoration" />
      <img className="corner-image bottom-left" src={bottomLeftImage} alt="Bottom Left Decoration" />
    <div className='services-nav'>
    <h2 className='services-title'> SERVICES </h2>
    </div>
    <p className='services-sub-title'>Hover over images for more details</p>
 
    <div className="services-container">
      <ul>
      <div className='top-row-cards'>
        <li>
          <div className="card">
            <div className="card-front">
              <img src={gear} alt="control panel" />
            </div>
            <div className="card-back">
              <p> From routine maintenance to complete vessel upgrades, 
            we can provide you with the best service and advice to 
            ensure your boat is always in its optimum condition.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <div className="card-front">
              <img src={panel} alt="cog and wrench" />
            </div>
            <div className="card-back">
              <p>From simple to complex designs, we'll make sure your panel is reliable and easy to use. Whether you're looking to replace
            an old panel or install a new one, we've got you covered.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <div className="card-front">
              <img src={light} alt="light bulb" />
            </div>
            <div className="card-back">
              <p>Light up your boat with our LED lighting systems. We can help design & install
            your new light system for your comfort and safety at night.</p>
            </div>
          </div>
        </li>
           </div>
           <div className='bottom-row-cards'>
        <li>
          <div className="card">
            <div className="card-front">
              <img src={cables} alt="electrical cable"/>
            </div>
            <div className="card-back">
              <p>Our expert services ensure that your Yamaha boat rigging 
            is done right the first time. We specialize in custom rigging and installations.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <div className="card-front">
              <img src={speakers} alt="speaker" />
            </div>
            <div className="card-back">
              <p>With our top-notch sound systems. Whether you need to replace, 
                repair or want to upgrade, we are here to help.</p>
            </div>
          </div>
        </li>
        </div>
      </ul>
    </div>
  </div>
);
}

export default Services;