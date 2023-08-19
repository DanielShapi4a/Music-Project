import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/SideBar';
import Error from '../components/error/Error';
import Loader from '../components/loader/Loader';
import SongCard from '../components/songcard/SongCard';
import { genres } from '../assets/constans';


const Library = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="LibraryPage">
        <Sidebar />
        
        <div className='flex flex-col'>
          <div className='w-full flex justify-between items-center
          sm:flex-row flex-col mt-4 mb-10'>
            <h2>Discover</h2>
            <select></select>
          </div>

        </div>



      </div>
    </div>
  );
};

export default Library;