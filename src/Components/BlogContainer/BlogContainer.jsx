import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import './BlogContainer.css'
import { blogs } from '../../Assets/blogs'

const BlogContainer = () => {
  return (
    <div className='blog_container'>
      {blogs.map((blog)=>(
        <BlogCard blog={blog} />
      ))}
    </div>
  )
}

export default BlogContainer
