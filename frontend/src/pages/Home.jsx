import React from 'react';
import HeroSection from '../components/HeroSection';
import Facilities from '../components/Facilities';
// import Footer from '../Footer';
import HomeFAQ from '../components/HomeFQA';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Facilities />
      <HomeFAQ />
      {/* <Footer /> */}
    </>
  );
};

export default Home;

