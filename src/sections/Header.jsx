import React from 'react'
import NavBar from './NavBar'
import MobileButton from './MobileButton'
import LogoType from '../assets/images/mainlogo.svg'
import UserIcon from '../assets/images/icon-singIn_button.svg'

const Header = () => {
  return (
    <header className="container">

        <div className="header-left">

            <a href="index.html"><img src={LogoType} alt="logo silicon"/></a>
                
            <NavBar/>

        </div>

        <div className="header-right">

            <div className="mode-toggle">
                <span className="label">Dark mode</span>
                <label for="darkmode-toggle" id="darkmode-switch" className="switch" aria-label ="darkmode switch">   
                    <input id="darkmode-toggle" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

            <a className="btn-primary">
                <img className="icon-btn-primary" src={UserIcon} alt="icon person"/>
                <p>Sign in / up</p>
            </a>

            <MobileButton/>

        </div>
</header>


  )
}

export default Header