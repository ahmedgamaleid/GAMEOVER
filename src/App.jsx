import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import Masterlayout from './Components/Masterlayout/Masterlayout';
import Home from './Components/Home/Home';
import All from './Components/All/All';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Pc from './Components/Pc/Pc';
import Browser from './Components/Browser/Browser';
import ReleaseDate from './Components/ReleaseDate/ReleaseDate';
import Popularity from './Components/Popularity/Popularity';
import Alphabetical from './Components/Alphabetical/Alphabetical';
import Relevance from './Components/Relevance/Relevance';
import Details from './Components/Details/Details';
import Racing from './Components/Racing/Racing';
import Sports from './Components/Sports/Sports';
import Social from './Components/Social/Social';
import Shooter from './Components/Shooter/Shooter';
import Openworld from './Components/Openworld/Openworld';
import Zombie from './Components/Zombie/Zombie';
import Fantasy from './Components/Fantasy/Fantasy';
import Actionrbg from './Components/Actionrbg/Actionrbg';
import Action from './Components/Action/Action';
import Flight from './Components/Flight/Flight';
import Battleroyle from './Components/Battleroyle/Battleroyle';
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import Protecteroute from './Components/Protectedroute/Protecteroute';


function App() {
  // let navigate=useNavigate()
  const [userdata, setuserdata] = useState(null)
  let saveUserdata=()=>{
  let encodedToken= localStorage.getItem('token')
  let decodedToken=jwtDecode(encodedToken)
    setuserdata(decodedToken)
  }
 useEffect(() => {
  if(localStorage.getItem('token')){
    saveUserdata()
  }
 }, [])
let logout=()=>{
  localStorage.removeItem('token')
  setuserdata(null)
  return <Navigate to='login'/>
}

let routes=createBrowserRouter([
  {path:'',element:<Masterlayout userdata={userdata} logout={logout}/>,children:[
    {index:true,element:<Protecteroute userdata={userdata}><Home/></Protecteroute>},
    {path:'all',element:<Protecteroute userdata={userdata}><All/></Protecteroute>},
    {path:'joinfree',element:<Register/>},
    {path:'login',element:<Login saveUserdata={saveUserdata}/>},
    {path:'details/:id',element:<Protecteroute userdata={userdata}><Details/></Protecteroute>},
    {path:'pc',element:<Protecteroute userdata={userdata}><Pc/></Protecteroute>},
    {path:'browser',element:<Protecteroute userdata={userdata}><Browser/></Protecteroute>},
    {path:'release-Date',element:<Protecteroute userdata={userdata}><ReleaseDate/></Protecteroute>},
    {path:'Popularuty',element:<Protecteroute userdata={userdata}><Popularity/></Protecteroute>},
    {path:'alphabetical',element:<Protecteroute userdata={userdata}><Alphabetical/></Protecteroute>},
    {path:'relevance',element:<Protecteroute userdata={userdata}><Relevance/></Protecteroute>},
    {path:'racing',element:<Protecteroute userdata={userdata}><Racing/></Protecteroute>},
    {path:'sports',element:<Protecteroute userdata={userdata}><Sports/></Protecteroute>},
    {path:'social',element:<Protecteroute userdata={userdata}><Social/></Protecteroute>},
    {path:'shooter',element:<Protecteroute userdata={userdata}><Shooter/></Protecteroute>},
    {path:'zombie',element:<Protecteroute userdata={userdata}><Zombie/></Protecteroute>},
    {path:'open-world',element:<Protecteroute userdata={userdata}><Openworld/></Protecteroute>},
    {path:'fantasy',element:<Protecteroute userdata={userdata}><Fantasy/></Protecteroute>},
    {path:'action-rpg',element:<Protecteroute userdata={userdata}><Actionrbg/></Protecteroute>},
    {path:'action',element:<Protecteroute userdata={userdata}><Action/></Protecteroute>},
    {path:'flight',element:<Protecteroute userdata={userdata}><Flight/></Protecteroute>},
    {path:'battle-royale',element:<Protecteroute userdata={userdata}><Battleroyle/></Protecteroute>},
    
  ]}
])
  return (
 <>
<RouterProvider router={routes}/>
 </>
  );
}

export default App;
