import React from 'react';
import './SongCard.css'; 

const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <img src={song.image} alt={song.name} className="song-image" />
      <div className="song-details">
        <h3 className="song-title">{song.name}</h3>
        <p className="song-artist">{song.artist}</p>
        <p className="song-genre">{song.genre}</p>
      </div>
    </div>
  );
};

export default SongCard;
