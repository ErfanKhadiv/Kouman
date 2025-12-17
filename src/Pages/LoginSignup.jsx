import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className='form-box'>
                <h2>Login</h2>
                <div className="input-boxes">
                    <div>
                        <label htmlFor="username">Username </label>
                        <input id='username' type="text" />
                    </div>
                    
                    <div>
                        <label htmlFor="username">Password </label>
                        <input id='password' type="password" />
                    </div>
                </div>
                <p className='register'>Don't have an account? <span>Register Here</span> </p>
                <div className='agree'>
                    <input type="checkbox"/>
                    <p>Agree to our terms of use and policy <span>Terms Of Use</span></p>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}
