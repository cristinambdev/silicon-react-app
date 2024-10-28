import React from 'react'
import LogoType from '../assets/images/mainlogo.svg'
import UserIcon from '../assets/images/icon-singIn_button.svg'

import { Link } from 'react-router-dom'

import NavBar from './NavBar'
import MobileButton from './MobileButton'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <header className="container">

        <div className="header-left">

            <Link to="/"><img src={LogoType} alt="logo silicon"/></Link>
                
            <NavBar/>

        </div>

        <div className="header-right">

            <DarkModeSwitch/>

            <Link className="btn-primary" to="/">
                <img className="icon-btn-primary" src={UserIcon} alt="icon person"/>
                <p>Sign in / up</p>
            </Link>

            <MobileButton/>

        </div>
</header>


  )
}

export default Header