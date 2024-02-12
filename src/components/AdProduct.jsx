import React, { useEffect, useState } from 'react'
import "./AdProduct.css" ;

function AdProduct(){
  const[slideIndex, setSlideIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % slides.length );
    }, 4000);

    return () => clearInterval(interval);
  }, [])

  const slides = [
    { index: 0,
      src:"../Images/product1.jpg"},
    {
      index:1,
      src:"../Images/product2.jpg"},
    {index:2,
      src:"../Images/product3.jpg"},
    {index:3,
      src:"../Images/product4.jpg"},
    {index:4,
      src:"../Images/product5.jpg"},
    {index:5,
      src:"../Images/product6.jpg"}
  ];

  const slide1 = document.querySelector('.slide1');
  const prevHandleClick = ()=>{
    setSlideIndex(prevIndex =>(prevIndex === 0 ?slides.length - 1 : prevIndex - 1 ));
  }
  const nextHandleClick = ()=>{
  setSlideIndex(prevIndex => (prevIndex === slides.length - 1 ? 0: prevIndex + 1));
  }
  return (
    <>
      <div className="container">
        <img className='slide1' src={slides[slideIndex].src} alt="slide ad" />
        <button className='prevButton' onClick={prevHandleClick}> &#10094;</button>
        <button className='nextButton' onClick={nextHandleClick}>&#10095;</button>
      </div>
    
      
    </>
  );
}



export default AdProduct
