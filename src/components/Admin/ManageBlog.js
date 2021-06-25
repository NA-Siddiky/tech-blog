import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import BlogData from '../Blogs/BlogData/BlogData';

function ManageBlog() {
    const [Blogs, setBlog] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/blogs")
            .then((response) => {
                setBlog(response.data.response);
            });
    }, []);
    const addBlog = (id, status) => {
        axios.put(`http://localhost:5000/api/blogs/${id}`, status)
            .then((res) => {
                console.log(res)
                history.push('/admin/manageBlog/')
            });
    };

    const history = useHistory();
    return (
        <div>
            <h2>Manage your Blogs.</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Blog Details</th>
                        <th>Add Blog</th>
                    </tr>
                </thead>
                <tbody>
                    {Blogs.map((blog, index) => (
                        <BlogData key={index} blog={blog}>
                            <button
                                className="btn-danger btn"
                                onClick={() => addBlog(blog._id, "publish")}
                            >
                                Add Blog
                            </button>
                        </BlogData>
                    ))}
                </tbody>
            </Table>

        </div>
    );
};

export default ManageBlog;