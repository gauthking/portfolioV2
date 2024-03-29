import React, { useEffect } from 'react'
import ParticleBG from './ParticleBG'
import "./Webdev.css"


function ProjectMain() {

    return (
        <>
            <ParticleBG />
            <div className='webdev'>
                <div className='webdevbox' >
                    <h3>Gamercollide - MERN Stack</h3>
                    <p>Full stack website made for posting reviews and critics of different games. Give rating and list games based on the rating and more factors. Users can create their profile on this app and post and view game critics. This app is still under development and is not hosted for now. However, link to the github repository is given below</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/gamercollide-full-stack"
                            target="_blank"
                        >GitHub</a
                        >

                    </div>
                </div>
                <div className='webdevbox' >
                    <h3>Amazon Clone - React x Firebase</h3>
                    <p>First full stack web app made with REACT (frontend) and the
                        backend functionalites like authentication, realtime database and
                        payment features were implemented using FIREBASE and STRIPE (for
                        payments). The final version of the app allows the payment and
                        realtime functionality feature but it has not deployed yet due to
                        FIREBASE's BLAZE plan upgradation which has not been done yet :( .
                        The version before has been deployed and it can be viewed.</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/amazon-clone-fullstack"
                            target="_blank"
                        >GitHub</a
                        >
                        <a href="https://clone-react-63f94.web.app/" target="_blank"
                        >Live</a
                        >
                    </div>
                </div>
                <div className='webdevbox'>
                    <h3>Tinder Clone - MERN Stack Build</h3>
                    <p>This tinder clone is built using the MERN stack and Firebase for authentication purposes. I have also made the use of Firestore to store additional user info and for displaying them in the USER info part of the App. MongoDB is used here to pull the information of the dates💝 that is stored in the project collection. This is just a basic MERN stack build. More features coming soon. The Repository link is only for the frontend app. The backend is deployed using Heroku and has not been pushed into GitHub.</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/Tinder-MERN"
                            target="_blank"
                        >GitHub</a
                        >
                        <a href="https://tindermerncloneee.netlify.app/" target="_blank"
                        >Live</a
                        >
                    </div>
                </div>
                <div className='webdevbox'>
                    <h3>Microsoft Landing Page - TailwindCSS</h3>
                    <p>Made using TailwindCSS and this webpage is a part of my
                        TailwindCSS Course. The website is responsive on all devices and
                        is hosted temporarily on netlify app. More developments to be
                        added soon. Most site features are still static since I focussed
                        more on the styling part, it has little bit of JS too. You can get
                        the source code and view the page using the links below.</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/microsoft-clone-tailwindk"
                            target="_blank"
                        >GitHub</a
                        >
                        <a href="https://microsoftclonegauthking.netlify.app/" target="_blank"
                        >Live</a
                        >
                    </div>
                </div>
                <div className='webdevbox'>
                    <h3>Portfolio - REACT</h3>
                    <p>Repository for this Portfolio page is given below in the github link</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/portfolioV2"
                            target="_blank"
                        >GitHub</a
                        >
                        <a href="/"
                        >Live</a
                        >
                    </div>
                </div>
                <div className='webdevbox'>
                    <h3>GoChef Webpage- HTML, CSS, JS </h3>
                    <p>Static HTML+CSS webpage made as a part of my HTML CSS Course. I
                        tried animations and transitions properties of CSS in this page.
                        You can checkout the source code in the GitHub Repo and also view
                        the Live Website.</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/gocCHEF-frontend"
                            target="_blank"
                        >GitHub</a
                        >
                        <a href="https://gochef.netlify.app/"
                        >Live</a
                        >
                    </div>
                </div>
                <div className='webdevbox'>
                    <h3>Anime Facts API - Frontend</h3>
                    <p>A frontend app that retrieves anime information of 13 popular anime shows from the anime-facts REST API</p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/anime-facts-restapi-frontend"
                            target="_blank"
                        >GitHub</a
                        >
                        <a href="https://the-awesome-gauthking-site.netlify.app/"
                        >Live</a
                        >
                    </div>
                </div>
                <div className='webdevbox'>
                    <h3>CRUD App - Flask</h3>
                    <p>Tried making a CRUD App using flask. I followed its documentation and help from youtube videos to make this app.
                        The live website and github Repository links are given below
                    </p>
                    <div className="links">
                        <a
                            href="https://github.com/gauthking/firstCRUDapp-Flask"
                            target="_blank"
                        >GitHub</a
                        >
                        <a href="https://todoappgauthking.herokuapp.com/"
                        >Live</a
                        >
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectMain