import React, { createContext, useEffect, useState } from "react";


export const BlogContext = createContext(null)


const BlogContextProvider = (props) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/blogPosts/allBlogPosts')
        .then((res)=>res.json())
        .then((data)=>{setBlogs(data)})
    }, [])
        

    return (
        <BlogContext.Provider value={blogs}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;