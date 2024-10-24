import React from 'react'

function Features() {
  return (
    <section className="app-features">
    <div className="container">
        <div className="phone-yourcards">
            <img className="phone" src="src/images light version\iPhone12_yourcards.svg" alt="phone showing transaction detail"/>
            <img className="credit-card" src="src/images light version\creditcard_yourcards.svg" alt="credit card"/>
        </div>
        <div className="features-content">
            <div className="heading">
                <h2>App Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. 
                    Nam luctus facilisis ultrices. Pellentesque volutpat ligula oc est. Mattis fermentum, at nec lacus.</p>
            </div>
            <div className="items">
                <div className="features feature-1">
                    <div className="features-icon">
                        <img src="src/images light version\vektor_creditcard.svg" alt="credit card icon"/>
                    </div>
                    <div className="features-text">
                        <h5>Easy Payments</h5>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>

                <div className="features feature-2">
                    <div className="features-icon">
                        <img src="src/images light version\vektor_security.svg" alt="shield icon"/>
                    </div>
                    <div className="features-text">
                        <h5>Data Security</h5>
                        <p>Augue pulvinar justo, fermentum
                            fames aliquam accumsan vestibulum
                            non.</p>
                    </div>
                </div>

                <div className="features feature-3">
                    <div className="features-icon">
                        <img src="src/images light version\vektor_statistics.svg" alt="statistics icon"/>
                    </div>
                    <div className="features-text">
                        <h5>Cost Statistics</h5>
                        <p>Mattis urna ultricies non amet, purus
                            in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                </div>

                <div className="features feature-4">
                    <div className="features-icon">
                        <img src="src/images light version\vektor_support.svg" alt="chatting bubbles icon"/>
                    </div>
                    <div className="features-text">
                        <h5>Support 24/7</h5>
                        <p>A elementum, imperdiet enim, pretium
                            etiam facilisi in aenean quam mauris.</p>
                    </div>
                </div>

                <div className="features feature-5">
                    <div className="features-icon">
                        <img src="src/images light version\vektor_cashback.svg" alt="wallet icon"/>
                    </div>
                    <div className="features-text">
                        <h5>Regular Cashback</h5>
                        <p>Sit facilisis arcu, fermentum
                            vestibulum arcu elementum imperdiet
                            eleifend.</p>
                    </div>
                </div>

                <div className="features feature-6">
                    <div className="features-icon">
                        <img src="src/images light version\vektor_standards.svg" alt="smiley face icon"/>
                    </div>
                    <div className="features-text">
                        <h5>Top Standards</h5>
                        <p>Faucibus maecenas lorem
                            cursus nibh. Sociis risus id. Sit
                            facilisis dolor arcu.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
  )
}

export default Features