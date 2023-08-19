import React, { useState } from 'react';
import './Sidebar.css'; // Your custom CSS for the sidebar

const Sidebar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="sidebar">
      <button className="sidebar-button">Home</button>

      <button className="sidebar-button" onClick={toggleSearch}>
        Search
      </button>
      {searchVisible && (
        <div className="search-bar">
          {/* Your search bar component */}
          <div className="overlay" onClick={toggleSearch}></div>
        </div>
      )}

      <button className="sidebar-button">Create Playlist</button>

      <button className="sidebar-button">Liked Songs</button>
    </div>
  );
};

export default Sidebar;