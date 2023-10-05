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
                                <h3 className="experience-title">FrontEnd Developer</h3>
                                {showMore[0] ? (
                                    <>
                                        <p className="experience-description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                        </p>
                                        <a className="experience-link" onClick={() => toggleShowMore(0)}>Read Less &lt;</a>
                                    </>
                                ) : (
                                    <>
                                        <p className="experience-description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                        </p>
                                        <a className="experience-link" onClick={() => toggleShowMore(0)}>Read More &gt;</a>
                                    </>
                                )}
                                <span className="experience-circle"></span>  <span className="experience-date">January 2022</span>
                            </li>
                            <li className="experience-item">
                                <h3 className="experience-title">FrontEnd Developer</h3>
                                {showMore[1] ? (
                                    <>
                                        <p className="experience-description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                        </p>
                                        <a className="experience-link" onClick={() => toggleShowMore(1)}>Read Less &lt;</a>
                                    </>
                                ) : (
                                    <>
                                        <p className="experience-description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                        </p>
                                        <a className="experience-link" onClick={() => toggleShowMore(1)}>Read More &gt;</a>
                                    </>
                                )}
                                <span className="experience-circle"></span>  <span className="experience-date">January 2022</span>
                            </li>
                            <li className="experience-item">
                                <h3 className="experience-title">FrontEnd Developer</h3>
                                {showMore[2] ? (
                                    <>
                                        <p className="experience-description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                        </p>
                                        <a className="experience-link" onClick={() => toggleShowMore(2)}>Read Less &lt;</a>
                                    </>
                                ) : (
                                    <>
                                        <p className="experience-description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                        </p>
                                        <a className="experience-link" onClick={() => toggleShowMore(2)}>Read More &gt;</a>
                                    </>
                                )}
                                <span className="experience-circle"></span>  <span className="experience-date">January 2022</span>
                            </li>
                            <li className="experience-item">
                                <h3 className="experience-title">FrontEnd Developer</h3>
                                {showMore[3] ? (
                                    <>
                                        <p className="experience-description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                        </p>
                                        <a className="experience-link" onClick={() => toggleShowMore(3)}>Read Less &lt;</a>
                                    </>
                                ) : (
                                    <>
                                        <p className="experience-description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse?
                                            Incidunt, odit beatae?
                                        </p>
                                        <a className="experience-link" onClick={() => toggleShowMore(3)}>Read More &gt;</a>
                                    </>
                                )}
                                <span className="experience-circle"></span>  <span className="experience-date">January 2022</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
