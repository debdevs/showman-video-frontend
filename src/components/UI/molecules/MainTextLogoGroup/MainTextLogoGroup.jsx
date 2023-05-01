import React from 'react'
import './MainTextLogoGroup.css'
import showman_logo from '../../../../assets/images/Showman_V02_logodesat.png'

const MainTextLogoGroup = () => {
  return (
    <div className='main_text_logo_group_parent'>
        <div className='top_items'>
            <h1 className='header_text' >Buy on <span>Etsy</span>, edit with</h1>
            <img src={showman_logo} className='logo'/>
        </div>
        <div className='separator_line'></div>
        <p className='paragraph_text' >
        Fill out a simple form and wait for your video to be automatically delivered. 
<br/><br/>
Looking good has never been so easy.


        </p>
    </div>
  )
}

export default MainTextLogoGroup