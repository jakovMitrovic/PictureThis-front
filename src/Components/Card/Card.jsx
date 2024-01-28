import React from 'react'
import './Card.css'
import sony from '../../Assets/Cameras/sony_a1.jpg'

const Card = (props) => {
  return (
    <div className='card'>
        <div>
            <img src={props.img_url}
            />
        </div>
        <div className='desc'>
            <h2>{props.brand}</h2>
            <h2>{props.price}</h2>
        </div>
    </div>
  )
}

export default Card
