import React from 'react'
import TopNavBar from '../TopNavBar/TopNavBar'
import './NavBar.css'

import { FaUser,
  FaSearch,
  FaShoppingCart,
  FaHeart
 } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import menuIcon from './menu.png'
import { useState } from 'react'

 const style = { margin: "0px 5px"};

function NavBar() {

  const {cartTotalQuantity} = useSelector(state => state.cart)

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
       <TopNavBar/>
      <div className="NavBar">
        <NavLink to="/Home"><h1>Bandage</h1></NavLink>
        <img className='menu-icon' src={menuIcon} alt="" onClick={() =>{
          setMenuOpen(!menuOpen);
        }}/>

<nav>
<ul className={menuOpen ? "open" : "hidden"}>
         
          <li><NavLink to="/">Home</NavLink></li>
      
      <NavLink to="Shop"> <select name="" id="">
        <option value="">Shop</option>
        </select></NavLink>
       
      
      <li><NavLink to="/">About</NavLink></li>
      <li><NavLink to="/">Blog</NavLink></li>
      <li><NavLink to="/">Contact</NavLink></li>
      <li><NavLink to="/">Pages</NavLink></li>
        

          <div className="left-content">
            
          <button className='login-btn'><FaUser style={style}/>Login / Register</button>
<div>
  <FaSearch/>
</div>
<div>
  <NavLink to="Cart"><FaShoppingCart/></NavLink>

<span className="count">{cartTotalQuantity}</span>
</div>
<div>
<FaHeart/>
<span className="count">1</span>
</div>
            </div>       

         
        </ul>
        </nav>
 
      
    
       
      </div>
    </div>
    
  )
}

export default NavBar