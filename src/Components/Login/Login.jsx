import React, { useState } from 'react'
import Lottie from "lottie-react";
import loginanimation from '../../../public/Animation/loginAnimi.json'
import './login.css'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Login = () => {
      

  const[email , setemail]                                  = useState('')
  const[emailError , setemailError]                        = useState('')
  const[password , setPassword]                            = useState('')
  const[passwordError , setPasswordError]                  = useState('')
  const[show , setShow]                                    = useState(false)


  const handelEmail = (e)=>{
        setemail(e.target.value)
        setemailError('')
  }

  const handelPassword = (e)=>{
    setPassword(e.target.value)
    setPasswordError('')
}


  const handelSubmit = (e)=>{
      e.preventDefault()
      if(!email){
          setemailError('Enter Your Email')
      }
      if(!password){
        setPasswordError('Enter your password')
      }
      else{

        toast.success('Log in successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }

      
  }

  const handelShow =()=>{
    setShow(!show)
    

  }

  return (


    <div className=" h-screen w-full flex justify-center gap-11 items-center">
        <div className="animation w-[600px]">
           
            <Lottie animationData={loginanimation}/>
            
        </div>
        <div className="main-form">
          <h1 className='log_head'>Log In</h1>
          <form onSubmit={handelSubmit}>
            <label>E-mail</label>
            <br />
            <input onChange={handelEmail} placeholder='Enter your email' type="text" />
            <br />
            <p className='error'>{emailError}</p>
            
            <label>Password</label>
            <br />
            <div className='passDiv'>
              {
                show?

                <IoEye onClick={handelShow} className='eyeicon' />
                :
                <IoEyeOff onClick={handelShow} className='eyeicon' />

              }
             
                           
              <input onChange={handelPassword} placeholder='Enter your password' type={show? 'text' :'password'} />
            </div>
            <p className='error'>{passwordError}</p>

            <button type='submit' className='loginButton'>Log In</button>

            


            <h4 className='pt-1'>Don't have an account? <Link to='/register' className='text-[#3795BD] text-md font-poppins font-semibold'>Sign Up</Link></h4>
          </form>
        </div>

    </div>
    
    
    
   
  )
}

export default Login
