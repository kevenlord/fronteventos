import React from 'react';

import './App.css';

import logo from './assets/logo_transparent.png';//Importando o logo em uma variavel

import Routes from './routes';


function App() {
  return ( 
    <div className="container">
      <img src={logo} alt="LearnEvents"/> 

      <div className="content">
        <Routes/>    
      </div>
    </div>
  );
}

export default App;
