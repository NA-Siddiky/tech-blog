import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs/Blogs'

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
            .then((res) => res.json())
            .then((data) => setBlogs(data.response));
    }, []);


    console.log(blogs)
    return (
        // <div className="container d-flex flex-wrap">
        //     {blogs.map((blog) => (
        //         <Blogs key={blog._id} book={blog}></Blogs>
        //     ))}
        // </div>

        <div className="container">
            <div class="card mb-3">
                {blogs.map((blog) => (
                    <>
                        <img src={blog.imgUrl} className="card-img-top"/>
                        <div class="card-body">
                            <h5 class="card-title">{blog.title}</h5>
                            <p class="card-text">{blog.description}</p>
                            <button>See Details</button>
                        </div>
                    </>
                ))}
            </div>
        </div>

    );
};

export default HomePage;