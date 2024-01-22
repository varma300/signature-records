import React from 'react'
import './Headeer.css'
import Navbar from '../Navbar/NavBar'


const Header = () => {
  return (
        <div className='header'>
          <img src='https://yt3.googleusercontent.com/c41AWG50Dcql2hwqdx-gJDlgeGHVSMuxUYcOYobtZjevaoQyGSXemS8diO0OYW_7QicXxIehJw=s176-c-k-c0x00ffffff-no-rj' className='header_img' />
          <Navbar />
        </div>
  )
}

export default Header