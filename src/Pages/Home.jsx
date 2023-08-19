import React from 'react';
import Navbar from '../components/navbar/Navbar'; 
import Brand from '../components/brand/Brand'; 
import Header from '../containers/header/Header';  
import Sponser from '../components/sponsers/sponsers';
import Musicblog from '../containers/musicblog/Musicblog';
import '../../src/App.css'

const Home = () => {
  return (
    <div className="App">
      <div className='BackGround'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Sponser/>

      <Musicblog/>
    </div>
  );
};

export default Home;