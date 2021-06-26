import React, { useEffect, useState } from 'react';
import blogImage from '../../../images/blogImage.jpg';


const BlogDetails = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
            .then((res) => res.json())
            .then((data) => setBlogs(data.response));
    }, []);

    return (
        <div>
            {blogs.map((blog) => (
                <div class="card mb-3 border-0 my-5 blog-card">
                    <img src={blogImage} height="300px" className="card-img-top" />
                    <div class="card-body px-4">
                        <h2 class="card-title">{blog.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogDetails;