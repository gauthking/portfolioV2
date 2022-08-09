import React from 'react'
import "./Typerwriter.css"

function Typerwriter() {

    var typed = new Typed('.input', {
        strings: ["Video Editor", "Programmer", "Web Developer", "Photo Editor"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });

    return (
        <div class="container">
            <h1>I'm a <span class="input"></span></h1>
        </div>
    )
}

export default Typerwriter