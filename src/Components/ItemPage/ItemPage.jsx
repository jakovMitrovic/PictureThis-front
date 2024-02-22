import React, { useEffect, useState } from 'react'
import sony from '../../Assets/Cameras/sony_a1.jpg'
import './ItemPage.css'
import { useParams } from 'react-router-dom'

const ItemPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})


  useEffect(() => {
    console.log(id)
    fetch(`http://localhost:4000/products/product/${id}`)
      .then((res) => res.json())
      .then((data) => { setProduct(data) })
  }, [])

  return (
    <>
      <div className='itemPage'>
        <div className='itemPage_image'>
          <img src={product.image} />
        </div>
        <div className='itemPage_info'>
          <h1 >{product.name}</h1>
  
          <p className='item_subtitle'>{product.category === 'camera' ? product?.sensor : product.category === 'lens' ? product?.lensMount : ''}  {product.category}</p>
          <div className='price_container price_item'>
            <h1 className={product.sale_price ? 'on_sale' : 'price'}>{product.price}</h1>
            {product.sale_price &&
              <h1 className='price'>{product.sale_price}$</h1>
            }
          </div>
          <div className='button_container'>
            <button class="cssbuttons-io"><span>Add to cart</span></button>
          </div>
        </div>
      </div>
      <div className='itemPage_specs'>

        <h2 className='specs_title'>Specifications</h2>
        <table>
          <tr>
            <td className='table_headers'>Brand</td>
            <td>{product.brand}</td>
          </tr>
          <tr>
            <td className='table_headers'>Model</td>
            <td>{product.model}</td>
          </tr>

          {product.category === 'camera' && (
            <>
              <tr>
                <td className='table_headers'>Resolution</td>
                <td>{product.megaPixel}</td>
              </tr>
              <tr>
                <td className='table_headers'>Sensor</td>
                <td>{product.sensor}</td>
              </tr>
              <tr>
                <td className='table_headers'>Lens Mount</td>
                <td>{product.mount}</td>
              </tr>
            </>
          )}
          {product.category === 'lens' && (
            <>
              <tr>
                <td className='table_headers'>Focal Length</td>
                <td>{product.focalLength}</td>
              </tr>
              <tr>
                <td className='table_headers'>Aperature</td>
                <td>{product.fStop}</td>
              </tr>
              <tr>
                <td className='table_headers'>Lens Mount</td>
                <td>{product.lensMount}</td>
              </tr>
            </>
          )}
          {product.category === 'other' && (
            <>
              <tr>
                <td className='table_headers'>Resolution</td>
                <td>{product.desc}</td>
              </tr>

            </>
          )}


        </table>

      </div>
    </>
  )
}

export default ItemPage
