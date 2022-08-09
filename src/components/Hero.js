import React from 'react'
import "./Hero.css"
import ParticleBG from "./ParticleBG";


function Hero() {

    return (
        <>
            <ParticleBG />

            <div className="hero">
                <h2 className="myname" data-aos="zoom-in" data-aos-duration="600" >
                    Gautham Krishna
                </h2>
                <div className="quote" id="quoteid" data-aos="zoom-out-down">
                    "Destiny got big plans for you"
                </div>
            </div>


        </>

    )
}

export default Hero