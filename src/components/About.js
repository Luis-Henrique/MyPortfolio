import React from "react";
import "./css/AboutStyles.css";

const About = () => {
    return (
        <div className="hero">
            <div id="about-anchor" className="anchor"></div>
            <div className="about-section">
                <section>
                    <div className="about-header">
                        <h1 className="about-header-title">
                            Sobre <span className="about-header-highligth">Mim</span>
                        </h1>
                    </div>
                    <div className="about-header-background"></div>
                    <div className="resume">
                        <p className="resume-title">Resumo</p>
                        <div className="resume-divider"></div>
                        <p className="about-resume-content">
                            Sou um desenvolvedor apaixonado por tecnologia, atualmente estou
                            no último ano do curso <b>técnico de informática</b> no <b><a href="https://spo.ifsp.edu.br/">Instituto Federal de São Paulo (IFSP)</a></b>. 
                            Além disso trabalho como <b>estagiário de desenvolvimento</b> na
                            <b><a href="https://www.dotz.com.br/home"> Dotz S/A</a></b>, ganhando experiência prática enquanto continuo meus
                            estudos.
                        </p>
                        <p className="about-resume-content">
                            Tenho conhecimento em diversas linguagens de programação, incluindo
                            C#, Python, JavaScript, TypeScript, HTML e CSS, e frameworks como
                            Angular e .Net, Além disso sou familiarizado com MySQL e PostgreSQL. Estou
                            sempre buscando aprender e aprimorar meus conhecimentos em
                            diferentes tecnologias e linguagens. Atualmente, estou focado em
                            expandir minhas habilidades como um <b>Dev FullStack</b>.
                        </p>
                        <p className="about-resume-content">
                            Minha experiência profissional inclui o desenvolvimento de <b>APIs no
                            padrão RESTful</b> em .NET, criação de <b>interfaces front-end</b> com Angular,
                            e realização de testes unitários para garantir a qualidade do
                            código. Além disso, participei do desenvolvimento de projetos
                            significativos, sinta-se à vontade para explorá-los na seção de projetos.
                        </p>
                    </div>
                </section>
            </div>
            <div className="cv-section">
                <div id="skills-anchor" className="anchor"></div>
                <div className="cv-btn">
                    <button className="button">Baixar Currículo</button>
                </div>
            </div>
        </div>
    );
};

export default About;
