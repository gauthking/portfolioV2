import React, { useEffect } from 'react'
import "./Skills.css"
import cam from "../cam.png"
import webdev from "../webdev.png"
import ps from "../ps.png"
import python from "../python.png"
import sol from "../sol.png"
import css from "../css.png"
import react from "../react.png"
import js from "../js.png"
import fb from "../firebase.png"
import mdb from "../mdb.png"
import tw from "../tw.png"
import cpp from "../cpp.png"
import hh from "../hh.png"
import rm from "../rm.png"
import bs from "../bs.png"


function Skills() {

    return (
        <div className="skills" id="skillsme">
            <h3>Skills</h3>

            <div className='skillbox' >

                <div className="skilltype">
                    <img src={webdev} className="skillimg" alt="" />
                    <h5 className="skilltext">HTML</h5>
                </div>

                <div className="skilltype">
                    <img src={css} className="skillimg" alt="" />
                    <h5 className="skilltext">CSS</h5>
                </div>

                <div className="skilltype">
                    <img src={ps} className="skillimg" alt="" />
                    <h5 className="skilltext">Photoshop</h5>
                </div>

                <div className="skilltype">
                    <img src={python} className="skillimg" alt="" />
                    <h5 className="skilltext">Python</h5>
                </div>

                <div className="skilltype">
                    <img src={sol} className="skillimg" alt="" />
                    <h5 className="skilltext">Solidity</h5>
                </div>

                <div className="skilltype">
                    <img src={hh} className="skillimg" alt="" />
                    <h5 className="skilltext">Hardhat</h5>
                </div>

                <div className="skilltype">
                    <img src={rm} className="skillimg" alt="" />
                    <h5 className="skilltext">Remix IDE</h5>
                </div>

                <div className="skilltype">
                    <img src={cam} className="skillimg" alt="" />
                    <h5 className="skilltext">
                        Photography
                    </h5>
                </div>

                <div className="skilltype">
                    <img src={react} className="skillimg" alt="" />
                    <h5 className="skilltext">React</h5>
                </div>

                <div className="skilltype">
                    <img src={js} className="skillimg" alt="" />
                    <h5 className="skilltext">JavaScript</h5>
                </div>

                <div className="skilltype">
                    <img src={fb} className="skillimg" alt="" />
                    <h5 className="skilltext">Firebase</h5>
                </div>

                <div className="skilltype">
                    <img src={mdb} className="skillimg" alt="" />
                    <h5 className="skilltext">MongoDB</h5>
                </div>

                <div className="skilltype">
                    <img src={cpp} className="skillimg" alt="" />
                    <h5 className="skilltext">C++</h5>
                </div>

                <div className="skilltype">
                    <img src={tw} className="skillimg" alt="" />
                    <h5 className="skilltext">TailwindCSS</h5>
                </div>

                <div className="skilltype">
                    <img src={bs} className="skillimg" alt="" />
                    <h5 className="skilltext">Bootstrap</h5>
                </div>

            </div>
        </div>
    )
}

export default Skills