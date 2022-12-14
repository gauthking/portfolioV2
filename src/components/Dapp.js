import React from 'react'
import "./Dapp.css"
import ParticleBG from './ParticleBG'


function Dapp() {
    return (
        <>
            <ParticleBG />
            <div className='dapp'>
                <div className='dappbox'>
                    <h3>Rock Paper Scissor DAPP - Web3 Game - React, Solidity, Remix IDE</h3>
                    <p>This is a "Web3 game" ( you can say), basically a win and mint NFT type of dApp where the user can play “Rock-Paper-Scissors” against the system and if he/she scores more than 3 out of 6 then that person will eligible to MINT the NFT. They need to enter their name and click on the mint button and finally sign in with the metamask wallet to get the NFT minted with their name. NOTE : Rinkeby Testnet is used here for connecting and minting using MetaMask. This project can be also implemented using Mainnet. Build : The Frontend is built using React and TailwindCSS (still need to work on UI) . Backend is built using Moralis Web3 tools ( includes web3 metamask authentication and saving to IPFS tools). Used Web3.js for interacting with the smart contract. Pinata is used for saving the NFT media, which I think is a really helpful tool for web3 developers out there ! Wanna know something cool, I'll be intergrating Chainlink's VRF into this dApp very soon</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/web3-rockpaperscissor-game"
                            target="_blank"
                        >GitHub</a
                        >
                        <a href="https://62ed00ac6dd4364648973813--rockpaperscissordappweb3.netlify.app/" target="_blank"
                        >Live</a
                        >
                    </div>
                </div>
                <div className='dappbox'>
                    <h3>Decentralised Fundraiser App - LUMOS BUIDL Winners</h3>
                    <p>A decentralized platform using blockchain that automatically handles all fundraising and disputes. This d-App is being deployed on the Polygon Mumbai Testnet as this build was registered under the Polygon Pool Track. This was my first hackathon which I collaborated with my Web3 pal Sabari. It was an amazing experience working on this project. Our team 'Green Genesis' won under the Polygon Pool Track for this hackathon. Visit the project URL to read about our project and also you can checkout the demo video and access the live site for our project.</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/lumos-letsgo"
                            target="_blank"
                        >GitHub</a
                        >
                        <a href="https://hashfunder.netlify.app/" target="_blank"
                        >Live</a
                        >
                        <a href="https://pdfhost.io/v/6hA7nXbsJ_C_P_GAUTHAM_KRISHNA_Winner_Certificate" target="_blank"
                        >Certificate</a
                        >
                    </div>
                </div>
                <div className='dappbox'>
                    <h3>Greet App - Basic Web3 DAPP - Solidity, React, Hardhat</h3>
                    <p>This project demonstrates a basic dApp that allows you to set and fetch messages from the smart contract deployed on a test network (FANTOM TESTNET in this Case, you can also deploy it on hardhat's localhost or some other testnets).</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/first-dApp-greet"
                            target="_blank"
                        >GitHub</a
                        >
                        {/* <a href="https://62ed00ac6dd4364648973813--rockpaperscissordappweb3.netlify.app/" target="_blank"
                        >Live</a
                        > */}
                    </div>
                </div>
                <div className='dappbox'>
                    <h3>Voting Ballot - Smart Contract/Solidity</h3>
                    <p>Smart contract that allows you to vote for a particular team. Interact with the smart contract using remix IDE and you can also make use of the funtions like return the number of the votes for a team or to know the voter info. I'll be intergrating this contract into a dApp and also build a beautiful UI for this</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/voting-ballot--contract"
                            target="_blank"
                        >GitHub</a
                        >
                        {/* <a href="https://62ed00ac6dd4364648973813--rockpaperscissordappweb3.netlify.app/" target="_blank"
                        >Live</a
                        > */}
                    </div>
                </div>
                <div className='dappbox'>
                    <h3>Student Registration Form - Smart Contract/Solidity</h3>
                    <p>Smart contract used to fill information of the participating students. UI Coming soon. Instead you can deploy and interact with the smart contract using Remix IDE</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/registration-form-contract"
                            target="_blank"
                        >GitHub</a
                        >
                        {/* <a href="https://62ed00ac6dd4364648973813--rockpaperscissordappweb3.netlify.app/" target="_blank"
                        >Live</a
                        > */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Dapp