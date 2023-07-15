import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiColseLin} from 'react-icons/ri';
import MusicLogo from '../../assets/MusicLogo.png'



const Navbar = () => {
  return (
    <div className='Music__navbar'>
      <div className='Music__navbar-sections'>
        <div className='Nav-Section1'>
          <img className='MusicLogo' src={MusicLogo}></img><p className='Imagetext'>Epic Sounds</p>
        </div>
      </div>

      <div className='Music__navbar-sections'>
        <div className='Nav-Section2'>
          <p><a href='#home'>Music</a></p>
          <p><a href='#SFX'>SFX</a></p>
          <p><a href='#Footage'>Footage</a></p>
          <p><a href='#Templates'>Templates</a></p>
          <p><a href='#Plugins'>Plugins</a></p>
          <p><a href='#Apps'>Apps</a></p>
        </div>
      </div>
      
      <div className='Music__navbar-sections'>
          <div className='Nav-Section2'>
            <a className='Info'>Log in</a>
            <button type='Text' className='StartFreeTrial-button'>Start free trial</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar