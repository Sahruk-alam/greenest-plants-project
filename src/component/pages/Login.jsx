// import React, { use, useRef, useState } from 'react';
// import { Link, Navigate, useLocation, useNavigate } from 'react-router';
// import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
//   const {signInUser, forgetPassword}=use(AuthContext)
//   const emailRef=useRef();
//   const location=useLocation();
//   // console.log(location);
//   const navigate=useNavigate()
//   const [error,setError]=useState('');
//     const handleLogin=(event)=>{
//         event.preventDefault();
//       const email=event.target.email.value;
//       const password=event.target.password.value;

//       if(password.length<6){
//         setError('Password must be at least 6 characters long.');
//         return;
//       }else{
//         setError('');
//       }
    //   signInUser(email,password)
    //   .then(result=>{
    //     // console.log(result.user);
    //     event.target.reset();
    //     navigate(location?.state || '/')
        
    //   })
    //   .catch((error)=>{
    //     const errorMessage = error.code;
    //     console.log(errorMessage);
    //     setError('Invalid email or password');
    // })
    // }
    // const handleForget=(e)=>{
    //   e.preventDefault();
    //   const email=emailRef.current.value;
    //   console.log("Email", email);
    //   forgetPassword(email)
    //   .then(() => {
    //     alert('Password reset email sent. Please check your inbox.');
    //   })
    //   .catch((error) => {
    //     console.error('Error sending password reset email:', error);
    //     alert('Failed to send password reset email. Please try again later.');
    //   });
    // }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card py-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className='font-bold text-2xl text-center'>Login Your Account</h2>
      <form  className="card-body">
        <fieldset className="fieldset"> 
          <label className="label font-bold">Email address</label>
          <input type="email"  name='email' required className="input" placeholder="Enter your Email" />
          <label className="label font-bold">Password</label>
          <input type="password" name='password' required className="input" placeholder="Enter your Password" />
          <div><a  className="link link-hover">Forgot password?</a></div>
          {/* {
            error && <p className='text-red-600 font-semibold'>{error}</p>
          } */}
          <button className="btn btn-neutral mt-4">Login</button>

          <p className='text-center font-semibold pt-3'>Don't have an account? 
             <a href='/signup' className="link text-blue-500">Register</a></p>
        </fieldset>
        
      </form>
    </div>
        </div>
    );
};

export default Login;