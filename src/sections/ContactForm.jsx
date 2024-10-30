import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactForm = () => {
  return (
    <>
    
    <section className="contact-page">

        <div className="container">

            <div className="header">
                <h1>Contact us</h1>
            </div>

            <div className="contact-links">

                <div className="contact-item email">
                    <i className="fa-regular fa-envelope"></i>
                    <div className="email-text">
                        <h4>Email us</h4>
                        <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                        <NavLink to="/" className="email-link">Leave a message <i className="fa-solid fa-arrow-right"></i></NavLink >
                    </div>
                </div>

                <div className="contact-item careers">

                    <i className="fa-solid fa-user-plus"></i>
                    <div className="careers-text">
                        <h4>Careers</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
                        <NavLink  to="/" className="application-link">Send an application <i className="fa-solid fa-arrow-right"></i></NavLink >
                    </div>
                </div>
            </div>


            <form id="regForm" className="reg-form" noValidate>
                <h1>Get in touch</h1>
               
                <div className="userName">
                    <div className="input-group">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" id="firstName" className="form-input" required/>
                        <p className="invalid-input">Error Msg</p>
                    </div>
                    <div className="input-group">
                        <label htmlFor="lasttName" className="form-label">Last Name</label>
                        <input type="text" id="lastName" className="form-input"/>
                        <p className="invalid-input">Error Msg</p>
                    </div>
                
                </div>

                <div className="userContact">
                        <div className="input-group">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" id="email" className="form-input" required/>
                            <p className="invalid-input">Error Msg</p>
                        </div>

                        <div className="input-group">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="tel" id="phone" className="form-input"/>
                        </div>
                </div>
          
                <div className="input-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <select id="subject" name="subject" className="form-input" required>
                        <option value=" "></option>
                        <option value="Features">Features</option>
                        <option value="Services">Services</option>
                        <option value="Other">Other</option>
                </select>

                </div>
                <div className="input-group">
                    <label htmlFor="userMessage" className="form-label">Message</label>
                    <textarea name="userMessage" id="userMessage" className="form-input" required></textarea>
                    <p className="invalid-input">Error Msg</p>
                </div>

                <div className="input-group">
                    <input type="checkbox" id="terms" className="form-check" required/>
                    <label htmlFor="terms" className="terms"> I accept the terms and conditions</label>
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

