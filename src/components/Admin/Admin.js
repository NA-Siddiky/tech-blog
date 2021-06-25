import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ManageBlog from './ManageBlog';
import "./Admin.css"

const Admin = () => {
    return (
        <div className="container">
            <h3>Select an option from the list to Add, Manage and More.</h3>
            <div className="row">
                <div className="col-md-4 adminSidebar">
                    <Link to="/admin/manageBlog">Manage Blog</Link>
                </div>
                <div className="col-md-8">
                    <Route path="/admin/manageBlog">
                        <ManageBlog />
                    </Route>
                </div>
            </div>
        </div>
    );
};

export default Admin;
