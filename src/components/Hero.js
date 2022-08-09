import React from 'react'
import "./Hero.css"
import ParticleBG from "./ParticleBG";
import Typerwriter from './Typerwriter';


function Hero() {

    return (
        <>
            <ParticleBG />

            <div className="hero">
                <Typerwriter />
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