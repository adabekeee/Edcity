import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div>
     <Navbar /> 
     <Hero />
     <div className="Container">
      <Title subtitle='OUR PROGRAM' title='What We Offer'/>
      <Programs />
      <About setPlayVideo = {setPlayVideo}/>
      <Title subtitle='GALLERY' title='Campus Photos'/>
      <Campus />
      <Title subtitle='TESTIMONIALS' title='Stories That Amaze You'/>
      <Testimonials />
      <Title subtitle='CONTACT US' title='Get in Touch'/>
      <Contact />
      <Footer />
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo}/>
     </div>
     
    </div>
  )
}

export default App
