import React, { useRef } from 'react'
import './formbox.css'

const FormBox = () => {

    const signin = useRef(null);
    const signup = useRef(null);
    
    let change = false;

    const voila = () => {

        if (change == true) {
            signin.current.style.transform = 'translateY(-150%)'
            signup.current.style.transform = 'translateY(0%)'
        }
        
        else {
            signin.current.style.transform = 'translateY(0%)'
            signup.current.style.transform = 'translateY(150%)'
        }

        if (change == false) { change = true }
        else { change = false }
    }

    return (
        <div className="s-container f-box">
            <div className="signin" ref={signin}>
                <form>
                    <div className="head">
                        <h1>Login</h1>
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="uname" aria-describedby="UsernameHelp" placeholder='Username' required />
                    </div>

                    <div class="mb-3">
                        <input type="password" class="form-control" id="passwd" placeholder='Password' required />
                    </div>

                    <div className="forget">
                        <a href="/">Forget Password?</a>
                    </div>

                    <div className="form-button">
                        <input type="submit" class="btn btn-primary" value="Sign in" />
                        <button className="btn btn-outline-secondary" onClick={voila}>Create Account</button>
                    </div>
                </form>
            </div>

            <div className="signup" ref={signup}>
                <form>
                    <div className="head">
                        <h1>Create Account</h1>
                    </div>

                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" placeholder='email@example.com' required />
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="uname" placeholder='New Username' required />
                    </div>

                    <div class="mb-3">
                        <input type="password" class="form-control" id="passwd" placeholder='Create Password' required />
                    </div>

                    <div class="mb-3">
                        <input type="password" class="form-control" id="cpasswd" placeholder='Confirm Password' required />
                    </div>

                    <div className="forget">

                    </div>

                    <div className="form-button">
                        <input type="submit" class="btn btn-primary" value="Sign up" />
                        <button className="btn btn-outline-secondary" onClick={voila}>Already Registered?</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormBox
