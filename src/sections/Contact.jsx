import React from 'react'

function Contact() {
    
  return (
    <div>
          <header>
        <div class="container">
            <div class="header-left">

            <a href="index.html"><img src="..\images light version\mainlogo.svg" alt="logo silicon"></a>
                
            <nav class="navbar">
                <a class="nav-link" href="#">Features</a>
            </nav>
        </div>
        
        <div class="header-right">
                <div class="mode-toggle">
                    <span class="label">Dark mode</span>
                    <label for="darkmode-toggle" id="darkmode-switch" class="switch" aria-label ="darkmode switch">   <!--from w3schools-->
                        <input id="darkmode-toggle" type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>

                <a class="btn-primary">
                    <img class="icon-btn-primary" src="images light version\icon-singIn_button.svg" alt="icon person">
                    <p>Sign in / up</p>
                </a>

                <a class="mobile-btn" aria-controls="main-menu" aria-expanded="false" aria-label="toggle navigation">
                    <img class="icon-menu" src="images light version\Button - Toggle navigation.svg" alt="icon">                </button>     
                </a>
            </div>
        </div>
    </header>

    <main>
    
        <section class="contact-page">

            <div class="container">

                <div class="header">
                    <h1>Contact us</h1>
                </div>

                <div class="contact-links">

                    <div class="email">
                        <div class="contact-icon btn-round">
                            <i class="fa-regular fa-envelope"></i>
                        </div>

                        <div class="email-text">
                            <h4>Email us</h4>
                            <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                            <a href="">Leave a message <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="careers">
                        <div class="contact-icon btn-round">
                            <i class="fa-solid fa-user-plus"></i>
                        </div>
                        
                        <div class="careers-text">
                            <h4>Careers</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem cumque aut asperiores est ab.</p>
                            <a href="">Send an application <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>


                <form id="regForm" class="reg-form" novalidate>
                    <h1>Get in touch</h1>
                   
                    <div class="userName">
                        <div class="input-group">
                            <label for="firstName" class="form-label">Full Name</label>
                            <input type="text" id="firstName" class="form-input" required>
                            <p class="invalid-input">Error Msg</p>
                        </div>

                    <div class="userContact">
                            <div class="input-group">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" id="email" class="form-input" required>
                                <p class="invalid-input">Error Msg</p>
                            </div>

                            <div class="input-group">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="tel" id="phone" class="form-input">
                            </div>
                    </div>
              

                    <div class="input-group">
                        <label for="userMessage" class="form-label">Message</label>
                        <textarea name="userMessage" id="userMessage" class="form-input" cols="8" rows="10" required></textarea>
                        <p class="invalid-input">Error Msg</p>
                    </div>

                    <div class="input-group">
                        <input type="checkbox" id="terms" class="form-check" required>
                        <label for="terms" class="terms">I accept the terms and conditions</label>
                        <p class="invalid-input">Error Msg</p>
                    </div>

                    <button type="submit" id="submitBtn" class="btn-primary submitBtn">Submit</button>
                </form>

            </div>

        </section>

<section class="location">
            <div class="container">

                <div class="map" style="height:400px; width:100%; display:inline-block; overflow:hidden;">

                    <iframe src="https://www.google.com/maps/d/embed?mid=1OAEKhdFYEDm7LsSMzt61I1deNvRSFYk&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>                    
                
                </div>

                <div class="address">

                    <div class="adress-1">

                        <h4> Silicon Apliccations 1</h4>
                        <div class="contact-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="contact-address">
                            <p> Stenbackevägen 6, 702 44 Örebro, Sweden</p>
                        </div>
                        <div class="contact-icon">
                            <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div class="contact-phone">
                            <p> (+46) 700 - 0956</p>
                        </div>
                        <div class="contact-icon">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <div class="contact-hours">
                            <p><span>Mon-Fri:</span> 9:00 am - 22:00am</p>
                            <p><span>Sat-Sun:</span> 9:00 am - 20:00am</p>
                        </div>
                        
                        
                    </div>

                    <div class="adress-2">

                        <h4> Silicon Apliccations 2</h4>
                        <div class="contact-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="contact-address">
                            <p> Pilgatan 2, 721 30 Västerås, Sweden<</p>
                        </div>
                        <div class="contact-icon">
                            <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div class="contact-phone">
                            <p>(+46) 700 - 0968</p>
                        </div>
                        <div class="contact-icon">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <div class="contact-hours">
                            <p><span>Mon-Fri:</span> 9:00 am - 22:00am</p>
                            <p><span>Sat-Sun:</span> 9:00 am - 20:00am</p>
                        </div>

                        
                    </div>

                    <div class="social-icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-square-x-twitter"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>

                    </div>

                </div>




            </div>

        </section>


    </main>

    </div>
  )
}

export default Contact