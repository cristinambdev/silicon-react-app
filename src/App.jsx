import './index.css'
import Brands from './sections/Brands'
import Caroussel from './sections/Caroussel'
import Faqs from './sections/Faqs'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Subscription from './sections/Subscription'
import Testimonials from './sections/Testimonials'
import Transfers from './sections/Transfers'

function App() {

  return (
    <>
      <Header/>
      <main>
      <Hero/>
      <Brands/>
      <Features/>
      <Caroussel/>
      <Transfers/>
      <Testimonials/>
      <Faqs/>
      <Subscription/>
      </main>
      <Footer/>

    </>
  )
}

export default App
