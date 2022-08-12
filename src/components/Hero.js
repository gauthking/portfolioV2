import React from 'react'
import "./Hero.css"
import ParticleBG from "./ParticleBG";



function Hero() {

    return (
        <>
            <ParticleBG />

            <div className="hero">
                <h2 className="myname">
                    Gautham Krishna
                </h2>
                <div className="quote" id="quoteid">
                    "Destiny got big plans for you"
                </div>
            </div>


        </>

    )
}

export default Hero