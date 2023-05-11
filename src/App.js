import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Services from './components/services/services';
import About from './components/about/about';
import Contact from './components/contact/contact';


function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
