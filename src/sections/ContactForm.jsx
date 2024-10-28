import React from 'react'


const ContactForm = () => {
  return (
    <>
    
    <section className="contact-page">

        <div className="container">

            <div className="header">
                <h1>Contact us</h1>
            </div>

            <div className="contact-links">

                <div className="email">
                    <div className="contact-icon btn-round">
                        <i className="fa-regular fa-envelope"></i>
                    </div>

                    <div className="email-text">
                        <h4>Email us</h4>
                        <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                        <a href="">Leave a message <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="careers">
                    <div className="contact-icon btn-round">
                        <i className="fa-solid fa-user-plus"></i>
                    </div>
                    
                    <div className="careers-text">
                        <h4>Careers</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem cumque aut asperiores est ab.</p>
                        <a href="">Send an application <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>


            <form id="regForm" className="reg-form" novalidate>
                <h1>Get in touch</h1>
               
                <div className="userName">
                    <div className="input-group">
                        <label for="firstName" className="form-label">Full Name</label>
                        <input type="text" id="firstName" className="form-input" required/>
                        <p className="invalid-input">Error Msg</p>
                    </div>
                
                </div>

                <div className="userContact">
                        <div className="input-group">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" id="email" className="form-input" required/>
                            <p className="invalid-input">Error Msg</p>
                        </div>

                        <div className="input-group">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="tel" id="phone" className="form-input"/>
                        </div>
                </div>
          

                <div className="input-group">
                    <label for="userMessage" className="form-label">Message</label>
                    <textarea name="userMessage" id="userMessage" className="form-input" cols="8" rows="10" required></textarea>
                    <p className="invalid-input">Error Msg</p>
                </div>

                <div className="input-group">
                    <input type="checkbox" id="terms" className="form-check" required/>
                    <label for="terms" className="terms">I accept the terms and conditions</label>
                    <p className="invalid-input">Error Msg</p>
                </div>

                <button type="submit" id="submitBtn" className="btn-primary submitBtn">Submit</button>
            </form>

        </div>

    </section>

    

        
    </>
  )
}

export default ContactForm

