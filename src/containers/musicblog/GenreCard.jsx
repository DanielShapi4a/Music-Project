import React from 'react';
import './musicblog.css';

const GenreCard = ({ genreName, logoSrc, startTime, onClick }) => (
  <a className={`MusicGenre ${genreName}`} onClick={() => onClick(genreName, startTime)}>
    <img src={logoSrc} alt={genreName} />
    {genreName}
  </a>
);

export default GenreCard;
