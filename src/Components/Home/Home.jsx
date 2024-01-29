import React from 'react'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import CardSlider from '../CardSlider/CardSlider'
import sony from '../../Assets/Cameras/sony_a1.jpg'
import sony_fx3 from '../../Assets/Cameras/sony_fx3.jpg'
import nikon_z9 from '../../Assets/Cameras/nikon_z9.jpg'
import canon from '../../Assets/Cameras/1dx3.jpg'


import { Navigate } from 'react-router-dom'


import brand1 from '../../Assets/Brands/nikon.avif'
import brand2 from '../../Assets/Brands/canon.avif'
import brand3 from '../../Assets/Brands/sony.avif'
import brand4 from '../../Assets/Brands/fuji.avif'
import brand5 from '../../Assets/Brands/sigma.avif'
import brand6 from '../../Assets/Brands/tamron.avif'
import brand7 from '../../Assets/Brands/panasonic.avif'
import brand8 from '../../Assets/Brands/manfrotto.avif'

import './Home.css'
import BlogContainer from '../BlogContainer/BlogContainer'


let cameras = [
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


const Home = () => {
  return (
    <div>
      <Banner/>
      <section>
        <h1>Best Deals on Cameras</h1>
        <CardSlider  cameras={cameras} />
      </section>
      <section className='home_blogs'>
        <BlogContainer/>
      </section>
    
      <section className='brands'>
        <div>
          <img src={brand1}/>
        </div>
        <div>
          <img src={brand2}/>
        </div>
        <div>
          <img src={brand3}/>
        </div>
        <div>
          <img src={brand4}/>
        </div>
        <div>
          <img src={brand5}/>
        </div>
        <div>
          <img src={brand6}/>
        </div>
        <div>
          <img src={brand7}/>
        </div>
        <div>
          <img src={brand8}/>
        </div>
      </section>
      
    </div>
  )
}

export default Home
