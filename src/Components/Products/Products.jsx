import React from 'react'
import Card from '../Card/Card'
import './Products.css'



const Products = ({products}) => {
  return (
    <div className='products__continer'>
        {products?.map((product)=>(
            <Card brand={product.brand} img_url={product.img_url} price={product.price} />
        ))}
      
    </div>
  )
}

export default Products
