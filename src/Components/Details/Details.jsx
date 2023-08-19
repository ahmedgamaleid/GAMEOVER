import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
let image1;
let image2;
let image3;
let graphics;
let memory;
let os;
let processor;
let storage;
export default function Details() {
    let parms=useParams()
    // console.log(parms);
    let[gameDetails,setGameDetails] =useState([])
    useEffect(() => {
      Details()
    }, [])
    let Details=async()=>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id: `${parms.id}`},
            headers: {
              'X-RapidAPI-Key': '3db15bfa4cmshd52830e7c24571bp18870djsne4d7db060157',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
          };

        await axios.request(options).then(function (response) {
              // console.log(response.data);
              setGameDetails(response.data)
              image1=response.data.screenshots[0].image
              image2=response.data.screenshots[1].image
              image3=response.data.screenshots[2].image
              graphics=response.data.minimum_system_requirements.graphics
              memory=response.data.minimum_system_requirements.memory
              os=response.data.minimum_system_requirements.os
              processor=response.data.minimum_system_requirements.processor
              storage=response.data.minimum_system_requirements.storage
          }).catch(function (error) {
              console.error(error);
          });
    }
      
  return (
    <>
    <div className="details ">
    <div className="row mt-5">
       <div className="col-md-3 mb-3">
      <div className='rounded-3 shadow'>
      <img src={gameDetails.thumbnail} alt="" className='w-100 rounded-3'/>
        <div className="d-flex justify-content-between align-items-center flex-wrap py-3">
            <span className='btn btn-info text-white'>Free</span>
            <a href={gameDetails.freetogame_profile_url} target='-blank' className='btn btn-info text-white' >Play Now</a>
        </div>
      </div>
       </div>
       <div className="col-md-9  px-2">
        <h2>{gameDetails.title}</h2>
        <p className='fw-bolder'>About {gameDetails.title}</p>
        <p>{gameDetails.description}</p>
        <h4>Minimum System Requirements</h4>
<div className="px-2">
    <p className='fw-bold'>graphics :{graphics}</p>
    <p className='fw-bold'>memory :{memory}</p>
    <p className='fw-bold'>os :{os}</p>
    <p className='fw-bold'>processor: {processor}</p>
    <p className='fw-bold'>storage: {storage}</p>
</div>
<h4>{gameDetails.title} Screenshots</h4>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="" />
    </div>
  </div>
</div>
<h2>Additional Information</h2>
       </div>
    
    </div>
<div className="row  ">
        <div className="col-md-3"></div>
        <div className="col-md-9">
            <div className="row">
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Title</p>
            <p className='mt-0 pt-0'>{gameDetails.title}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Developer</p>
            <p className='mt-0 pt-0'>{gameDetails.developer}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Publisher</p>
            <p className='mt-0 pt-0'>{gameDetails.publisher}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Release Date</p>
            <p className='mt-0 pt-0'>{gameDetails.release_date}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Genre</p>
            <p className='mt-0 pt-0'>{gameDetails.genre}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Platform</p>
            <p className='mt-0 pt-0'>{gameDetails.platform}</p>
        </div>
        </div>
        </div>
    </div>
</div>

    </div>
    </>
  )
}
