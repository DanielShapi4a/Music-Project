import './App.css';
import React from 'react';
import { Footer, Blog, Possibility, Features, Musicblog, Header } from './containers';
import {CTA,Brand,Navbar} from './components';
import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <div className='BackGround'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Musicblog/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
