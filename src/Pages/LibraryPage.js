import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/SideBar';

const Library = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="LibraryPage">
        <Sidebar />
        {/* Content for the library page */}
      </div>
    </div>
  );
};

export default Library;