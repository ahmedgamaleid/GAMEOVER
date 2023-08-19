
import React, { useState } from 'react';
import img from '../../imgs/gaming.ebaf2ffc84f4451d.jpg'
import styles from './Login.module.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import joi from 'joi';
export default function Login({saveUserdata}) {
  let [errorMsg,seterrorMsg]=useState('')
  let [errorList,seterrorList]=useState([])
  let navigate=useNavigate()
  let [user,setuser]=useState({
    'email':'',
    'password':'',
})
let getInputvalue=(e)=>{
  let myuser={...user}
  myuser[e.target.name]=e.target.value
   setuser(myuser)
   console.log(myuser);
 }
 let submitData= async(e)=>{
  e.preventDefault()
  let validateResponse=validateData()
  console.log(validateResponse);
  if(validateResponse.error){
    seterrorList(validateResponse.error.details)
  }else{
    let {data}=await axios.post('https://route-egypt-api.herokuapp.com/signin',user)
    console.log(data);
    if(data.message==='success'){
      localStorage.setItem('token',data.token)
      saveUserdata()
     goToHome()
    }else{
     seterrorMsg(data.message)
    }
  }
}

  let goToHome=()=>{
    navigate('/')
  }
  let goToRegister=()=>{
    navigate('/joinfree')
  }
  let forgetpass=()=>{
    alert('هههه اعمل اكونت غيره')
  }
  let validateData=()=>{
    const schema=joi.object({
      email:joi.string().required().email({tlds:{allow:['com','net']}}),
      password:joi.string().min(6).max(15).required().pattern(new RegExp(/([a-z]|[A-Z])/))
    })
    return schema.validate(user,{abortEarly:false})
  }
  return (
    <>
     <div className="row my-5 py-5 justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="img">
          <img src={img} alt="" className='w-100'/>
        </div>
      </div>
      <div className="col-md-6">
        <form onSubmit={submitData} className={`${styles.formcolor} text-center p-2 rounded-2`} >
      <h2>Login Form</h2>
      {errorList?errorList.map((error,index)=>
      <div key={index} className="alert alert-danger p-0">{error.message}</div>
      ):''}
      {errorMsg?<div className='alert alert-danger '>{errorMsg}</div>:''}
      <input onChange={getInputvalue} type="email" placeholder='Email Adress' name='email' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      <input onChange={getInputvalue} type="password" placeholder='password' name='password' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      <button  className={`btn w-100 mb-2 text-center text-white fs-5 ${styles.inputbg}`}>Login</button>
        <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
        <hr />
        <a onClick={forgetpass} className='text-danger mb-1 d-block'>Forget Password</a>
        <p className=''>Not a member yet ? <a onClick={()=>goToRegister()} >Create Account</a></p>
        </form>
      </div>
    </div>
    
    </>
  )
}
