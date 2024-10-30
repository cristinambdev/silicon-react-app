import React, { useEffect, useState } from 'react'

const DarkModeSwitch = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }

    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }

    }, [])

  return (
    <div className="darkModeSwitch">
        <span className="label">Dark mode</span>
          <label htmlFor="darkmode-toggle"  className="switch"  type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} aria-label ="darkmode switch">  
              <input id="darkmode-toggle" />
              <span className="slider round"></span>
          </label>
    </div>
  )
}

export default DarkModeSwitch