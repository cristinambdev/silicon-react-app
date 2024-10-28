import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './views/Home'
import Contact from './views/Contact'

import Header from './sections/Header'
import Footer from './sections/Footer'


export const App = () => {
  return (
    <BrowserRouter>
    
      <div className="wrapper" data-theme="light">
    
        <Header/>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>

        <Footer/>
    
      </div>
    
    </BrowserRouter>

  )
}

export default App

