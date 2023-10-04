import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./ProjectStyle.css"

export const Projects = () => {
  const [filter, setFilter] = useState('tudo');

  const filteredPosts = [
    {
      category: 'planeta',
      imgSrc: 'img/post-1.jpg',
      categoryText: 'Planeta',
      postTitle: 'How To Create Best Ux Design With Adobe XD',
      postDate: '12 Feb 2022',
      postDescription: 'In this tutorial, we will explore the world of UX design using Adobe XD. Learn the best practices, tips, and tricks to create outstanding user experiences.',
      profileImgSrc: 'img/profile-1.jpg',
      profileName: 'Marques Brown',
    },
    {
      category: 'colonizacao',
      imgSrc: 'img/post-2.jpg',
      categoryText: 'Colonização',
      postTitle: 'Exploring the History of Colonization',
      postDate: '18 Mar 2022',
      postDescription: 'Dive into the fascinating history of colonization, its impact on civilizations, and the lessons we can learn from it in the modern world.',
      profileImgSrc: 'img/profile-2.jpg',
      profileName: 'Emily Carter',
    },
    {
      category: 'transporte',
      imgSrc: 'img/post-3.jpg',
      categoryText: 'Transporte',
      postTitle: 'The Future of Sustainable Transportation',
      postDate: '25 Apr 2022',
      postDescription: 'Explore the latest advancements in sustainable transportation and how they are shaping the future of commuting and travel.',
      profileImgSrc: 'img/profile-3.jpg',
      profileName: 'Alexandra Miller',
    },
    {
        category: 'planeta',
        imgSrc: 'img/post-1.jpg',
        categoryText: 'Planeta',
        postTitle: 'How To Create Best Ux Design With Adobe XD',
        postDate: '12 Feb 2022',
        postDescription: 'In this tutorial, we will explore the world of UX design using Adobe XD. Learn the best practices, tips, and tricks to create outstanding user experiences.',
        profileImgSrc: 'img/profile-1.jpg',
        profileName: 'Marques Brown',
      },
      {
        category: 'colonizacao',
        imgSrc: 'img/post-2.jpg',
        categoryText: 'Colonização',
        postTitle: 'Exploring the History of Colonization',
        postDate: '18 Mar 2022',
        postDescription: 'Dive into the fascinating history of colonization, its impact on civilizations, and the lessons we can learn from it in the modern world.',
        profileImgSrc: 'img/profile-2.jpg',
        profileName: 'Emily Carter',
      },
      {
        category: 'transporte',
        imgSrc: 'img/post-3.jpg',
        categoryText: 'Transporte',
        postTitle: 'The Future of Sustainable Transportation',
        postDate: '25 Apr 2022',
        postDescription: 'Explore the latest advancements in sustainable transportation and how they are shaping the future of commuting and travel.',
        profileImgSrc: 'img/profile-3.jpg',
        profileName: 'Alexandra Miller',
      },
  ].filter(post => filter === 'tudo' || post.category === filter);

  return (
    <>
    <div className="project-hero-main">
      <div className="projects-resume">
        <p className="projects-resume-title">Projetos</p>
        <div className="projects-resume-divider"></div>
      </div>
      <div className="post-filter container">
        <span
          className={`filter-item ${filter === 'tudo' ? 'active-filter' : ''}`}
          data-filter="tudo"
          onClick={() => setFilter('tudo')}
        >
          Tudo
        </span>
        <span
          className={`filter-item ${filter === 'planeta' ? 'active-filter' : ''}`}
          data-filter="planeta"
          onClick={() => setFilter('planeta')}
        >
          Planeta
        </span>
        <span
          className={`filter-item ${filter === 'colonizacao' ? 'active-filter' : ''}`}
          data-filter="colonizacao"
          onClick={() => setFilter('colonizacao')}
        >
          Colonização
        </span>
        <span
          className={`filter-item ${filter === 'transporte' ? 'active-filter' : ''}`}
          data-filter="transporte"
          onClick={() => setFilter('transporte')}
        >
          Transporte
        </span>
      </div>

      <section className="post container">
        {filteredPosts.map((post, index) => (
          <div key={index} className={`post-box ${post.category}`}>
            <img src={post.imgSrc} alt="" className="post-img" />
            <h2 className="category">{post.categoryText}</h2>
            <a href="post-page.html" className="post-title">{post.postTitle}</a>
            <span className="post-date">{post.postDate}</span>
            <p className="post-description">{post.postDescription}</p>
            <div className="profile">
              <img src={post.profileImgSrc} alt="" className="profile-img" />
              <span className="profile-name">{post.profileName}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
    </>
  );
};
