import React from 'react'
import ParticleBG from './ParticleBG'
import "./ProjectPage.css"
import { Link } from "react-router-dom"

function ProjectPage() {

    return (
        <>
            <ParticleBG />
            <div className='projects'>
                <div className='items' data-aos="zoom-in-down" >
                    <Link to="/webdev" style={{ textDecoration: 'none' }}>
                        <div className="itembox" >
                            <h2>Web-Development</h2>
                        </div>
                    </Link>

                    <Link to="/python" style={{ textDecoration: 'none' }}>
                        <div className="itembox">
                            <h2>Python</h2>
                        </div>
                    </Link>

                    <Link to="/web3" style={{ textDecoration: 'none' }}>
                        <div className="itembox">
                            <h2>Web3/Blockchain/DAPPS</h2>
                        </div>
                    </Link>

                    <Link to="/nft" style={{ textDecoration: 'none' }}>
                        <div className="itembox" >
                            <h2>NFTs</h2>
                        </div>
                    </Link>
                </div>

            </div>
        </>

    )
}

export default ProjectPage