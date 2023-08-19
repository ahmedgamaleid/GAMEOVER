import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


export default function Masterlayout({userdata,logout}) {
  return (
   <>
   <Navbar userdata={userdata} logout={logout}/>
   <div className="container">
   <Outlet></Outlet>
   </div>
   
   </>
  )
}
