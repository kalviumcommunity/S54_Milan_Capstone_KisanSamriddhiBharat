import React from 'react';
import { FaGoogle,FaFacebook } from 'react-icons/fa';

const Login = ()=>{
      return(
        <div id="login-page">
          <div id='login-card'>
            <h2>welcome to uni-chat</h2>
            <div id='login-button google'>
               <FaGoogle/>login with google
            </div>
            <br/><br/>
            <div id='login-button facebook'>
               <FaFacebook/>login with facebook
            </div>
          </div>
        </div>

      );
}

export default Login