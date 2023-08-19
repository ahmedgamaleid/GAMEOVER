import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Zombie.module.scss'
import { Link } from 'react-router-dom';

export default function Racing() {
  let [getgames,setgetGames] =useState([])
  useEffect(() => {
    getGames()
  }, [])
  
  let getGames=()=>{
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {category: 'zombie'},
    headers: {
      'X-RapidAPI-Key': '3db15bfa4cmshd52830e7c24571bp18870djsne4d7db060157',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    setgetGames(response.data)
    
  }).catch(function (error) {
    console.error(error);
  });
}
  return (
    <>
     {getgames.length>0? <div className="row my-1 py-2 g-4">
        {getgames.slice(0,20).map((game,index)=>
          <div className="col-md-3 overflow-hidden" key={index}>
      <Link to={`/details/${getgames[index].id}`} className='nav-link'>
      <div className={`${styles.box} shadow rounded-2`}>
        <img src={getgames[index].thumbnail} alt="" className='w-100'/>
        <div className="d-flex justify-content-between align-items-center p-2">
        <h3 className='fs-6 my-0'>{getgames[index].title}</h3>
        <span className='btn btn-info text-white'>Free</span>
        </div>
        <p className='   mb-2 p-2 pb-1'>{getgames[index].short_description.split(' ').splice(0,5).join(' ')}...</p>
        <div className="d-flex flex-wrap  justify-content-between align-items-center p-2 mb-2">
        <span className={`rounded-3 p-1 ${styles.spanbg}`}><i className="fa-solid fa-plus"></i></span>
        <div>
          <span className={`p-1 mx-1 rounded-3 ${styles.spanbg}`}>{getgames[index].genre}</span>
          <span className={`p-1 rounded-3 ${styles.spanbg}`}>{getgames[index].platform}</span>
        </div>
        </div>
          </div>
      </Link>
        </div>
        )}
      </div>:<div className='vh-100 d-flex justify-content-center align-items-center'>
      <span className={styles.loader}></span>
        </div>}
    
    </>
  )
}