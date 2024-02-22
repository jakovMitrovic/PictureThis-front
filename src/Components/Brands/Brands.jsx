import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import Products from '../Products/Products'
import { useParams } from 'react-router-dom'

const Brands = () => {
    const products = useContext(ProductContext)


    const { brand } = useParams()
    console.log(brand)
    return (
      <div className='cameras'>
        
        <Products products={products} brand={brand}/>
      </div>
  
    )
}

export default Brands
