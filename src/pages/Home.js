import React from 'react'
import MainPage from '../components/MainPage'
import About from '../components/About'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Projects } from '../components/ProjectsResume'
import Carousel from '../components/Carousel'

const Home = () => {
  return( <div>
    <MainPage />
    <About />
    <Carousel />
    <Projects />
  </div>
  );
};

export default Home;