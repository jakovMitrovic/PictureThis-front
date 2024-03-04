import React from 'react'
import './BlogCard.css'
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
  return (
    <Link className='blog_cart_link' to={`blogPostPage/${blog._id}`}>
    <div class="blog_card">
      <div class="blog_image">
        <img className='blog_card_img' src={blog.cover} />
      </div>
      <div class="blog_content">
        <a href="#">
          <span class="blog_title">
            {blog.title}
          </span>
        </a>

        <p class="blog_desc">
          {blog.description}
        </p>

      </div>
    </div>
    </Link>


  )
}

export default BlogCard
