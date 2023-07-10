import "./MainPageStyles.css"
import React from "react"

const MainPage = () => {
    return (
        <div className="hero">
            <section id="home">
                <div className="hero-container">
                    <div className="hand-emoji"/>
                    <h1 className="title">Hey, I'm <span className="title-highligth">Luis</span></h1>
                </div>
                    <div className="hero-contant">
                    <p className="hero-text">Reinvent your internal and external communication with swift and compelling content</p>
                    <div className="hero-btn">
                    <button className="btn">Projetos</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPage;