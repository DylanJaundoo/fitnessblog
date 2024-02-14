import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import Grid from '../componentsBlog/Grid';



const Home = () => {
  return (
    <div>
      <section>
        <HeroSection/>
        <div id='featured'>
        <Grid/>
        </div>
        
      </section>
    </div>
  )
}

export default Home
