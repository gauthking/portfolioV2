import React from 'react'
import "./Hero.css"
import ParticleBG from "./ParticleBG";
import TypeWriter from './TypeWriter';



function Hero() {

    return (
        <>
            <ParticleBG />

            <div className="hero">
                <div className='hero__box'>
                    <h2 className="myname">
                        Gautham Krishna

                    </h2>
                    <div className='hero__type'>
                        <p>I'm a</p> <TypeWriter />
                    </div>

                </div>

            </div>





        </>

    )
}

export default Hero