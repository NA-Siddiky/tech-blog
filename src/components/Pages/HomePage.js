import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './HomePage.css';
import Blogs from '../Blogs/Blogs/Blogs'
import blogImage from '../../images/blogImage.jpg';

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.response)
                const filterBlog = data.response.filter(item => item.status === 'publish');
                setBlogs(filterBlog);
            });
    }, []);


    console.log(blogs)
    return (
        // <div className="container d-flex flex-wrap">
        //     {blogs.map((blog) => (
        //         <Blogs key={blog._id} book={blog}></Blogs>
        //     ))}
        // </div>

        <div className="container">
            {blogs.map((blog) => (
                <div class="card mb-3 border-0 my-5 blog-card">
                    <img src={blog.imgUrl} height="300px" className="card-img-top" />
                    <div class="card-body px-4">
                        <h2 class="card-title">{blog.title}</h2>
                        <p>{blog.description}</p>
                        <Link to={`/blog/${blog._id}`} className="btn btn-primary my-3">See Details</Link>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default HomePage;