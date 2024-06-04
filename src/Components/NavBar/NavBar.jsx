import React from 'react'
import TopNavBar from '../TopNavBar/TopNavBar'
import './NavBar.css'

import { FaUser,
  FaSearch,
  FaShoppingCart,
  FaHeart
 } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

 const style = { margin: "0px 5px"};

function NavBar() {

  const {cartTotalQuantity} = useSelector(state => state.cart)
  return (
    <div>
       <TopNavBar/>
      <div className="NavBar">
        <Link to="/Home"><h1>Bandage</h1></Link>
        
        <ul>
          
          <li><Link to="/Home">Home</Link></li>
      
          <Link to="Shop"> <select name="" id="">
            <option value="">Shop</option>
            </select></Link>
           
          
          <li><Link to="About">About</Link></li>
          <li><Link to="Blog">Blog</Link></li>
          <li><Link to="Contact">Contact</Link></li>
          <li><Link to="Pages">Pages</Link></li>
        </ul>

        <div className="left-content">
<button className='login-btn'><FaUser style={style}/>Login / Register</button>
<div>
  <FaSearch/>
</div>
<div>
  <Link to="Cart"><FaShoppingCart/></Link>

<span className="count">{cartTotalQuantity}</span>
</div>
<div>
<FaHeart/>
<span className="count">0</span>
</div>
        </div>
      </div>
    </div>
    
  )
}

export default NavBar