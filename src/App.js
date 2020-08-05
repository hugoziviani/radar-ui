import React from 'react'
import HeaderComponent from './components/Header'
import CarFormComponent from './components/CarForm'
import './CarForm.css'
import FooterComponent from './components/Footer'

import './App.css';



function App() {
  return (
    <div className="radar-app">
      <br></br>
      <HeaderComponent></HeaderComponent>
      <h1>Radar</h1>
      <CarFormComponent></CarFormComponent> 
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
