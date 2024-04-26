import React from 'react';
import '../style.css';

function LoginScreen(props) {

    const submitForm = (e) => {
        e.preventDefault();
    }
    document.title = 'Ichat || Login Screen'

  return (
    <div id='login-screen'>
        <div className="login-wrapper">
            <h2>IChat </h2>
            <form action="" onSubmit={submitForm}>
                <input type='text' placeholder='Enter your email'/>
                <input type='password' placeholder='Enter your password'/>
                <input type='submit'/>
            </form>
            <p>Don't have an account ? <span>Register Now!</span></p>
        </div>
    </div>
  )
}

export default LoginScreen;