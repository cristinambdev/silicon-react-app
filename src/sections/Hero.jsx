import React from 'react'

function Hero() {
  return (
    <section className="hero" aria-label="showcase">
            <div className="container">
                <div className="headline">
                    <h1>Manage All Your <span>Money in One App</span></h1>
                </div>
                <div className="content">
                    <p>We offer you a new generation of the mobile banking.
                     <span>Save, spend & manage money in your pocket.</span></p>
                    
                    <div className="market-buttons">
                        <a className="btn-app" href="#">
                            {/* <!-- <img className="show-dark" src="src/images dark version/appstore.svg" alt=""/> --> */}
                            <img className="show-light" src="src/images light version\appstore_buttonconten.svg" alt=""/>
                        </a>
                        <a className="btn-app" href="#">
                            {/* <!-- <img className="show-dark" src="src/images dark version/googleplay.svg" alt=""/> --> */}
                            <img className="show-light" src="src/images light version\googleplay_buttoncontent.svg" alt=""/>
                        </a>
                    </div>
    
                    <a className="discover-more-btn" href="#">
                        <img src="src/images light version\next-btn-section1.svg" alt=""/>
                        <span>Discover more</span>
                    </a>
                </div>
    
                <div className="phone-images">
                    <img className="img-back" src="src/images light version\iPhone_mybudget_desktop.svg" alt="iphone showing a budget expense timeline"/>
                    <img className="img-front" src="src/images light version\iPhone_yourcards_desktop.svg" alt="iphone showing a credit card"/>
                </div>
        </div>

        </section>
  )
}

export default Hero