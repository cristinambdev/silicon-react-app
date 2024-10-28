import React from 'react'
import { Accordion } from './Accordion'
import PhoneIcon from '../assets/images/icon_phone.svg'
import ChatIcon from '../assets/images/icon_chat.svg'
import { Link, NavLink } from 'react-router-dom'



function Faqs() {
  return (
    <section className="faqs">
    
    <div className="container">

            <div className="heading">
                <h2>Any questions?<span> Check out the FAQs</span></h2>
                <p>Still have unanswered questions and need to get in touch?</p>    
            </div>

           

        <div className="faqs-accordion">

                 <div className="accordion-item open">
                        <div className="question">
                            <p>Is any of my personal information stored in the App?</p>
                            <button className="btn-round">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                    <div className="answer">
                        <div className="expandable">
                            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
                            cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetrafermentum duis accumsan lectus non. Massa
                            cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
                            tristique tincidunt suspendisse ut consequat. 
                            Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
                            posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
                            aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
                        </div>
                    </div> 
                </div>

                <div className="accordion-item">
                <div className="question">
                    <p>What formats can I download my transaction history in?</p>
                    <button className="btn-round">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    </div>
                <div className="answer">
                    <div className="expandable">
                        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
                        cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetrafermentum duis accumsan lectus non. Massa
                        cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
                        tristique tincidunt suspendisse ut consequat.
                        Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
                        posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
                        aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
                </div>
                </div> 
            </div>

            <div className="accordion-item">
                <div className="question">
                    <p>Can I schedule future transfers?</p>
                    <button className="btn-round">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
            <div className="answer">
                <div className="expandable">
                  Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. 
                  Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. 
                  Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.
                  Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                </div>
            </div> 
        </div>

        <div className="accordion-item">
            <div className="question">
                <p>When can I use Banking App services?</p>
                <button className="btn-round">
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </div>
        <div className="answer">
            <div className="expandable">
                Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
                cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetrafermentum duis accumsan lectus non. Massa
                cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
                tristique tincidunt suspendisse ut consequat.
                Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
                posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
                aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
            </div>
        </div> 
    </div>

    <div className="accordion-item">
        <div className="question">
            <p>Can I create my own password that is easy for me to remember?</p>
            <button className="btn-round">
                <i className="fa-solid fa-chevron-down"></i>
            </button>
        </div>
    <div className="answer">
        <div className="expandable">
        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
            cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetrafermentum duis accumsan lectus non. Massa
            cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
            tristique tincidunt suspendisse ut consequat.
            Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
            posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
            aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
        </div>
    </div> 
</div>

<div className="accordion-item">
    <div className="question">
        <p>What happens if I forget or lose my password?</p>
        <button className="btn-round">
            <i className="fa-solid fa-chevron-down"></i>
        </button>
    </div>
<div className="answer">
    <div className="expandable">
        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
        cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetrafermentum duis accumsan lectus non. Massa
        cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
        tristique tincidunt suspendisse ut consequat.
        Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
        posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
        aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
    </div>
</div> 
</div>

        </div>
    
        <div className="contact-area">
                
            <div className="contact-box">
                <img src={PhoneIcon} alt=""/>
                <p className="small-text">Still have questions?</p>
                <NavLink to="/contact" className="contact-phone">
                    Contact us 
                    <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>
            </div>
    
            <div className="contact-box ">
                <img src={ChatIcon}alt=""/>
                <p className="small-text">Don't like phone calls?</p>
                <a href="#" className="contact-chat">
                        Contact us 
                <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>


                    <Link to="/contact" className="btn-primary">Contact us now</Link>
               
            </div>
    
</div>

 </section>
  )
}

export default Faqs