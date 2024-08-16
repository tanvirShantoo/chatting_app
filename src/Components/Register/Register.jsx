
import Lottie from "lottie-react";
import RegisterAnimation from '../../../public/Animation/Register.json'
import './Register.css'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { PulseLoader } from "react-spinners";


const Register = () => {

    const[name , setName]                                    = useState('')
    const[nameError , setNameError]                          = useState('')
    const[email , setemail]                                  = useState('')
    const[emailError , setemailError]                        = useState('')
    const[password , setPassword]                            = useState('')
    const[passwordError , setPasswordError]                  = useState('')
    const[show , setShow]                                    = useState(false)
    const navigate                                           =useNavigate()

    const auth = getAuth()
    const[loading , setLoading]     =useState(false)

const handelName =(e)=>{
    setName(e.target.value)
    setNameError('')
}


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
      if(!name){
        setNameError('Enter Your Name')
      }
      if(!email){
          setemailError('Enter Your Email')
      }
      if(!password){
        setPasswordError('Enter Your Password')
      }
      else{

       setLoading(true)
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
        setLoading(false)
        toast.success('Sign up complete!', {
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
            navigate('/')
  })
  .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false)
        console.log(errorCode)
        if(errorCode == 'auth/weak-password'){
            console.log('Please Select strong passwprd')
            toast.error('So weak password! Please use a strong password.', {
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
        if(errorCode == 'auth/email-already-in-use'){
            toast.error('User name already used!', {
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
     });
  }

      
  }

  const handelShow =()=>{
    setShow(!show)
    

  }



  return (
    <>
         <div className=" h-screen w-full flex justify-center gap-11 items-center">
        <div className="animation w-[600px]">
           
            <Lottie animationData={RegisterAnimation}/>
            
        </div>
        <div className="main-Regiform">
          <h1 className='log_head'>Sign Up</h1>

         <form onSubmit={handelSubmit}>

            <label>User Name</label>
            <br />
            <input onChange={handelName} placeholder='Enter your Name' type="text" />
            <br />
            <p className='error'>{nameError}</p>

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
            
              {
                loading?
                <div className='loginButton'>
              <PulseLoader color="#FFF" size='10px' />
              </div>
              :
              <button type='submit' className='loginButton'>Sign up</button>

              }
        
            <h4 className='pt-1'>Have an account! <Link to='/' className='text-[#FF9100] text-md font-poppins font-semibold'>Log In</Link></h4>
          </form>
        </div>

    </div>
    
    
    
    </>
  )
}

export default Register