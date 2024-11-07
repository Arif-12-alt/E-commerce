import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Navbar = ({search,setSearch,searchproduct}) => {
  const { loginWithRedirect,logout,user, isAuthenticated } = useAuth0();
  return (
    <div className='header'>
      <div className='top-header'>
        <div className='icon'>
            <MdLocalShipping />
        </div>
        <div className='info'>
            <p> Free Shipping when Shoppping upto $1000</p>
        </div>
      </div>
      <div className='mid-header'>
        <div className='logo'>
          <img src='image/logo.webp' alt='Logo'/>
        </div>
        <div className='search-box'>
          <input type='text' value={search} placeholder='Search...' onChange={(e)=>setSearch(e.target.value)}/>
          <button onClick={searchproduct}><FaSearch /></button>
        </div>
        {
          isAuthenticated ?
          <div className='user'>
          <div className='icon'>
          <MdLogout />
          </div>
          <div className='btn'>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
          </div>
        </div> 
        :
        <div className='user'>
          <div className='icon'>
          <MdOutlineLogin />
          </div>
          <div className='btn'>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </div>
        </div>
        }
      </div>
      <div className='last-header'>
        <div className='user-profile'>
          {
            isAuthenticated ? 
            <>
            <div className='icon'>
            <FaUser />
            </div>
            <div className='info'>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            </div>   
            </>
            :
            <>
             <div className='icon'>
            <FaUser />
            </div>
            <div className='info' style={{marginTop:"10px"}}>
              <p>Please Login</p>
            </div>
            </>
          }
        </div>
        <div className='navbar'>
          <ul>
            <li><Link to='/' className='link'>Home</Link></li>
            <li><Link to='/shop' className='link'>Shop</Link></li>
            <li><Link to='/cart' className='link'>Cart</Link></li>
            <li><Link to='/contact' className='link'>Contact</Link></li>
          </ul>
        </div>
        <div className='offer'>
          <p>Flat 10% over all iphone</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
