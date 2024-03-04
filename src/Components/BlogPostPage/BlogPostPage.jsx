import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './BlogPostPage.css'
import Loading from '../Loading/Loading';


const BlogPostPage = () => {
    const { id } = useParams()
    const [postDetails, setPostDetails] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/blogPosts/blogPost/${id}`).then(res => {
            res.json().then(details => {
                setPostDetails(details)
            
            })


        })
    }, [])

    
    return (
        <>

            {postDetails === '' && (<Loading />)}
            <div className='blogPostPage'>
                <div className='image'>
                    <img src={postDetails.cover} alt="image" />
                </div>
                <div className='blogInfo'>
                    <div className='authorDiv'>
                        <div className='authorName' to={'/'}>By @{postDetails.author?.username}</div>
                        
                    </div>



                   
                </div>
                <h1 className='postTitle'>
                    {postDetails.title}
                </h1>
                <h2 className='postDesc'>
                    {postDetails.description}
                </h2>
                <div className='content' dangerouslySetInnerHTML={{ __html: postDetails.content }} />
            </div>
        </>
    )
}

export default BlogPostPage
