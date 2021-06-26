import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogImage from '../../../images/blogImage.jpg';


const BlogDetails = () => {
    let { blogId } = useParams();
    const [blogs, setBlogs] = useState({});
    console.log(blogs)
    useEffect(() => {
        axios.get(`https://tech-blog-ph.herokuapp.com/api/blogs/${blogId}`).then((data) => setBlogs(data.data.response));
    }, [blogId]);

    return (
        <div>
            
                <div class="card mb-3 border-0 my-5 blog-card">
                    <img src={blogs.imgUrl} height="300px" className="card-img-top" />
                    <div class="card-body px-4">
                        <h2 class="card-title">{blogs.title}</h2>
                        <h2 class="card-title">{blogs.description}</h2>
                    </div>
                </div>
           
        </div>
    );
};

export default BlogDetails;