import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiColseLin } from 'react-icons/ri';
import MusicLogo from '../../assets/MusicLogo.png';
import { signInWithGoogle } from './auth'; 
import firebase from './firebaseConfig'; 
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className='Nav-Section1'>
    <img className='MusicLogo' src={MusicLogo} alt='Music Logo' />
    <p className='Imagetext'>Epic Sounds</p>
  </div>
);

const NavLinks = ({ links, scrollToBottom }) => (
  <div className='Nav-Section2'>
    {links.map((link) => (
      <p key={link.id}>
        <Link to={`/${link.id}`} onClick={scrollToBottom}>
          {link.label}
        </Link>
      </p>
    ))}
  </div>
);

const UserActions = () => (
  <div className='Nav-Section3'>
    <a className='Info'>Log in</a>
    <button type='button' className='StartFreeTrial-button' onClick={signInWithGoogle}>
      Start free trial
    </button>
  </div>
);

const Navbar = () => {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const navLinks = [
    { id: 'home', label: 'Music' },
    { id: 'SFX', label: 'SFX' },
    { id: 'Footage', label: 'Footage' },
    { id: 'Templates', label: 'Templates' },
    { id: 'Plugins', label: 'Plugins' },
    { id: 'Apps', label: 'Apps' },
  ];

  return (
    <div className='Music__navbar'>
      <Logo />
      <NavLinks links={navLinks} scrollToBottom={scrollToBottom} /> 
      <UserActions />
    </div>
  );
};

export default Navbar;
