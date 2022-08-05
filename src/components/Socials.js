import React from 'react'
import "./Socials.css"
import insta from "../insta.png"
import tweet from "../tweet.png"
import git from "../git.png"
import linkedin from "../linkedin.png"
import hack from "../hack.png"


function Socials() {
    return (
        <div class="socials" id="socialsme">
            <h3 data-aos="zoom-in-right">Socials</h3>
            <div class="socialsbox" data-aos="zoom-in">
                <div class="socialtype" data-aos="fade-up" >
                    <img src={insta} alt="" />
                    <a
                        href="https://www.instagram.com/_thegauthamkrishhna._/"
                        target="/blank"
                        class="skilltext1"
                    >Instagram</a
                    >
                </div>
                <div class="socialtype" data-aos="fade-up"  >
                    <img src={tweet} alt="" />
                    <a
                        href="https://twitter.com/pointlessduhh"
                        target="/blank"
                        class="skilltext1"
                    >Twitter</a
                    >
                </div>
                <div class="socialtype" data-aos="fade-up" >
                    <img src={git} alt="" />
                    <a
                        href="https://github.com/gauthking"
                        target="/blank"
                        class="skilltext1"
                    >GitHub</a
                    >
                </div>
                <div class="socialtype" data-aos="fade-up" >
                    <img src={linkedin} alt="" />
                    <a
                        href="https://www.linkedin.com/in/c-p-gautham-krishna-580450227"
                        target="/blank"
                        class="skilltext1"
                    >LinkedIn</a
                    >
                </div>
                <div class="socialtype" data-aos="fade-up"  >
                    <img src={hack} alt="" />
                    <a
                        href="https://www.hackerrank.com/GAUTHAM1234"
                        target="/blank"
                        class="skilltext1"
                    >Hackerrank</a
                    >
                </div>
            </div>
        </div>
    )
}

export default Socials