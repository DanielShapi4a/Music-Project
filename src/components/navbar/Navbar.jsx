import React, { useState, useEffect } from 'react';
import './navbar.css';
import MusicLogo from '../../assets/MusicLogo.png';
import { Link } from 'react-router-dom';
import { auth, provider } from '../../config/firebase.ts';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

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

const UserActions = ({ user, onLoginClick, onLogoutClick }) => (
  <div className='Nav-Section3'>
    {user ? (
      <div className='UserContainer'>
        <div className='UserPhotoContainer'>
          <img src={user.photoURL} alt='User' className='UserPhoto' />
        </div>
        <span className='UserName'>{user.displayName}</span>
        <button type='button' className='Logout-button' onClick={onLogoutClick}>
          Logout
        </button>
      </div>
    ) : (
      <button type='button' className='StartFreeTrial-button' onClick={onLoginClick}>
        Login Here
      </button>
    )}
  </div>
);

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleLoginClick = () => {
    signInWithPopup(auth, provider);
  };

  const handleLogoutClick = () => {
    signOut(auth);
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
      <UserActions user={user} onLoginClick={handleLoginClick} onLogoutClick={handleLogoutClick} />
    </div>
  );
};

export default Navbar;
