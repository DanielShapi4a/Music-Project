import React from 'react'
import './musicblog.css'
import MusicLogo1 from "../../assets/Lofi.jpg"
import MusicLogo2 from "../../assets/EDM.jpg"
import MusicLogo3 from "../../assets/Pop.jpg"
import MusicLogo4 from "../../assets/Indie.jpg"
import MusicLogo5 from "../../assets/Trap.jpg"
import MusicLogo6 from "../../assets/Rap.jpg"



import { useState, useRef } from 'react';

const Musicblog = () => {
  const [currentGenre, setCurrentGenre] = useState(null);
  const audioRef = useRef(null);

  const playMusic = (genre, startTime) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = startTime;
    }
    const audioElement = new Audio(`${process.env.PUBLIC_URL}/music-samples/${genre}.mp3`);
    audioElement.currentTime = startTime;
    audioElement.play();
    setCurrentGenre(genre);
    audioRef.current = audioElement;
  };

  return (
    <div>
      <div className='TextSound'>
        <h2 className='HeadLineText'>Authentic Music, Meaningful Influence<p className='centralText'>Collaborating with top music creators worldwide, we create exclusive and authentic new tracks daily, just for you.</p></h2>
        <p>Try one of our many genre &#x1F604;</p>
      </div>

      <div className='MusicCatalog'>
        <a className='MusicGenre1'>
          <img src={MusicLogo1} alt='Lofi' onClick={() => playMusic('Lofi', 12)}/>
          Lofi
        </a>
        <a className='MusicGenre2'>
          <img src={MusicLogo2} alt='Electronic Dance' onClick={() => playMusic('Electronic Dance', 3)}/>
          Electronic Dance
        </a>
        <a className='MusicGenre3'>
          <img src={MusicLogo3} alt='Pop' onClick={() => playMusic('Pop', 0)}/>
          Pop
        </a>
        <a className='MusicGenre4'>
          <img src={MusicLogo4} alt='Indie' onClick={() => playMusic('Indie', 0)} />
          Indie
        </a>
        <a className='MusicGenre5'>
          <img src={MusicLogo5} alt='Trap' onClick={() => playMusic('Trap', 46)}/>
          Trap
        </a>
        <a className='MusicGenre6'>
          <img src={MusicLogo6} alt='Rap' onClick={() => playMusic('Rap', 89)}/>
          Rap
        </a>
      </div>
    </div>
  )
}

export default Musicblog;