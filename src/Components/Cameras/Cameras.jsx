import React from 'react'
import Products from '../Products/Products'

import sony from '../../Assets/Cameras/sony_a1.jpg'
import sony_fx3 from '../../Assets/Cameras/sony_fx3.jpg'
import nikon_z9 from '../../Assets/Cameras/nikon_z9.jpg'
import canon from '../../Assets/Cameras/1dx3.jpg'

import './Cameras.css'

import Card from '../Card/Card'


let products = [
  {
      img_url: sony,
      brand: "Sony a1",
      price: "1200$"
  },
  {
      img_url: sony_fx3,
      brand: "Sony fx3",
      price: "2200$"
  },
  {
      img_url: nikon_z9,
      brand: "Nikon z9",
      price: "3200$"
  },
  {
      img_url: sony,
      brand: "Sony a1",
      price: "1200$"
  },
  {
      img_url: canon,
      brand: "Canon 1dx mk3",
      price: "1100$"
  },
  {
      img_url: nikon_z9,
      brand: "Nikon z9",
      price: "3200$"
  },
  {
    img_url: nikon_z9,
    brand: "Nikon z9",
    price: "3200$"
},
{
    img_url: sony,
    brand: "Sony a1",
    price: "1200$"
},
{
    img_url: canon,
    brand: "Canon 1dx mk3",
    price: "1100$"
},
{
    img_url: nikon_z9,
    brand: "Nikon z9",
    price: "3200$"
},
{
  img_url: nikon_z9,
  brand: "Nikon z9",
  price: "3200$"
},
{
  img_url: sony,
  brand: "Sony a1",
  price: "1200$"
},
{
  img_url: canon,
  brand: "Canon 1dx mk3",
  price: "1100$"
},
{
  img_url: nikon_z9,
  brand: "Nikon z9",
  price: "3200$"
},
]




const Cameras = () => {
  return (
    <div className='cameras'>
      <Products products={products} />
    </div>

  )
}

export default Cameras
