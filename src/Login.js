import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () => {
        //do clever google login shit 

        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <h1>Login</h1>

            <div className="login__logo">
                <img src="" alt="BOT " />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login