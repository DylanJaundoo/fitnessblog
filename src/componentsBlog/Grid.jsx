import React from 'react';
import './grid.css';
import GridCard from './GridCard';


const Grid = () => {
  return (
    <div className='section__margin-blog'>
      <div class="custom-shape-divider-top-1707935236">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
    </svg>
</div>
      <div className='container-grid'>
        <div className="left-container-blog">
          <img src="../../images/blogimage2.jpg" alt="blogimage1" />
          <div className="grid-details">
          <a href="/"><h2>Blog Title</h2></a>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          to make a type specimen book. It has survived not only five centuries,
            </p>
          </div>
        </div>
        <div className="right-container-blog">
          <div className="section1">
            <div className="img-section"> <img src="../../images/blogimage3.jpg" alt="blogimage" /></div>
            <div className="grid-details-1">
              <GridCard title="Blog Title" link="/" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              to make a type specimen book. It has survived not only five centuries,"/>
            </div>
          </div>
          <div className="section2">
            <div className="img-section"><img src="../../images/blogimage4.jpg" alt="blogimage" /></div>
            <div className="grid-details-1">
            <GridCard title="Blog Title" link="/" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             to make a type specimen book. It has survived not only five centuries,"/>
            </div>
          </div>
          <div className="section3">
            <div className="img-section"><img src="../../images/blogimage7.PNG" alt="blogimage" /></div>
            <div className="grid-details-1">
            <GridCard title="Blog Title" link="/" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             to make a type specimen book. It has survived not only five centuries,"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Grid
