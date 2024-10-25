import React from 'react'
import AppStoreButtonContent from '../assets/images/appstore_buttonconten.svg'
import GooglePLayButtonContent from '../assets/images/googleplay_buttoncontent.svg'
import HeroImageBack from '../assets/images/iPhone_mybudget_desktop.svg'
import HeroImageFront from '../assets/images/iPhone_yourcards_desktop.svg'


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
                            <img className="show-light" src={AppStoreButtonContent} alt=""/>
                        </a>
                        <a className="btn-app" href="#">
                            {/* <!-- <img className="show-dark" src="src/images dark version/googleplay.svg" alt=""/> --> */}
                            <img className="show-light" src={GooglePLayButtonContent} alt=""/>
                        </a>
                    </div>
    
                    <a className="discover-more" href="#">
                        <button className="btn-round">
                                <i className="fa-solid fa-chevron-down"></i>
                        </button>                        
                        <span>Discover more</span>
                    </a>
                </div>
    
                <div className="phone-images">
                    <img className="img-back" src={HeroImageBack} alt="iphone showing a budget expense timeline"/>
                    <img className="img-front" src={HeroImageFront} alt="iphone showing a credit card"/>
                </div>
        </div>

        </section>
  )
}

export default Hero