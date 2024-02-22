import React, { useContext } from 'react'
import Products from '../Products/Products'

import sony from '../../Assets/Cameras/sony_a1.jpg'
import sony_fx3 from '../../Assets/Cameras/sony_fx3.jpg'
import nikon_z9 from '../../Assets/Cameras/nikon_z9.jpg'
import canon from '../../Assets/Cameras/1dx3.jpg'

import './Cameras.css'

import Card from '../Card/Card'
import { ProductContext } from '../../Context/ProductContext'





const Cameras = () => {

  const products = useContext(ProductContext)



  return (
    <div className='cameras'>
      
      <Products products={products} category="camera"/>
    </div>

  )
}

export default Cameras
