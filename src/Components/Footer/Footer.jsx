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
      <div className='footer_bottom'>
        <p>All rights reserved</p>
        <h2>Picture This</h2>
      </div>

    </div>
  )
}

export default Footer
