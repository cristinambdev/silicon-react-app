import React from 'react'

function Testimonials() {
  return (
    <section className="reviews">
    <div className="container">
        <div className="heading">
            <h2>Clients are Loving Our App</h2>
        </div>
        <div className="review-box">
                <img className="quotes" src="src/images light version\quotes.svg" alt=""/>
                <img className="rating" src="src/images light version\rating_Fannie.svg" alt=""/>
                <p className="comment">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
                Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. 
                Montes justo turpis sit amet.</p>
                
            <div className="reviewer">
                <img className="avatar" src="src/images light version\avatar_fannie.svg" alt=""/>
                <div className="signature">
                <p className="reviewer-name">Fannie Summers</p>
                <p className="reviewer-job">Designer</p>
                </div>
            </div>
        </div>

        <div className="review-box">
            <img className="quotes" src="src/images light version\quotes.svg" alt=""/>
            <img className="rating" src="src/images light version\rating_Albert.svg" alt=""/>
            <p className="comment">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet 
                porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. 
                Dictum pretium dolor tincidunt egestas eget nunc.</p>
            
        <div className="reviewer">
            <img className="avatar" src="src/images light version\avatar_albert.svg" alt=""/>
            <div className="signature">
            <p className="reviewer-name">Albert Flores</p>
            <p className="reviewer-job">Developer</p>
            </div>
        </div>
    </div>

    </div>

 </section>
  )
}

export default Testimonials