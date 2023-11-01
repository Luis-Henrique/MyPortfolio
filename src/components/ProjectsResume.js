import React, { useState } from 'react';
import './css/ProjectResumeStyle.css'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import bgimg1 from '../assets/img/myportifolio.PNG'
import bgimg2 from '../assets/img/juridical.PNG'
import bgimg3 from '../assets/img/ops.jpg'
import bgimg4 from '../assets/img/docmanager.PNG'
import bgimg5 from '../assets/img/uploadai.PNG'
import bgimg6 from '../assets/img/easy.jpg'

import profile1 from '../assets/img/profile-pic.svg'
import profile2 from '../assets/img/dotz.png'
import profile3 from '../assets/img/if.png'
import profile4 from '../assets/img/rocketseat.jpg'


export const Projects = () => {
  const [filter, setFilter] = useState('tudo');

  const filteredPosts = [
    {
      category: 'frontend',
      imgSrc: bgimg1,      
      categoryText: 'Front-end',
      postTitle: 'MyPortfolio',
      postDate: '04 Jul 2023',
      postDescription: 'Meu portifólio pessoal com uma amostra do meu trabalho, destacando minhas habilidades e experiência em desenvolvimento | React | JavaScript',
      profileImgSrc: profile1,
      profileName: 'Associado à Luis Henrique',
    },
    {
      category: 'fullstack',
      imgSrc: bgimg2,
      categoryText: 'Full-stack',
      postTitle: 'Juridical Compliance',
      postDate: '05 Abr 2022',
      postDescription: 'Aplicação para gestão de processos judiciais | .Net Core | Angular | C# | TypeScript | MySql',
      profileImgSrc: profile2,
      profileName: 'Associado à Dotz',
    },
    {
      category: 'backend',
      imgSrc: bgimg3,
      categoryText: 'Back-end',
      postTitle: 'Ops Catalog',
      postDate: '18 Set 2023',
      postDescription: 'API para coleta de informações dos ambientes da empresa para posteior criação de dashboards analíticos no Redash. | Python | PostgreSQL',
      profileImgSrc: profile2,
      profileName: 'Associado à Dotz',
    },
    {
      category: 'fullstack',
      imgSrc: bgimg4,
      categoryText: 'Full-stack',
      postTitle: 'Doc Manager',
      postDate: '18 Set 2023',
      postDescription: 'Meu projeto de finalização de curso voltado para gestão de documentos | .Net Core | Angular | C# | TypeScript | MySql',
      profileImgSrc: profile3,
      profileName: 'Associado à IFSP',
    },
    {
      category: 'fullstack',
      imgSrc: bgimg5,
      categoryText: 'Full-stack',
      postTitle: 'Project Ai',
      postDate: '22 Set 2023',
      postDescription: 'Aplicação que gera uma descrição ou titulo para um video usando API da OpenAI | React | TypeScript',
      profileImgSrc: profile4,
      profileName: 'Associado à Rocketseat',
    },
    {
      category: 'backend',
      imgSrc: bgimg6,
      categoryText: 'Back-end',
      postTitle: 'Easy Menu',
      postDate: '22 Set 2023',
      postDescription: 'API para gerenciamento e manutenção de cardápios de restaurantes, o aplicativo pode cadastrar diversos cardápios e relacioná-los com diferentes refeições, organizando-os por tipo | .Net Core | C# | Angular | TypeScript | SQLServer',
      profileImgSrc: profile1,
      profileName: 'Associado à Luis Henrique',
    },
  ].filter(post => filter === 'tudo' || post.category === filter);

  return (
    <>
      <div className="project">
        <div className="project-hero">
          <div className="resume">
            <p className="resume-title">Projetos</p>
            <div className="resume-divider"></div>
          </div>
          <section className="post container">
            {filteredPosts.map((post, index) => (
              <div key={index} className={`post-box ${post.category}`}>      
                <Link to={`/projects/${index}`} className="post-link"> {/* Adicione este Link */}
                <img src={post.imgSrc} alt="" className="post-img" />
                <h2 className="category">{post.categoryText}</h2>
                <div className="post-title">{post.postTitle}</div>
                <span className="post-date">{post.postDate}</span>
                <p className="post-description">{post.postDescription}</p>
                <div className="profile">
                  <img src={post.profileImgSrc} alt="" className="profile-img" />
                  <span className="profile-name">{post.profileName}</span>
                </div>
                </Link>
              </div>
            ))}
          </section>
        </div>
        <div className="post-button-div">
          <a href="/projects"><button className="btn" href="/projects">Ver mais</button></a>
        </div>
      </div>
    </>
  );
};
