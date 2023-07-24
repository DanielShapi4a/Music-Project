import './App.css';
import React from 'react';
import {Musicblog, Header} from './containers';
import {Brand, Navbar} from './components';
import {useState, useEffect} from 'react';
import Logo1 from "../src/assets/HyperXLogo.png"
import Logo2 from "../src/assets/JBL-Logo.png"
import Logo3 from "../src/assets/Logitech_logo_white.svg"
import Logo4 from "../src/assets/RazerLogo.png"
import Logo5 from "../src/assets/SennheiserLogo.jpeg"
import Logo6 from "../src/assets/SteelSeriesLogo.png"
import Logo7 from "../src/assets/jabra-logo.png"
import Logo8 from "../src/assets/audio-technica-logo.png"

function App() {
  return (
    <div className="App">
      <div className='BackGround'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <div className='Central-sponsor'>
        <div className='FirstRow'>
          <img src={Logo1} />
          <img src={Logo2} />
          <img src={Logo3} />
          <img src={Logo4} />
        </div>
        <div className='SecondRow'>
          <img src={Logo5} />
          <img src={Logo6} />
          <img src={Logo7} />
          <img src={Logo8} />
        </div>
      </div>

      <Musicblog/>
    </div>
  );
}

export default App;
