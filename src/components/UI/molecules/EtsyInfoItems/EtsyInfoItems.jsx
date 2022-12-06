import React from 'react'
import './EtsyInfoItems.css'
import desaturated_icon from '../../../../assets/images/logo.png';
const EtsyInfoItems = () => {
  return (
    <div className='etsy_info_container'>
        <etsy-content-container>
            <h1 className='etsy_text'>Buy on <span>Etsy</span>, edit with</h1>
            <img src={desaturated_icon} alt="" className='logo_image'/>
            <accent-line-div />
            <p className='etsy_paragraph outfit'>Fill out a simple form and wait for your video to be automatically delivered. 
<br></br>
<br></br>
Looking good has never been so easy.</p>

        </etsy-content-container>

        </div>
  )
}

export default EtsyInfoItems