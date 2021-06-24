import React, { useContext } from 'react';
import "./Login.css";
import { FcGoogle } from 'react-icons/fc';
import firebase from 'firebase/app';
import 'firebase/auth';

import { infoContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../../firebase.config';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const { info, setInfo } = useContext(infoContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };


    const handleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                };
                setInfo(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.message);
            });
    };

    const handleSignOut = () => {
        console.log('Sign out clicked');
        firebase
            .auth()
            .signOut()
            .then((res) => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
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
        <div>
            <div className="d-flex flex-column align-items-center mt-5">

                <button onClick={handleSignIn} className="btn googleBtn">
                    <h4><FcGoogle /> Press google icon to Login</h4>
                </button>
            </div>
        </div>
    );
};

export default Login;