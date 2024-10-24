import React from 'react'

const Header = () => {
  return (
    <header className="container">

        <div className="header-left">

        <a href="index.html"><img src="src\images light version\mainlogo.svg" alt="logo silicon"/></a>
            
        <nav className="navbar">
            <a className="nav-link" href="#">Features</a>
        </nav>
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
                <img className="icon-btn-primary" src="src\images light version\icon-singIn_button.svg" alt="icon person"/>
                <p>Sign in / up</p>
            </a>

            <a className="mobile-btn" aria-controls="main-menu" aria-expanded="false" aria-label="toggle navigation">
                <img className="icon-menu" src="src\images light version\Button - Toggle navigation.svg" alt="icon"/>                    
            </a>

        </div>
</header>


  )
}

export default Header