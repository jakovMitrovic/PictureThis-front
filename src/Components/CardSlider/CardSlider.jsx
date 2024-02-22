import React, { useState } from 'react'
import Card from '../Card/Card'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import './CardSlider.css'


const CardSlider = ({ cameras }) => {


    const btnPressPrev = () => {


        const slider = document.querySelector('.product-container');
        const width = slider.offsetWidth;
        slider.scrollLeft -= width;

    }

    const btnPressNext = () => {
        const slider = document.querySelector('.product-container');
        const width = slider.offsetWidth;
        slider.scrollLeft += width;


    }

    return (
        <>


            <div className='product-carousel'>
                <button className='pre-btn' onClick={btnPressPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg>
                </button>

                <div className='product-container'>

                    {cameras?.map((camera, index) => (

                        camera.sale_price && <Card _id={camera._id} key={index} brand={camera.name} image={camera.image} price={camera.price} sale_price={camera.sale_price} />
                    ))}
                </div>
                <button className='next-btn' onClick={btnPressNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

        </>
    )
}

export default CardSlider
