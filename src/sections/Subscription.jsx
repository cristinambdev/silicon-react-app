import React from 'react'
import SubscriptionIcon from '../assets/images/subscription-icon-1.svg fill.svg'
import EmailIcon from '../assets/images/vector_email_subscription.svg'



function Subscription() {
  return (
    <section className="subscription">

    <div className="container">

        <div className="subscription-wrapper">

            <div className="subscription-heading">
                <img src={SubscriptionIcon} alt=""/>
                <h4>Subscribe to our newsletter <span className="desktop-heading"> to stay informed about our latest updates</span></h4>
            </div>

            <div className="subscription-email-input">

                <img className="subscription-icon" src={EmailIcon} alt=""/>
                <input type="text" className="email-input" placeholder="Your email"/>
                <a href="#" className="btn-primary">Subscribe</a>
            
            </div>
        </div>

    </div>
  </section>
  )
}

export default Subscription