import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProjectPage from "./components/ProjectPage";
import Webdev from "./components/Webdev";
import Python from "./components/Python";
import Dapp from "./components/Dapp";
import Footer from "./components/Footer";
import NFT from "./components/NFT";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Socials />
          <Footer />
        </div>} />
        <Route path="/projects" element={<div className="App"><Navbar /><ProjectPage /><Footer /></div>} />
        <Route path="/webdev" element={<div className="App"><Navbar /><Webdev /> <Footer /></div>} />
        <Route path="/python" element={<div className="App"><Navbar /><Python /><Footer /></div>} />
        <Route path="/web3" element={<div className="App"><Navbar /><Dapp /><Footer /></div>} />
        <Route path="/nft" element={<div className="App"><Navbar /><NFT /><Footer /></div>} />

      </Routes>
    </Router>


  );
}

export default App;
