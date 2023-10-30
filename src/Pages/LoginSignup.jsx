import React from 'react'
import '../Pages/Style/LoginSignup.css'
import {signInWithGooglePopup} from '../firebase.util'
const LoginSignup = () => {
  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    console.log(response);
};
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Enter your name'/>
          <input  type='email' placeholder='Enter your Email'/>
          <input type='password' placeholder='Enter your password'/>
        </div>
        <button >Continue</button>
        <button onClick={logGoogleUser}>Sign-up with Google</button>
        <p className='loginsignup-login'> Already have account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

      </div>

    </div>
  )
}

export default LoginSignup