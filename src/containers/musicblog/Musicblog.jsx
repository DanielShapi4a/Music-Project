import React from 'react'
import './musicblog.css'
import MusicLogo1 from "../../assets/Lofi.jpg"
import MusicLogo2 from "../../assets/EDM.jpg"
import MusicLogo3 from "../../assets/Pop.jpg"
import MusicLogo4 from "../../assets/Indie.jpg"
import MusicLogo5 from "../../assets/Trap.jpg"
import MusicLogo6 from "../../assets/Rap.jpg"


const Musicblog = () => {
  return (
    <div >
      <div className='TextSound'>
        <h2 className='HeadLineText'>Authentic Music, Meaningful Influence<p className='centralText'>Collaborating with top music creators worldwide, we create exclusive and authentic new tracks daily, just for you.</p></h2>
      </div>


      <div className='MusicCatalog'>
        <a className='MusicGenre1'>
          <img src={MusicLogo1} alt='Lofi' />
          Lofi
        </a>
        <a className='MusicGenre2'>
          <img src={MusicLogo2} alt='Electronic Dance' />
          Electronic Dance
        </a>
        <a className='MusicGenre3'>
          <img src={MusicLogo3} alt='Pop' />
          Pop
        </a>
        <a className='MusicGenre4'>
          <img src={MusicLogo4} alt='Indie' />
          Indie
        </a>
        <a className='MusicGenre5'>
          <img src={MusicLogo5} alt='Trap' />
          Trap
        </a>
        <a className='MusicGenre6'>
          <img src={MusicLogo6} alt='Rap' />
          Rap
        </a>
      </div>

    </div>
  )
}

export default Musicblog