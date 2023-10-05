import "./css/MainPageStyles.css"
import React from "react"
import { ScrollButton } from "./Scroll";

const MainPage = () => {
    return (
        <div className="home">
            <section id="home">
                <div className="hero-container">
                    <div className="hand-emoji" />
                    <h1 className="title">Olá, Eu sou o <span className="title-highligth">Luis</span>!</h1>
                </div>
                <div className="hero-contant">
                    <p className="hero-text">Seja muito bem-vindo(a) ao meu portfólio. ✨</p>
                    <div className="hero-btn">
                        <a href="/projects"><button className="btn">Projetos</button></a>
                    </div>
                    <div className="hero-contant-scroll">
                        <ScrollButton />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPage;