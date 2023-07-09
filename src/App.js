import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Projects />} />
            </Routes>
        </>
    );
};

export default App;