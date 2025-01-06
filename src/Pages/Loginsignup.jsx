import React from "react";
import './CSS/Loginsignup.css'
const Loginsignup = () => {
  return (
    <div className="Loginsignup">
        <div className="Loginsignup-container">
            <h1>Sign in</h1>
            <div className="Loginsignup-fields">
                <input type="text" placeholder="your name" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />                                                     
            </div>
            <button>Continue</button>
            <p className="Loginsignup-login">Already have an account?<span>Login here</span></p>
            <div className="Loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, I agree to terms of use & privacy policy.</p>
            </div> 
        </div>
    </div>
  );
}
export default Loginsignup;

