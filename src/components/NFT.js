import React, { useEffect } from 'react'
import "./NFT.css"
import ParticleBG from './ParticleBG'


function NFT() {

    return (
        <div className='nftmain'>
            <ParticleBG />
            <div className="nft">
                <div className='nftbox'>
                    <h3>MicropuppiesNFT - First OpenSea NFT Project</h3>
                    <p>This is my first NFT Collection and it is live in the OpenSea NFT
                        MarketPlace. I created 500 unique Pixel Puppy art using different
                        art components ( body, background, sunglasses, bowties, hats). For
                        minting them I made a python code using PyAutoGUI python library
                        to initialize a GUI Automation and mint 500 NFTs in the
                        Marketplace. The code was able to upload all the NFTs to the
                        marketplace despite of some connectivity issues that happened once
                        or twice there were no other issues.</p>
                    <div className="links">
                        <a
                            href="https://opensea.io/collection/micropuppiesnft"
                            target="/blank"
                        >Live</a
                        >

                    </div>
                </div>
                <div className='nftbox' id='nftbox2'>
                    <h3>CryptoKraken - NFT Ideathon project (Won First Prize 🏆)</h3>
                    <p>CryptoKraken - fully fledged NFT project that not only has NFT collections but posseses its own NFT Ecosystem in the Web3 world. Our team (me n my buddy - his github is given below😉) won the first prize in the Make Your Own NFT (MYON) Ideathon conducted by Google Student Developer Club of our University. Cryptokraken focuses on providing an ecosystem for the NFT and Metaverse freaks out there, offering features like NFT SPAWN (OUR WEB APP FOR CREATING GENERATIVE ART - not yet developed), NFT Gaming, Metaverse, The Kraken Club exclusively for our NFT Collection owners which provides so many amenities and benefits to that collector</p>
                    <div className="links">
                        <a
                            href="https://cryptokraken-nfts.herokuapp.com/"
                            target="/blank"
                        >Live</a
                        >
                        <a
                            href="https://github.com/JazzBlaze"
                            target="/blank"
                        >Teammate's GitHub</a
                        >

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFT