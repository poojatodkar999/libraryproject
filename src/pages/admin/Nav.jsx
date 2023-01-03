import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Images/logo.png"
const Nav = () => {
  return (
    <>
     <nav>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>

        <ul>
      <li>Home</li>
    <li>Add Book</li>
        </ul>
        <div className="loginreg">
            <a href=""  style={{textDecoration:"none"}}>
                <span style={{background: "rgb(0,37,80)",color:"rgb(249,198,35)"}} className='logout'>Logout</span></a>
                <><Link style={{textDecoration: "none", color:"#002550"}} to="login"><span>Login</span></Link>
            <Link style={{textDecoration: "none", color:"#002550"}} to="signup"><span>Register</span></Link></>
        </div>
    </nav>
    
    
    </>
  )
}

export default Nav