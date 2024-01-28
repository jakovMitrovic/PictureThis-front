import React, { useEffect, useState } from 'react'
import nikon_banner from '../../Assets/Banner/nikon_banner.jpg';
import canon_banner from '../../Assets/Banner/canon_banner.jpg';
import fujifilm_banner from '../../Assets/Banner/fujifilm_banner.jpg';
import sony_banner from '../../Assets/Banner/sony_banner.jpg';

import './Banner.css'

const banners = [nikon_banner, canon_banner, fujifilm_banner, sony_banner]



const Banner = () => {
    const[count, setCount] = useState(0)
    useEffect(()=>{
     
        const interval = setInterval(() => {
            if(count >= banners.length - 1){
                setCount(0)
            }else{
                console.log(count)
                setCount(count + 1)
            }
          }, 10000);

          return () => clearInterval(interval);
        
    },[count])


  return (
    <div>
        <div className='banner__bg'>
          <img className='banner_img' key={count} src={banners[count]} alt='banner'/>
        </div>
    </div>
  )
}

export default Banner
