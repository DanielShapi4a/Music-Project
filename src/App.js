import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Footer, Blog,Possibility,Features,Musicblog,Header } from './containers';
import {CTA,Brand,Navbar} from './components';


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
