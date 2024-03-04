import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './Products.css'
import AnimatedPage from '../Animation/AnimatedPage';
import logo from '../../Assets/picturethiswhite.png'
import { Link } from 'react-router-dom';



const Products = ({ products, category = false, brand = false, search = false }) => {
  const lowToHigh = [...products].sort((a, b) => a.price - b.price);
  const highToLow = [...products].sort((a, b) => b.price - a.price);
  const [sorting, setSorting] = useState('date')  

  return (
    <AnimatedPage>
      <div className='category_bar'>
        <div className='product_sort'>
          <p>Sort</p>
          <select value={sorting} onChange={(e) => { setSorting(e.target.value) }} name='brand' className='add-product-selector'>
            <option value={'products'}>Date</option>
            <option value={'highToLow'}>High to Low</option>
            <option value={'lowToHigh'}>Low to High</option>
          </select>
        </div>
        <div>
          <h1 className='category_name'>{category && category}</h1>
          <h1 className='category_name'>{brand && brand}</h1>
          <h1 className='category_name'>{search && `Showing results for: ${search}`}</h1>
        </div>
        <div className='category_name'>
        <Link to={'/'}>

          <img src={logo} />
        </Link>
        </div>
      </div>
      {products.length === 0 && (<h1 className='no_results'>No results</h1>)}
      <div className='products__continer'>



        {search !== false && products?.map((product) => (
          (<Card _id={product._id} brand={product.name} image={product.image} price={product.price} sale_price={product?.sale_price} />)
        ))}

        {category && sorting === 'date' && products?.map((product) => (
          product.category === category && (<Card _id={product._id} brand={product.name} image={product.image} price={product.price} sale_price={product?.sale_price} />)
        ))}

        {category && sorting === 'highToLow' && highToLow?.map((product) => (
          product.category === category && (<Card _id={product._id} brand={product.name} image={product.image} price={product.price} sale_price={product?.sale_price} />)
        ))}

        {category && sorting === 'lowToHigh' && lowToHigh?.map((product) => (
          product.category === category && (<Card _id={product._id} brand={product.name} image={product.image} price={product.price} sale_price={product?.sale_price} />)
        ))}




        {brand && sorting === 'date' && products?.map((product) => (
          product.brand === brand && (<Card _id={product._id} brand={product.name} image={product.image} price={product.price} sale_price={product?.sale_price} />)
        ))}
        {brand && sorting === 'highToLow' && highToLow?.map((product) => (
          product.brand === brand && (<Card _id={product._id} brand={product.name} image={product.image} price={product.price} sale_price={product?.sale_price} />)
        ))}
        {brand && sorting === 'lowToHigh' && lowToHigh?.map((product) => (
          product.brand === brand && (<Card _id={product._id} brand={product.name} image={product.image} price={product.price} sale_price={product?.sale_price} />)
        ))}



      </div>
    </AnimatedPage>
  )
}

export default Products
