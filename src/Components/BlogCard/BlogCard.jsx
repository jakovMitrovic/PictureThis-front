import React from 'react'
import './BlogCard.css'

const BlogCard = () => {
  return (


    <div class="blog_card">
      <div class="blog_image">
        <img className='blog_card_img' src='https://www.adorama.com/col/UIimages/homepage/evergreen-banners/Callout_Image_Used.jpg' />
      </div>
      <div class="blog_content">
        <a href="#">
          <span class="blog_title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </a>

        <p class="blog_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
        </p>

        <button  class="cssbuttons-io blog_card_button">
          <span >
            Learn more
          </span>
        </button>
      </div>
    </div>


  )
}

export default BlogCard
