import React from 'react';
import './HeroSection.css';
import { FaArrowAltCircleDown } from "react-icons/fa";
import Quote from '../QOTD/Quote';





const HeroSection = () => {

  return (
    <section id='hero' className=''>
      <div className='container'>
        <div className='left-container'>
          <h1><span>Unleash Your Potential: Transform Your Body, Elevate Your Mind.</span></h1>
          <hr />
          <div className='sub-text'>
            <Quote/>
           </div>
          
          <a href="#featured"><button>Continue</button></a>
          
       </div>
       <div className='right-container'>
          <img src="/images/image1.jpg" alt="heroimage"/>
        </div>
     </div>
    </section>

    
  )
}

export default HeroSection
