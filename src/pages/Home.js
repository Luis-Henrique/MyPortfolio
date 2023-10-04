import React from 'react'
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'
import About from '../components/About'
import Footer from '../components/Footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMidia from '../components/SocialMidia'

const Home = () => {
  return( <div>
    <Navbar />
    <SocialMidia />
    <MainPage />
    <About />
    <Footer />
  </div>
  );
};

export default Home;