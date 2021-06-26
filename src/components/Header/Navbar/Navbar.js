import React, { useContext } from 'react';
import { infoContext } from '../../../App';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import firebase from 'firebase/app';
import 'firebase/auth';


const Navbar = () => {
    const { info, setInfo } = useContext(infoContext);
    const { isSignedIn, name } = info;

    const handleSignOut = () => {
        // console.log('Sign out clicked');
        firebase
            .auth()
            .signOut()
            .then((res) => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                };
                setInfo(signedOutUser);
                // console.log(res);
            })
            .catch((error) => {
                console.log('Error:', error);
                console.log('Error Message:', error.message);
            });
    };


    return (

        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link" to="/addBlog">Add Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/admin">Admin</Link>
                            </li>

                            {isSignedIn ? (
                                <>
                                    <li className="nav-item">
                                        <button className="btn btn-primary" onClick={handleSignOut}>
                                            <>{name} <FaLongArrowAltRight /></>
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            )}



                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;