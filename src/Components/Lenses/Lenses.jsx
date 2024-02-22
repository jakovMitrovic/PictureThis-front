import React, { useContext } from 'react'

import Products from '../Products/Products'
import { ProductContext } from '../../Context/ProductContext'


const Lenses = () => {
  const products = useContext(ProductContext)


  return (
    <div className='cameras'>
      <Products products={products} category='lens'/>
    </div>
  )
}

export default Lenses
