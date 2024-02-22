import React, { useState } from 'react'
import './Card.css'
import sony from '../../Assets/Cameras/sony_a1.jpg'
import { Link } from 'react-router-dom'




const Card = (props) => {



  return (
    <Link className='card_link' to={`/itemPage/${props._id}`}>

    <div className='card'>
      <div className="sale_container">

      {props.sale_price && (  <div className='sale_p'>
          {Math.ceil(100 - ((props.sale_price / props.price)*100))}%
        </div>)}
      </div>
        <div className='img_container'>
            <img src={props.image}/>
        </div>
        <div className='desc'>
            <h2>{props.brand}</h2>
            <div className='price_container'>
              <h2 className={props.sale_price ? 'on_sale' : 'price'}>{props.price}</h2>
              {props.sale_price && 
                <h2 className='price'>{props.sale_price}$</h2>
              }
            </div>
        </div>
        {/* <div className='button_container'>
          <button class="cssbuttons-io"><span>Add to cart</span></button>
        </div> */}
    </div>
    </Link>
  )
}

export default Card
