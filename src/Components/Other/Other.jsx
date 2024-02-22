import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import Products from '../Products/Products'

const Other = () => {

    const products = useContext(ProductContext)


    return (
      <div className='cameras'>
        <Products products={products} category='lighting'/>
      </div>
    )
  
}

export default Other
