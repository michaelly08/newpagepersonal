import React from 'react'

import Navbar from "./Navbar.jsx"
import Portrait from "./img/Portrait.png"
import HeroBannerImage from "./img/HeroBannerImage.png"


const HeroBanner = () => {
  return (
    
    <section className="herobanner-container">
        <Navbar/>
        <div className="herobanner-wrapper">
            <div className="herobanner-image prevent-select">
                <img src={HeroBannerImage}></img>
            </div>

            <div className="herobanner-box">
                <div className="herobanner-title">
                    I'm Michael Ly. <br/>
                    A Frontend Developer <br/>
                    <span style={{color: "rgb(132, 145, 160)"}}>based in Australia.</span>
                </div>
                <div className="herobanner-subtitle">
                    I am a self-taught developer that is very passionate about my work. If you have a great project that needs some amazing skills, I’m your guy.
                </div>
            </div>

        </div>
    </section>
  )
}

export default HeroBanner