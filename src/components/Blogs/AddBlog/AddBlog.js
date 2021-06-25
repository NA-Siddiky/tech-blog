import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddBlog = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [blog, setBlog] = useState({});

    const onSubmit = data => {
        console.log(blog);

        const url = "http://localhost:5000/api/blogs";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => console.log('server side response', res))
        data.preventDefault();
    };

    const handleAddBlog = (e) => {
        // console.log(e.target.name);
        if (e.target.name === 'title') {
            const title = (blog.name = e.target.value);
            setBlog({ ...blog, title });
        } else if (e.target.name === 'description') {
            const description = (blog.description = e.target.value);
            setBlog({ ...blog, description });
        }
    };

    const handleImageUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'bc1891d9e3a9ddc7763a8b1ba4e7c6bd');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response)
                const url = (blog.url = response.data.data.url);
                setBlog({ ...blog, url });
                setIMageURL(response.data.data.url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="container">
            <h1 className="d-flex justify-content-center">Make your Own Blog</h1>


            <form className="was-validated">

                <div class="mb-3">
                    <label for="validationDefault01" class="form-label">Blog Title</label>
                    <input onChange={(e) => handleAddBlog(e)} type="text" name="title" class="form-control" id="validationDefault01" required />
                </div>
                <div className="mb-3">
                    <label for="validationTextarea" className="form-label">Blog Details</label>
                    <textarea onChange={(e) => handleAddBlog(e)} className="form-control is-invalid" name="description" id="validationTextarea" placeholder="Write here about your blog." required></textarea>
                    <div className="invalid-feedback">
                        Please enter details description about your blog.
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Blog Banner</label>
                    <input onChange={handleImageUpload} type="file" className="form-control" aria-label="file example" required />
                    <div className="invalid-feedback">Example invalid form file feedback</div>
                </div>

                <div className="mb-3">
                    <button onClick={onSubmit} className="btn btn-primary" type="submit">Submit Review</button>
                </div>
            </form>

        </div>
    );
};

export default AddBlog;