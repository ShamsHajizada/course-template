import React from 'react'
import {Link} from "react-router-dom"
import   "../Header/style.scss"



const Header = () => {
  return (
    <div className="header">
       <div className='container'>
    <div className="headerr">
      
      <div className="logo">
        <img className='logo-icon' src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
      <h3>COURSE</h3>
    </div>
    <div className="navbar">
      <ul >
       <li >
        <Link to={"/"} >HOME</Link>
       </li>
       <li>
        <Link to={"/about"} >ABOUT US</Link>
       </li>
       <li>
        <Link to={"/courses"} >COURSES</Link>
       </li>
       <li>
        <Link to={"/elements"} >ELEMENTS</Link>
       </li>
       <li>
        <Link to={"/news"} >NEWS</Link>
       </li>
       <li>
        <Link to={"/contact"} >CONTACT</Link>
       </li>
       
      </ul>
    </div>
    <div className="contact">
      <img className='cont-icon' src="https://preview.colorlib.com/theme/course/images/phone-call.svg" alt="" />
      <p>+43 4566 7788 2457</p>
    </div></div>
    
  </div></div>
   
  )
}

export default Header