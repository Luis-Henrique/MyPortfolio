import React, { useState } from "react";
import "./css/TestimonialsStyle.css"

import img1 from "../assets/img/person1.jpg"
import img2 from "../assets/img/person2.jpg"

const TestimonialsSlider = () => {
    const [showMore, setShowMore] = useState([false, false]);

    const toggleShowMore = (index) => {
        const updatedShowMore = [...showMore];
        updatedShowMore[index] = !updatedShowMore[index];
        setShowMore(updatedShowMore);
    };

  return (
    <>
    <div className="testimonials-resume">
            <p className="resume-title">Recomendações</p>
            <div className="testimonials-resume-divider"></div>
    </div>
    <div class="slider">
        <input type="radio" name="testimonial" id="t-2"/>
        <input type="radio" name="testimonial" id="t-1" checked/>
        <div class="testimonials">
            <label class="item" for="t-1">
                <img src={img2} alt="picture"/>
                {showMore[0] ? (
                    <>
                        <p className='author-txt'>"O Luis é um Dev Jr++ que conhece .netCore 3.1, Angular 8+, mySql e conceito de micro serviços, sabe aplicar e separar bem as camadas de uma aplicação. Aprende muito rápido e é muito comprometido, tem uma pegada diferenciada pois se envolve, questiona, participa e absorve muito bem os conteúdos. Mais um ponto legal tambem dele é que ele ja tem uma visão inicial olhando para o negócio como um todo, pensar fora da caixinha... Sem dúvidas uma ótima recomendacão!!!"</p>                        
                        <br></br>
                        <a className="experience-link" onClick={() => toggleShowMore(0)}>Ler menos &lt;</a>
                    </>
                ) : (
                    <>
                        <p className='author-txt'>"O Luis é um Dev Jr++ que conhece .netCore 3.1, Angular 8+, mySql e conceito de micro serviços, sabe aplicar e separar bem as camadas de uma aplicação. Aprende muito rápido e é muito comprometido, tem uma pegada diferenciada pois se envolve, questiona, participa e absorve muito bem os conteúdos..."</p>
                        <br></br>
                        <a className="experience-link" onClick={() => toggleShowMore(0)}>Ler mais &gt;</a>
                    </>
                )}
                
                <h2 className='author-name'>- Denis Rodrigues, Tech Lead</h2>
            </label>
            <label class="item" for="t-2">
                <img src={img1} alt="picture"/>
                {showMore[1] ? (
                    <>
                        <p className='author-txt'>"Tive o prazer de ter o Luís no meu time e acompanhar o início da sua carreira, que com certeza será grandiosa. O Luis é um profissional extremamente dedicado, proativo e entrega suas atividades muito acima do esperado, além de ter um perfil colaborativo e articulado. No período em que esteve no Jurídico & Compliance da Dotz, trouxe resultados efetivos, melhorando a rotina do time. Recomendo o Luís, pelo seu nível de maturidade em lidar as demandas recebidas, pela agilidade em absorver novos conhecimentos e pelo seu comprometimento com o time e com as suas entregas..."</p>
                        <br></br>
                        <a className="experience-link" onClick={() => toggleShowMore(1)}>Ler menos &lt;</a>
                    </>
                ) : (
                    <>
                        <p className='author-txt'>"Tive o prazer de ter o Luís no meu time e acompanhar o início da sua carreira, que com certeza será grandiosa. O Luis é um profissional extremamente dedicado, proativo e entrega suas atividades muito acima do esperado, além de ter um perfil colaborativo e articulado..."</p>
                        <br></br>
                        <a className="experience-link" onClick={() => toggleShowMore(1)}>Ler mais &gt;</a>
                    </>
                )}
                <h2 className='author-name'>- Fernanda Coelho, Coordenadora Jurídica</h2>
            </label>
        </div>
        <div class="dots">
            <label for="t-1"></label>
            <label for="t-2"></label>
        </div>
    </div>
    </>
  );
}

export default TestimonialsSlider;
