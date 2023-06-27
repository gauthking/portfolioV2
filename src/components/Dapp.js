import React from 'react'
import "./Dapp.css"
import ParticleBG from './ParticleBG'


function Dapp() {
    return (
        <>
            <ParticleBG />
            <div className='dapp'>
                <div className='dappbox'>
                    <h3>PAY4ALL - Decentralized Payments and Tip Management App - WON UNDER ETH4ALL QUICKNODE TRACK - ETHINDIA</h3>
                    <p>A Decentralized Payment Platform for Fair and Transparent Compensation of Municipal and Sanitation Workers, Promoting Financial Responsibility and Blockchain Adoption at the Grassroots Level. THIS PROJECT won under QUICKNODE track of the ETH4ALL by ETHINDIA Hackathon. For now we have just come up with base pitch for this idea and a sample SMART CONTRACT for it, the frotend and other features for this dApp is still under development and planning process
                    </p>
                    <div className="links">
                        <a
                            href="https://github.com/chiranjeev13/pay4all"
                            target="_blank"
                        >GitHub</a>
                        <a
                            href="https://docs.google.com/presentation/d/1r0vLOzjY1dSu_ISG1dfZX1mQOxsdAf-L9fZJDW9rc5c/edit#slide=id.gd91e1f37e_0_0"
                            target="_blank"
                        >Read About</a>
         <a
                            href="https://devfolio.co/projects/payall-6ea0"
                            target="_blank"
                        >Devfolio Link</a>
                    </div>
                </div>
                <div className='dappbox'>
                    <h3>The DAOBOARD - Decentralized Leaderboard and Task Management System</h3>
                    <p>Built a fully Decentralized Leaderboard Application for DAO Community VIT Chennai. The first version of the application is completed and it is currently under beta testing. I worked on the smart contract dev and it’s Frontend integration using Ethers.js and React. Currently managing the beta testing team and working on further improvements for the dApp.
                    </p>
                    <div className="links">
                        <a
                            href="https://github.com/DAO-Community-VITC/DAOboard
                            target="_blank"
                        >GitHub</a>
                    </div>
                </div>                
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
                    <h3>NFT Minting App</h3>
                    <p>Made a basic application that uses ERC721 and ERC721URIStorage contracts in the backend and frontend in React, allowing the user to upload any image where that image is uploaded to nft storage and then the metadata into IPFS, finally lets the user mint the image as NFT on Polygon Mumbai Testnet.</p>
                    <div className="links">
                        <a
                            href="https://github.com/DAO-Community-VITC/nft-workshop-complete"
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
