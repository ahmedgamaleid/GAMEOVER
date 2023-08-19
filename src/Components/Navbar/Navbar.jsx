import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../imgs/logo.png'
import styles from './Navbar.module.scss'
export default function Navbar({userdata,logout}) {
  // let getLinkName=(e)=>{
  //   let clickedLink=e.target;
  //   let text=clickedLink.innerText
  //   console.log(text);
  // }
  return (
    <>
    
<nav className={`navbar navbar-expand-lg shadow ${styles.navlink}`}>
  <div className="container">
    <img src={img} alt="" className={styles.imgwidth}/>
    <a className={`navbar-brand ${styles.navcolor}`}  >Game Over</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {userdata? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`${styles.navcolor} nav-link `} aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`${styles.navcolor} nav-link `} to='all'>All</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${styles.navcolor}`}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Platform
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to='pc'>Pc</Link></li>
            <li><Link className="dropdown-item" to='browser'>browser</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${styles.navcolor}`}   id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          sort by
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link  className="dropdown-item" to='release-Date'>release-date</Link></li>
            <li><Link  className="dropdown-item" to='popularuty'>Popularuty</Link></li>
            <li><Link  className="dropdown-item" to='alphabetical'>alphabetical</Link></li>
            <li><Link  className="dropdown-item" to='relevance'>relevance</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${styles.navcolor}`}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to='racing'>racing</Link></li>
            <li><Link className="dropdown-item" to='sports'>sports</Link></li>
            <li><Link className="dropdown-item" to='social'>social</Link></li>
            <li><Link className="dropdown-item" to='shooter'>shooter</Link></li>
            <li><Link className="dropdown-item" to='zombie'>zombie</Link></li>
            <li><Link className="dropdown-item" to='open-world'>open-world</Link></li>
            <li><Link className="dropdown-item" to='fantasy'>fantasy</Link></li>
            <li><Link className="dropdown-item" to='action-rpg'>action-rbg</Link></li>
            <li><Link className="dropdown-item" to='action'>action</Link></li>
            <li><Link className="dropdown-item" to='flight'>flight</Link></li>
            <li><Link className="dropdown-item" to='battle-royale'>battle-royale</Link></li>
          </ul>
        </li>
      </ul>:''}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {userdata? <li className="nav-item">
          <Link className="btn btn-outline-info text-white nav-link  mx-1" to='login' onClick={logout}>log out</Link>
        </li>:<>
        <li className="nav-item">
          <Link className="btn  btn-outline-info text-white nav-link mx-1" to='login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-info text-white nav-link mx-1" to='joinfree'>join free</Link>
        </li>
        </>}
       
      
        
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}

