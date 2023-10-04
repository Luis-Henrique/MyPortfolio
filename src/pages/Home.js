import React from 'react'
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'
import About from '../components/About'
import Footer from '../components/Footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMidia from '../components/SocialMidia'
import { Projects } from '../components/Projects'

const Home = () => {
  return( <div>
    <Navbar />
    <SocialMidia />
    <MainPage />
    <About />
    <Projects />
    <Footer />
  </div>
  );
};

export default Home;