// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Projects } from "./pages/Projects.js";
import "./index.css"
import Home from "./pages/Home"
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import SocialMidia from '../src/components/SocialMidia'
import Postpage from "./pages/Postpage"; 

function App() {
    return (
        <>
            <SocialMidia />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<Postpage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
