import React from 'react'

function Caroussel() {
  return (
    <section className="explanation">
    <div className="container">
        <h2>How Does it Work?</h2>
        <div className="caroussel">
            <div className="caroussel-mobile">

                <img className="caroussel-phoneTwo" src="src/images light version\caroussel_tablet_phone2.svg" alt=""/>

                <div className="text-explanation" id="text-mobile">
                    <h4>Transfers to people from your contact list</h4>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis
                        ultrices. Pellentesque volutpat ligula est. Mattis
                        fermentum, at nec lacus. </p>
                </div>
            </div>
            
            <div className="caroussel-tablet">
                
                <img className="caroussel-1" src="src/images light version\caroussel_tablet_phone1.svg" alt=""/>
                <img className="caroussel-2" src="src/images light version\caroussel_tablet_phone2.svg" alt=""/>
                <img className="caroussel-3" src="src/images light version\caroussel_tablet_phone3.svg" alt=""/>
               
                <div className="text-explanation" id="text-tablet">
                    <h4>Step 3. Transfers to people from your contact list</h4>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                        Pellentesque volutpat ligula est. Mattis fermentum, at nec
                        lacus. </p>
                </div>

            </div>

            <div className="caroussel-desktop">
                <div className="img-container">
                    <img className="caroussel-1" src="src/images light version\caroussel_desktop_phone1.svg" alt="phone showing a timeline with expenses"/>
                    <img className="caroussel-2" src="src/images light version\caroussel_desktop_phone2.svg" alt="phone showing a credit card and a list of transaction"/>
                    <img className="caroussel-3" src="src/images light version\caroussel_desktop_phone3.svg" alt="phone showing a list of money recipients"/>
                </div>
                <div className="text-explanation" id="text-desktop">
                    <h4>Latest transaction history</h4>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique 
                            quisque hac in consectetur condimentum. </p>
                </div>
            </div>
        </div>

    </div>

</section>
  )
}

export default Caroussel