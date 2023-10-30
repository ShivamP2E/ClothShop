import React from 'react'
import '../Pages/Style/LoginSignup.css'
import {signInWithGooglePopup} from '../firebase.util'
import { createUserDocumentFromAuth } from '../firebase.util'



const LoginSignup = () => {
  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
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
        <button className='bt-2' onClick={logGoogleUser}><img style={{width:'30px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png?20230822192911" alt="" srcset="" /></button>
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