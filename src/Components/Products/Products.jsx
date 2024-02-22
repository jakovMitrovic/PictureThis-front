import React from 'react'
import Card from '../Card/Card'
import './Products.css'



const Products = ({ products, category = false, brand = false }) => {
  return (
    <>

      <h1 className='category_name'>{category ? category : brand}</h1>
      <div className='products__continer'>
        {category && products?.map((product) => (
          product.category === category && (<Card _id={product._id} brand={product.name} image={product.image} price={product.price} sale_price={product?.sale_price} />)
        ))}

        {brand && products?.map((product) => (
          product.brand === brand && (<Card _id={product._id} brand={product.name} image={product.image} price={product.price} sale_price={product?.sale_price} />)
        ))}

      </div>
    </>
  )
}

export default Products
