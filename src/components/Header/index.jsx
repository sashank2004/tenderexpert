import React, { useState } from 'react'
import './style.css';
import logo from '/assets/b2glogo.jpeg'
import { Link } from 'react-router-dom'
import {FaBars } from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";


const Header = () => {
  const [isNavShowing,setIsNavShowing]=useState(window.innerWidth>800?true:false);
  const closeNavHandler=()=>{
    if(window.innerWidth<800){
      setIsNavShowing(false);
    }
    else{
      setIsNavShowing(true)
    }
  }
  return (
    <nav2>
      <div className='container1 nav__container'>
        <Link to="/" className='nav__logo' onClick={closeNavHandler}>
         <img className='img1' src={logo} alt="Navbar Logo"/>
        </Link>
        {isNavShowing&&<ul className='nav__menu'>
          <li><Link to="/" onClick={closeNavHandler}>Home</Link></li>
          <li><Link to="/blogs" onClick={closeNavHandler}>Blogs</Link></li>
         
        </ul>}
        <button className='nav__toggle-btn' onClick={()=>{
          setIsNavShowing(!isNavShowing)
        }}>
        {isNavShowing?<AiOutlineClose/>:<FaBars/>}
        </button>
      </div>
    </nav2>
  )
}

export default Header