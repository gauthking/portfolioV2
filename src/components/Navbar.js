import React, { useState, useEffect } from 'react';
import "./Navbar.css";


function Navbar() {

    function toggle() {
        if (document.getElementById("nmenu").className === 'normalmenu') {
            document.getElementById("nmenu").className = 'hamburgermenu';
        }

        else if (document.getElementById("nmenu").className === 'hamburgermenu') {
            document.getElementById("nmenu").className = 'normalmenu';

        }
    }
    return (
        <>
            <nav className="navbar" >
                <i className="fa-solid fa-bars" id="hmenu" onClick={toggle} ></i >
                <ul className="normalmenu" id="nmenu" >
                    <li><a href="/#aboutme" data-aos="zoom-in-left">About Me</a></li>
                    <li><a href="/#skillsme" data-aos="zoom-in-left">Skills</a></li>
                    <li><a href="/#socialsme" data-aos="zoom-in-left">Social</a></li>
                    <li><a href="/projects" data-aos="zoom-in-left">Projects</a></li>
                </ul >

                <div id='por' className="port" > <a href="/" data-aos="zoom-out-up">Portfolio</a> </div >
            </nav >

        </>

    )
}

export default Navbar