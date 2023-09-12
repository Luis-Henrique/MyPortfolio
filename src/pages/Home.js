import React from 'react'
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'
import About from '../components/About'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
  return( <div>
    <Navbar />
    <MainPage />
    <About />
  </div>
  );
};

export default Home;