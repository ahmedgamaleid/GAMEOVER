import React, { useState } from 'react'
import img from '../../imgs/gaming.ebaf2ffc84f4451d.jpg'
import styles from './Register.module.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import joi from 'joi';
export default function Register() {
  let [errorMsg,seterrorMsg]=useState('')
  let [errorList,seterrorList]=useState([])
  let navigate=useNavigate()
  let [user,setuser]=useState({
    'first_name':'',
    'last_name':'',
    'email':'',
    'age':'',
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
    let validateresponse=validateData()
    console.log(validateresponse);
    if(validateresponse.error){
      seterrorList(validateresponse.error.details)
    }else{
      let {data}=await axios.post('https://route-egypt-api.herokuapp.com/signup',user)
      console.log(data);
        if(data.message==='success'){
          goToLogin()
        }else{
          seterrorMsg(data.message)
        }
    }
    }
  let goToLogin=()=>{
    navigate('/login')
  }
  let validateData=()=>{
    const schema=joi.object({
      first_name:joi.string().alphanum().required().min(2).max(10),
      last_name:joi.string().alphanum().required().min(2).max(10),
      email:joi.string().required().email({tlds:{allow:['com','net']}}),
      age:joi.number().min(16).max(100).required(),
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
      <h2>Create My Account!</h2>
      {errorList?errorList.map((error,index)=>
      <div key={index} className="alert alert-danger p-0">{error.message}</div>
      ):''}
      {errorMsg?<div className='alert alert-danger '>{errorMsg}</div>:''}
      <input onChange={getInputvalue} type="text" placeholder='First Name' name='first_name' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      <input onChange={getInputvalue} type="text" placeholder='Last Name' name='last_name' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      <input onChange={getInputvalue} type="email" placeholder='Email Adress' name='email' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      <input onChange={getInputvalue} type="number" placeholder='Age' name='age' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      <input onChange={getInputvalue} type="password" placeholder='password' name='password' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      <button  className={`btn w-100 mb-2 text-center text-white fs-5 ${styles.inputbg}`}>Create Account</button>
        <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
        <hr />
        <p className=''>Already a member? <a onClick={()=>goToLogin()}>login</a></p>
        </form>
      </div>
    </div>
    </>
  )
}
