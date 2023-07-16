import React from 'react'
import './header.css'
import {useState,useEffect} from 'react';

const MyComponent = () => {
  const texts = [
    'Lifestyle Vloggers',
    'Netflix shows',
    'Twitch Streamers',
    'ASMR Videos',
    'TikTok Challenges',
    'Crime Podcasts',
    'YouTube Pranksters',
    'Pop-up Stores'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect( () => {
    const interval = setInterval( () => {
      setCurrentIndex((prevIndex) =>(prevIndex + 1) % texts.length);
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Panorama">
      <p className='Currently'>
        Currently soundtracking more than 5 million
      </p>
      <p className="ChangingText">{texts[currentIndex]}</p>
      
    </div>
  );
};


const Header = () => {
  return (
    <div className='Main-Header'>
      <div className='main-text'>
        <h1>The Perfect Soundtrack for every story</h1>
        <p>Whatever the mood, scene or audience, our catalog of music and sound effects takes your content from memorable to unforgettable.</p>
        <div className="button-container">
            <button type='Text' className='StartFreeTrial-button'>Start free trial</button>
            <button className='ReadMore'>Read more</button>
        </div>
        <p>30-day free trail. Cancel anytime.</p>
      </div>
        <MyComponent/>
    </div>
  )
}

export default Header;