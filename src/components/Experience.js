import React, { useState } from "react";
import "./css/ExperienceStyles.css";

const Experience = () => {
    const [showMore, setShowMore] = useState([false, false, false, false]);

    const toggleShowMore = (index) => {
        const updatedShowMore = [...showMore];
        updatedShowMore[index] = !updatedShowMore[index];
        setShowMore(updatedShowMore);
    };

    return (
        <>
        <div id="exp-anchor" className="anchor"></div>
        <div className="experience-section">
            <section>
                <div className="resume">
                        <p className="resume-title">Experiência</p>
                        <div className="resume-divider"></div>
                </div>
                <div className="experience-main">
                    <div className="experience-container">
                        <ul className="experience-list">
                            <li className="experience-item">
                                <h3 className="experience-title">Estagiário de desenvolvimento | Cloud Infrastructure</h3>
                                {showMore[0] ? (
                                    <>
                                        <p className="experience-description">
                                            Como estagiário de desenvolvimento na Dotz, minha principal responsabilidade é o desenvolvimento da aplicação "ops-catalog" em Python. Essa aplicação tem a função de coletar informações dos ambientes da empresa para a criação de dashboards analíticos no Redash. Utilizo funções lambdas e filas do Amazon SQS para coletar esses dados, que são posteriormente armazenados em um banco de dados Postgresql. Tudo isso utilizando utilizando a abordagem (IaaC) "infraestrutura como código". Além disso, desenvolvo dashboards e alertas no Intelie Live utilizando react e Pipes (linguagem própia da plataforma).                                        </p>
                                        <a href="#" className="experience-link" onClick={() => toggleShowMore(0)}>Ler menos &lt;</a>
                                    </>
                                ) : (
                                    <>
                                        <p className="experience-description">
                                        Como estagiário de desenvolvimento na Dotz, minha principal responsabilidade é o desenvolvimento da aplicação "ops-catalog" em Python...
                                        </p>
                                        <a href="#" className="experience-link" onClick={() => toggleShowMore(0)}>Ler mais &gt;</a>
                                    </>
                                )}
                                <span className="experience-circle"></span>  <span className="experience-date">Atualmente</span>
                            </li>
                            <li className="experience-item">
                                <h3 className="experience-title">Estagiário | Jurídico & Compliance</h3>
                                {showMore[1] ? (
                                    <>
                                        <p className="experience-description">
                                            Durante o meu estágio no setor Jurídico & Compliance da Dotz, fui responsável - em conjunto com a equipe de desenvolvimento da empresa - pelo desenvolvimento fullstack de uma aplicação destinada à gestão dos processos judiciais da companhia. Neste contexto, fui responsavel pelo desenvolvimento de uma API RESTful utilizando .Net Core e C#, bem como o desenvolvimento de sua interface utilizando Angular e TypeScript. Além disso, também desempenhei um papel crucial na realização de testes e na entrega bem-sucedida da aplicação em ambiente produtivo. E colaborei na integração da aplicação com fornecedores do departamento jurídico.
                                        </p>
                                        <a href="#" className="experience-link" onClick={() => toggleShowMore(1)}>Ler menos &lt;</a>
                                    </>
                                ) : (
                                    <>
                                        <p className="experience-description">
                                            Durante o meu estágio no setor Jurídico & Compliance da Dotz, fui responsável pelo desenvolvimento fullstack de uma aplicação destinada à gestão dos processos judiciais da companhia...
                                        </p>
                                        <a href="#" className="experience-link" onClick={() => toggleShowMore(1)}>Ler mais &gt;</a>
                                    </>
                                )}
                                <span className="experience-circle"></span>  <span className="experience-date">Jan 2022 - Jul 2023</span>
                            </li>
                            <li className="experience-item">
                                <h3 className="experience-title">Jovem aprendiz | Jurídico & Compliance</h3>
                                {showMore[2] ? (
                                    <>
                                        <p className="experience-description">
                                        Como jovem aprendiz no setor jurídico & compliance da Dotz, fui responsável pela gestão de dados internos do setor, pela certificação de documentos jurídicos e pelo acompanhamento de demandas do contencioso cível de massa, ofícios e processos administrativos. Além disso, fui encarregado da gestão de fornecedores, e pela criação de Dashboards visuais para tomada de decisões do setor, e acompanhamento das provisões de contingências da empresa.
                                        </p>
                                        <a href="#" className="experience-link" onClick={() => toggleShowMore(2)}>Ler menos &lt;</a>
                                    </>
                                ) : (
                                    <>
                                        <p className="experience-description">
                                        Como jovem aprendiz no setor jurídico & compliance da Dotz, fui responsável pela gestão de dados internos do setor, pela certificação de documentos jurídicos...
                                        </p>
                                        <a href="#" className="experience-link" onClick={() => toggleShowMore(2)}>Ler mais &gt;</a>
                                    </>
                                )}
                                <span className="experience-circle"></span>  <span className="experience-date">Fev 2021 - Jan 2022</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Experience;
