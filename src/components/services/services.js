import React from 'react';
import './services.scss'; 
import panel from '../../assets/images/ControlPanel.png'
import gear from '../../assets/images/gear.png'
import light from '../../assets/images/LightBulb.png'
import cables from '../../assets/images/wires.png'
import speakers from '../../assets/images/speaker.png'



function Services() {
  return (
    <div className='entire-services-page'>
    <div className='services-nav'>
    <h2 className='services-title'> SERVICES </h2>
    </div>
    <p className='services-sub-title'>Hover over images for more details</p>
 
    <div className="services-container">
      <ul>
        <li>
          <div className="card">
            <div className="card-front">
              <img src={gear} alt="control panel" />
            </div>
            <div className="card-back">
              <h3>MAINTENANCE</h3>
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
                <h3>ACRYLIC  PANELS</h3>
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
                <h3>LIGHTING</h3>
              <p>Light up your boat with our LED lighting systems. We can help design & install
            your new light system for your comfort and safety at night.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <div className="card-front">
              <img src={cables} alt="electrical cable" />
            </div>
            <div className="card-back">
                <h3>YAMAHA RIGGING</h3>
              <p>Our expert services ensure that your boat rigging 
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
                <h3>SOUND SYSTEMS</h3>
              <p>With our top-notch sound systems. Whether you need to replace, 
                repair or want to upgrade, we are here to help.</p>
            </div>
          </div>
        </li>
    
      </ul>
    </div>
  </div>
);
}

export default Services;