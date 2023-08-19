import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protecteroute({userdata,children}) {
if(userdata==null&localStorage.getItem('token')==null){
    return <Navigate to='/login'/>
}else{
    return children
}
}
