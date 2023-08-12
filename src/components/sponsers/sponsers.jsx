import React from 'react';
import './sponsers.css'
import Logo1 from '../../src/assets/HyperXLogo.png';
import Logo2 from '../../src/assets/JBL-Logo.png';
import Logo3 from '../../src/assets/Logitech_logo_white.svg';
import Logo4 from '../../../src/assets/RazerLogo.png';
import Logo5 from '../../src/assets/SennheiserLogo.jpeg';
import Logo6 from '../../src/assets/SteelSeriesLogo.png';
import Logo7 from '../../src/assets/jabra-logo.png';
import Logo8 from '../../src/assets/audio-technica-logo.png';

export const Sponser = () => {
  return (
    <div className='Central-sponsor'>
      <div className='FirstRow'>
        <img src={Logo1} alt='Logo1' />
        <img src={Logo2} alt='Logo2' />
        <img src={Logo3} alt='Logo3' />
        <img src={Logo4} alt='Logo4' />
      </div>
      <div className='SecondRow'>
        <img src={Logo5} alt='Logo5' />
        <img src={Logo6} alt='Logo6' />
        <img src={Logo7} alt='Logo7' />
        <img src={Logo8} alt='Logo8' />
      </div>
    </div>
  );
};
