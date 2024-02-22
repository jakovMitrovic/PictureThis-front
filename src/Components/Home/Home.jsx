import React, { useContext } from 'react'
import Banner from '../Banner/Banner'
import CardSlider from '../CardSlider/CardSlider'
import brands from '../../Assets/brands'
import './Home.css'
import BlogContainer from '../BlogContainer/BlogContainer'
import { ProductContext } from '../../Context/ProductContext'
import { Link } from 'react-router-dom'





const Home = () => {
  const products = useContext(ProductContext)
  const sorted = products.sort((a, b) => (b.price - b.sale_price) - (a.price - a.sale_price));

  return (
    <div>
      <Banner />
      <section>
        <h1>Best Deals</h1>
        <CardSlider cameras={sorted} />
      </section>

      <section className='home_blogs'>
        <BlogContainer />
      </section>
 
      {/* <section className='brands'>
        {brands.map((brand) => (
          <Link to={`brands/${brand.name}`} >
            <div>
              <img src={brand.img} />
            </div>
          </Link>
        ))}
      </section> */}

    </div>
  )
}

export default Home
