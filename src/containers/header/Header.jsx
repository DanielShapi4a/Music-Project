import React from 'react'
import './header.css'
import {useState,useEffect} from 'react';
import MovingText from 'react-moving-text'

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
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const CurentText = texts[currentIndex];
  return (
    <div className="Panorama">
      <p className='Currently'>
        Currently soundtracking more than 5 million
      </p>
      <MovingText
        type="fadeInFromBottom"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration=""
        fillMode="none">
        {CurentText}
      </MovingText>
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
            <button type='Text' className='ReadMore'>Read more</button>
        </div>
        <p>30-day free trail. Cancel anytime.</p>
      </div>
        <MyComponent/>
    </div>
  )
}

export default Header;