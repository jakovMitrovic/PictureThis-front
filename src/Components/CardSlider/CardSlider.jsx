import React from 'react'
import Card from '../Card/Card'

import './CardSlider.css'


const CardSlider = ({cameras}) => {
    return (
        <div className='container'>
        
            <div className='slider'>
                {cameras?.map((camera) => (
                    <Card brand={camera.brand} img_url={camera.img_url} price={camera.price} />
                ))}
            </div>
        </div>
    )
}

export default CardSlider
