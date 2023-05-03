import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Services from './components/services/services';
import About from './components/about/about';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Services/>
      <About />
    </div>
  );
}

export default App;
