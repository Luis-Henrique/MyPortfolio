import "./AboutStyles.css"
import React from "react"
import Carousel from "./Carousel";

const About = () => {
    return (
        <div className="hero">
            <div id="about-anchor" className="anchor"></div>
            <div className="about-section">
                <section>
                    <div className="about-header">
                        <h1 className="about-header-title">Sobre <span className="about-header-highligth">Mim</span></h1>
                        <p className="about-header-content">Reinvent your internal and external communication.</p>
                    </div>
                    <div className="about-header-background"/>
                    <div className="about-resume">
                        <p className="about-resume-title">Resumo</p>
                        <div className="about-resume-divider"></div>
                        <p className="about-resume-content">Sou um desenvolvedor apaixonado por tecnologia, atualmente estou no curso técnico de informática no Instituto Federal de São Paulo (IFSP). Além disso trabalho como estagiário de desenvolvimento na Dotz S/A, ganhando experiência prática enquanto continuo meus estudos.</p>
                        <p className="about-resume-content">Tenho amplas habilidades em linguagens de programação, incluindo C#, Python, JavaScript, TypeScript, HTML e CSS, e frameworks como Angular 13 e .Net, Além disso sou familiarizado com MySQL. Estou sempre buscando aprender e aprimorar meus conhecimentos em diferentes tecnologias e linguagens. Atualmente, estou focado em expandir minhas habilidades como um Dev FullStack.</p>
                        <p className="about-resume-content">Minha experiência profissional inclui o desenvolvimento de APIs no padrão RESTful em .NET, criação de interfaces front-end com Angular, e realização de testes unitários para garantir a qualidade do código. Além disso, participei do desenvolvimento de projetos significativos, como o "JuridicalCompliance", uma aplicação web para gestão de processos cíveis e propostas de acordo do setor jurídico da Dotz S/A, e o "DocManager", um projeto de conclusão de curso no IFSP focado na gestão de documentos.</p>
                    </div>
                </section>
            </div>
            <div className="cv-section">
                <div className="cv-btn">
                    <button className="button">Baixar Currículo</button>
                </div>
            </div>
            <div className="skills-section">
                <section>
                    <div className="skills-resume">
                            <p className="skills-resume-title">Habilidades</p>
                            <div className="skills-resume-divider"></div>
                            <Carousel/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;