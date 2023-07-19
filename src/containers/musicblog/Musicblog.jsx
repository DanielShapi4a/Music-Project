import React from 'react'
import './musicblog.css'
import MusicLogo1 from "../../assets/"

const Musicblog = () => {
  return (
    <div className='TextSound'>
      <h2 className='HeadLineText'>Authentic Music, Meaningful Influence<p className='centralText'>Collaborating with top music creators worldwide, we curate exclusive and authentic new tracks daily, just for you.</p></h2>

      <div className='MusicCatalog'>
        <div className='MusicGenre1'>
          <div>
            <img></img>
            <a>Electronic Dance</a>
          </div>
        </div>
        <div className='MusicGenre2'>
          <div>
            <img></img>
            <a>Pop</a>
          </div>
        </div>
        <div className='MusicGenre3'>
          <div>
            <img></img>
            <a>Rap</a>
          </div>
        </div>
        <div className='MusicGenre4'>
          <div>
            <img></img>
            <a>Lofi</a>
          </div>
        </div>
        <div className='MusicGenre5'>
          <div>
            <img></img>
            <a>Indie</a>
          </div>
        </div>
        <div className='MusicGenre6'>
          <div>
            <img></img>
            <a>Trap</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Musicblog