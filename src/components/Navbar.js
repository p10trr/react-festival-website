import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook, AiOutlineClose } from "react-icons/ai";
import {BsSpotify} from 'react-icons/bs';
import { HiOutlineTicket } from "react-icons/hi";
import {FaBars} from 'react-icons/fa'


function Navbar() {

  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle)
  }
  return (
    <div className='nav-container'>
       <Link to='/' className='link-btn'><h2 className='logo'>SILK ROAD____ <br/> MUSIC FESTIVAL</h2></Link>
        <p className='date'>18 March 2023 <br/> Barbados</p>
        <button className='nav-toggle' onClick={toggleMenu}>{toggle ? <AiOutlineClose/> : <FaBars/>}</button>
        <nav className= {`${toggle ? 'links-container mobile-menu' : 'links-container'}`}>
          <Link to='/tickets' className='link-btn' onClick={()=>setToggle(false)}>Tickets</Link>
         <Link to='/lineup' className='link-btn' onClick={()=>setToggle(false)}>Lineup</Link>
         <Link to='/about' className='link-btn' onClick={()=>setToggle(false)}>About</Link>
         <Link to='/contact' className='link-btn' onClick={()=>setToggle(false)}>Contact</Link>
        </nav>
        <div className={`${toggle ? 'social mobile-menu-social' : 'social'}`}>
          <a href="#"> <FiInstagram className='icon'/></a>
          <a href="#"><AiFillFacebook className='icon'/></a>
          <a href="#"><BsSpotify className='icon'/></a>
          <Link to='/tickets' onClick={()=>setToggle(false)}><HiOutlineTicket className='icon'/></Link>
        </div>
    </div>
  )
}

export default Navbar