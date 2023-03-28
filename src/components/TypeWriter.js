import React from 'react'
import Typewriter from "typewriter-effect";
import "./TypeWriter.css"

function TypeWriter() {
    return (
        <div className="type">
            <Typewriter

                onInit={(typewriter) => {
                    typewriter
                        .typeString("Full Stack Web Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Blockchain Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Web3 Enthusiast")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("NFT Artist")
                        .start();
                }}
            />
        </div>
    )
}

export default TypeWriter