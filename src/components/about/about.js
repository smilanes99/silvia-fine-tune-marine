
import React from 'react';
import cartoon from '../../assets/images/logo-version (4).png';
import bubble from '../../assets/images/speechBubble.svg'
import './about.scss';




function About() {

return (
    <div className="about-container">
      <div className="image-container">
      <img className='bubble' src={bubble} alt="speech bubble" />
        <img className='cartoon' src={cartoon} alt="Cartoon Man" />
      </div>
      <div className="info-container">
        <h2>MEET THE OWNER</h2>
        <p>Born in Puerto Rico, I moved to Miami in 2020 to pursue my passion. After graduating top of my class, I joined Strictly Yamaha, a leading company in the industry, where I gained valuable experience and expertise in rigging, sound systems, and lighting. With over 5 years of experience in the field, I decided to start my own business and offer a personalized and professional service to boat owners in Miami/ft. Lauderdale area.</p>
        <p>Naci en Puerto Rico, me mudé a Miami en 2020 para seguir mi pasión. Después de graduarme en el primer lugar de mi clase, me uní a 'Strictly Yamaha', una empresa líder en la industria, donde obtuve experiencia y conocimientos valiosos en el montaje de equipos, sistemas de sonido y iluminación. Con más de 5 años de experiencia, decidí iniciar mi propio negocio y ofrecer un servicio personalizado y profesional a los propietarios de barcos en la área de Miami/Ft. Lauderdale.

</p>
      </div>
    </div>
  );
}

export default About;