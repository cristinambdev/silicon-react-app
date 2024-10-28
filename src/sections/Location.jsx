import React from 'react'

const Location = () => {
  return (
    <>
    <section className="location">
        <div className="container">

            <div className="map" style="height:400px; width:100%; display:inline-block; overflow:hidden;">

                <iframe src="https://www.google.com/maps/d/embed?mid=1OAEKhdFYEDm7LsSMzt61I1deNvRSFYk&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>                    
            
            </div>

            <div className="address">

                <div className="adress-1">

                    <h4> Silicon Apliccations 1</h4>
                    <div className="contact-icon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="contact-address">
                        <p> Stenbackevägen 6, 702 44 Örebro, Sweden</p>
                    </div>
                    <div className="contact-icon">
                        <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="contact-phone">
                        <p> (+46) 700 - 0956</p>
                    </div>
                    <div className="contact-icon">
                        <i className="fa-regular fa-clock"></i>
                    </div>
                    <div className="contact-hours">
                        <p><span>Mon-Fri:</span> 9:00 am - 22:00am</p>
                        <p><span>Sat-Sun:</span> 9:00 am - 20:00am</p>
                    </div>
                    
                    
                </div>

                <div className="adress-2">

                    <h4> Silicon Apliccations 2</h4>
                    <div className="contact-icon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="contact-address">
                        <p> Pilgatan 2, 721 30 Västerås, Sweden</p>
                    </div>
                    <div className="contact-icon">
                        <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="contact-phone">
                        <p>(+46) 700 - 0968</p>
                    </div>
                    <div className="contact-icon">
                        <i className="fa-regular fa-clock"></i>
                    </div>
                    <div className="contact-hours">
                        <p><span>Mon-Fri:</span> 9:00 am - 22:00am</p>
                        <p><span>Sat-Sun:</span> 9:00 am - 20:00am</p>
                    </div>

                    
                </div>

                <div className="social-icons">
                   <a target="_blank" href=""> <i className="fa-brands fa-facebook"></i></a>
                   <a target="_blank" href=""><i className="fa-brands fa-square-x-twitter"></i></a> 
                   <a target="_blank" href=""><i className="fa-brands fa-square-instagram"></i></a>
                   <a target="_blank" href=""><i className="fa-brands fa-youtube"></i></a>

                </div>

            </div>


        </div>

    </section>

    </>
  )
}

export default Location