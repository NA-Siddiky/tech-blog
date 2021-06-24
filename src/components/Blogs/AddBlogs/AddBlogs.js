import React from 'react';

const AddBlogs = () => {
    return (
        <div className="container">
            <h1 className="d-flex justify-content-center">Make your Own Blog</h1>


            <form className="was-validated">

                <div class="mb-3">
                    <label for="validationDefault01" class="form-label">Blog Title</label>
                    <input type="text" class="form-control" id="validationDefault01" required />
                </div>
                <div className="mb-3">
                    <label for="validationTextarea" className="form-label">Blog Details</label>
                    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Write here about your blog." required></textarea>
                    <div className="invalid-feedback">
                        Please enter details description about your blog.
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Blog Banner</label>
                    <input type="file" className="form-control" aria-label="file example" required />
                    <div className="invalid-feedback">Example invalid form file feedback</div>
                </div>

                <div className="mb-3">
                    <button className="btn btn-primary" type="submit" disabled>Submit Review</button>
                </div>
            </form>

        </div>
    );
};

export default AddBlogs;