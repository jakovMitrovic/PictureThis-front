import React, { useState } from 'react'
import Card from '../Card/Card'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import './CardSlider.css'


const CardSlider = ({ cameras }) => {


   const btnPressPrev = () =>{


    const slider = document.querySelector('.product-container');
    const width = slider.offsetWidth;
    slider.scrollLeft -= width;

   }

   const btnPressNext = () =>{
    const slider = document.querySelector('.product-container');
    const width = slider.offsetWidth;
    slider.scrollLeft += width;


   }

    return (
        <>

            {/* <div className='container'>

                <div className='slider'>

                    {cameras?.map((camera, index) => (
                        <Card key={index} brand={camera.brand} img_url={camera.img_url} price={camera.price} />
                    ))}

                </div>
            </div> */}

            <div className='product-carousel'>
                <button className='pre-btn' onClick={btnPressPrev}><p>&lt;</p></button>

                <div className='product-container'>

                    {cameras?.map((camera, index) => (
                        <Card key={index} brand={camera.brand} img_url={camera.img_url} price={camera.price} />
                    ))}
                </div>
                <button className='next-btn' onClick={btnPressNext}><p>&gt;</p></button>
            </div>










        </>
    )
}

export default CardSlider
