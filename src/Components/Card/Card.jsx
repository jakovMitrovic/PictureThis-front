import React, { useState } from 'react'
import './Card.css'
import sony from '../../Assets/Cameras/sony_a1.jpg'




const Card = (props) => {
  const [onSale, setOnSale] = useState(true)


  return (
    <div className='card'>
        <div className='img_container'>
            <img src={props.img_url}/>
        </div>
        <div className='desc'>
            <h2>{props.brand}</h2>
            <div className='price_container'>
              <h2 className={onSale ? 'on_sale' : 'price'}>{props.price}</h2>
              {onSale && 
                <h2 className='price'>500$</h2>
              }
            </div>
        </div>
        <div className='button_container'>
          <button class="cssbuttons-io"><span>Add to cart</span></button>
        </div>
    </div>
  )
}

export default Card
