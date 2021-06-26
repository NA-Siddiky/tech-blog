import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://tech-blog-ph.herokuapp.com/api/blogs')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.response)
                const filterBlog = data.response.filter(item => item.status === 'publish');
                setBlogs(filterBlog);
            });
    }, []);


    console.log(blogs)
    return (
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