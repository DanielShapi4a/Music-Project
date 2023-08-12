import React, { useState, useRef } from 'react';
import './musicblog.css';
import MusicLogo1 from "../../assets/Lofi.jpg";
import MusicLogo2 from "../../assets/EDM.jpg";
import MusicLogo3 from "../../assets/Pop.jpg";
import MusicLogo4 from "../../assets/Indie.jpg";
import MusicLogo5 from "../../assets/Trap.jpg";
import MusicLogo6 from "../../assets/Rap.jpg";
import GenreCard from './GenreCard';

const genres = [
  { name: 'Lofi', startTime: 12, logoSrc: MusicLogo1 },
  { name: 'Electronic Dance', startTime: 3, logoSrc: MusicLogo2 },
  { name: 'Pop', startTime: 0, logoSrc: MusicLogo3 },
  { name: 'Indie', startTime: 0, logoSrc: MusicLogo4 },
  { name: 'Trap', startTime: 46, logoSrc: MusicLogo5 },
  { name: 'Rap', startTime: 89, logoSrc: MusicLogo6 },
];

const Musicblog = () => {
  const [currentGenre, setCurrentGenre] = useState(null);
  const audioRef = useRef(null);

  const playMusic = (genre, startTime) => {
    if (audioRef.current && currentGenre === genre) {
      // If the same genre is clicked and the audio is currently playing, pause it
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      } else {
        // If the audio is paused, play it from the paused time
        audioRef.current.play();
      }
    } else {
      // If a different genre is clicked or the audio is paused, play it from the beginning
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audioElement = new Audio(`${process.env.PUBLIC_URL}/music-samples/${genre}.mp3`);
      audioElement.currentTime = startTime;
      audioElement.volume = 0.15;
      audioElement.play();
      setCurrentGenre(genre);
      audioRef.current = audioElement;
    }
  };

  return (
    <div>
      <div className='TextSound'>
        <h2 className='HeadLineText'>Authentic Music, Meaningful Influence<p className='centralText'>Collaborating with top music creators worldwide, we create exclusive and authentic new tracks daily, just for you.</p></h2>
        <p>Try one of our many genres &#x1F604;</p>
      </div>

      <div className='MusicCatalog'>
        {genres.map((genre) => (
          <GenreCard
            key={genre.name}
            genreName={genre.name}
            logoSrc={genre.logoSrc}
            startTime={genre.startTime}
            onClick={playMusic}
          />
        ))}
      </div>
    </div>
  );
};

export default Musicblog;