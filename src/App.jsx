import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

import React, { useState } from 'react'
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Video from "./Components/VideoPlayer/Video";
function App() {

 const [playState,setPlayState] = useState(false);



  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='Our PROGRAM' title='What we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact US' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>

      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App