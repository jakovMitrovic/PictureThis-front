import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import Products from '../Products/Products';
import { ProductContext } from '../../Context/ProductContext';

const SearchResults = () => {
    const location = useLocation();
    const products = useContext(ProductContext)

    const searched = products.filter((product)=>product.name.toLowerCase().includes(location.state.toLowerCase()))
    
  
  return (
    <div className='cameras'>
        <Products products={searched} search={location.state} />
    </div>
  )
}

export default SearchResults
