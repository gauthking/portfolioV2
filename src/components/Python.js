import React from 'react'
import ParticleBG from './ParticleBG'
import "./Python.css"
function Python() {
    return (
        <>
            <ParticleBG />
            <div className="python">
                <div className='pythonbox'>
                    <h3>Duplicate File Cleaner</h3>
                    <p>Uses python modules like os and filecmp to delete the duplicate
                        files present in the CD. This is just a 15 line code and it is
                        simple to understand.</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/python-projects/tree/main/duplicatefilecleaner/testfold"
                            target="/blank"
                        >GitHub</a
                        >

                    </div>
                </div>
                <div className='pythonbox'>
                    <h3>Simple Voice Assistant</h3>
                    <p> I used pyttsx3 and speech
                        recognition modules and some other libraries for this project. You
                        can initialize the program by first changing your name in the
                        code, then run the program and then call "Ruby" to initialize the
                        voice assistant. More information is available in repository
                        readme.md file.</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/simpleVoiceAssistant"
                            target="/blank"
                        >GitHub</a
                        >
                    </div>
                </div>
                <div className='pythonbox' >
                    <h3>NFT Minting App</h3>
                    <p> Python code I made to mint my NFT Collection to OpenSea NFT
                        Marketplace. This code cannot be cloned and reused. This
                        repository is only for reference purposes.</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/NFT_MINTtool"
                            target="/blank"
                        >GitHub</a
                        >
                    </div>
                </div>
                <div className='pythonbox'>
                    <h3>Pywhatkit Functions</h3>
                    <p>  Made use of the pywhatkit python module to perform simple and
                        basic automation tools like sending messages on whatsapp, playing
                        music from youtube and performing an internet search for
                        information.</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/python-projects/tree/main/automation/basicwebscraptools"
                            target="/blank"
                        >GitHub</a
                        >
                    </div>
                </div>
            </div>
        </>
    )
}

export default Python