import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddBlog = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {

        data.imageUrl = imageURL;
        console.log(data);
        const url = "http://localhost:5000/api/blogs";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log('server side response', res))
        // data.preventDefault();
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'bc1891d9e3a9ddc7763a8b1ba4e7c6bd');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url)
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="container">
            <h1 className="d-flex justify-content-center">Make your Own Blog</h1>


            <form className="was-validated" onSubmit={handleSubmit(onSubmit)}>

                <div class="mb-3">
                    <label for="validationDefault01" class="form-label">Blog Title</label>
                    <input {...register("title", { required: true })} type="text" name="title" class="form-control" id="validationDefault01" required />
                    {errors.title && <span>This field is required</span>}
                </div>
                <div className="mb-3">
                    <label for="validationTextarea" className="form-label">Blog Details</label>
                    <textarea {...register("description", { required: true })} className="form-control is-invalid" name="description" id="validationTextarea" placeholder="Write here about your blog." required></textarea>
                    {errors.description && <span>This field is required</span>}

                </div>

                <div className="mb-3">
                    <label className="form-label">Blog Banner</label>
                    <input onChange={handleImageUpload} type="file" className="form-control" aria-label="file example" required />
                    <div className="invalid-feedback">Example invalid form file feedback</div>
                </div>

                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">Submit Review</button>
                </div>
            </form>

        </div>
    );
};

export default AddBlog;