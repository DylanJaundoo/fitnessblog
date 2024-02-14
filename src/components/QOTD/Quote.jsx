
import React from 'react';
import { useState,useEffect } from 'react';
import './quote.css';
import { FaArrowAltCircleDown } from "react-icons/fa";


const Quote = () => {
  const [quote,setQuote] = useState("")
  const [author,setAuthor] = useState("")
  

  useEffect(()=>{
    getQuote();  
}, [])

const getQuote = () => {
  fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(
      (data) =>{
        setQuote(data.content);
        setAuthor(data.author);
      }
    )   
}

  return (
     <div>
         <p>"{quote}"</p>
         <p>- {author}</p>
     </div>
          
         
       
  )
}

export default Quote;
