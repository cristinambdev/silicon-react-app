import React from 'react'
import ToggleButton from '../assets/images/Button - Toggle navigation.svg'

const MobileButton = () => {
  return (
    <div>
        <a className="mobile-btn" aria-controls="main-menu" aria-expanded="false" aria-label="toggle navigation">
            <img className="icon-menu" src={ToggleButton} alt="icon"/>                    
        </a>
    </div>
  )
}

export default MobileButton