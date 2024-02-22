import React, { useContext } from 'react'
import './Footer.css'
import brands from '../../Assets/brands'
import { Link } from 'react-router-dom'





const Footer = () => {

  return (
    <div className='footer'>
      <div className='brands'>

      {brands.map((brand) => (
        <Link to={`brands/${brand.name}`} >
          <div>
            <img src={brand.img} />
          </div>
        </Link>
      ))}
      </div>

    </div>
  )
}

export default Footer
