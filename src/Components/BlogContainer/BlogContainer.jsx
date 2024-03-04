import React, { useContext } from 'react'
import BlogCard from '../BlogCard/BlogCard'
import './BlogContainer.css'
import { BlogContext } from '../../Context/BlogContext'
// import { blogs } from '../../Assets/blogs'

const BlogContainer = () => {
  const blogs = useContext(BlogContext)
  console.log(blogs)
  return (
    <div className='blog_container'>
      {blogs?.map((blog)=>(
        <BlogCard blog={blog} />
      ))}
    </div>
  )
}

export default BlogContainer
