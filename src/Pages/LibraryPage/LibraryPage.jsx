import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/SideBar';
import Error from '../../components/error/Error';
import Loader from '../../components/loader/Loader';
import SongCard from '../../components/songcard/SongCard';
import { fetchSongs } from '../../api/songApi';
import './LibraryPage.css';

const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const LibraryPage = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSongs();
        setSongs(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching songs');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // API access token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + clientID + '&client_secret=' + clientSecret
    };

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(response => response.json())
      .then(data => {
        setAccessToken(data.access_token);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  async function search() {
    console.log("Search for " + searchInput);

    // Get track IDs via search
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    };

    // Search for tracks
    var ids = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => {
        if (data.tracks && data.tracks.items) {
          return data.tracks.items.map(item => item.id);
        } else {
          return []; // Return an empty array if tracks are not found
        }
      })
      .catch(error => {
        console.error('Error fetching track IDs:', error); 
        return []; // Return an empty array if there's an error
      });
    console.log(ids);

    // Fetch details for each track
    const tracksDetails = await Promise.all(
      ids.map(async id => {
        const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, searchParameters);
        const trackData = await response.json();
        return {
          id: trackData.id,
          name: trackData.name,
          genre: trackData.genre,
          image: trackData.album.images[0].url 
        };
      })
    );

    console.log("Tracks details:", tracksDetails);
    setSongs(tracksDetails);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="LibraryPage">
        <Sidebar />
        <div className='main-content'>
          <div className="center-content">
            <div className="search-container">
              <input
                className="search-input"
                placeholder="Search For A Song :)"
                type="text"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    search();
                  }
                }}
              />
              <button className="Search-button" onClick={() => search()}>
                Search
              </button>
            </div>

            {loading && <Loader />} {/* Show loader while fetching data */}
            {error && <Error message={error} />} {/* Show error message if fetching failed */}
            {!loading && !error && (
              <div className='song-grid'>
                {songs.map(song => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
