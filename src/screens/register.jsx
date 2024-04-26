import React from 'react';
import '../style.css';
import { FaCloudUploadAlt } from "react-icons/fa";


function RegisterScreen(props) {

    const submitForm = (e) => {
        e.preventDefault();
    }
    document.title = 'Ichat || Login Screen'

  return (
    <div id='register-screen'>
        <div className="register-wrapper">
            <h2>IChat </h2>
            <form action="" onSubmit={submitForm}>
                <input type='text' placeholder='Enter your Display Name'/>
                <input type='email' placeholder='Enter your email'/>
                <input type='password' placeholder='Enter your password'/>
                <label htmlFor='file'>
                <FaCloudUploadAlt />
                    <span>Choose your avatar</span>
                </label>

                
                <input type='submit' placeholder='Register'/>
            </form>
            <p>Already have an account ? <span>Login Now!</span></p>
        </div>
    </div>
  )
}

export default RegisterScreen;