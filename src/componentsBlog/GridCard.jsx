import React from 'react'

const GridCard = ({title,description,link}) => {
  return (
    <div className='container-gridcard'>
      <div className='grid-title'><a href={link}><h2>{title}</h2></a></div>
      <div className="grid-description"><p>{description}</p></div>
    </div>
     
  )
}

export default GridCard
