import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
<div className="Footer-container">
    <div className="Footer-content">
        <h4>Company Info</h4>
        
        <Link>About Us</Link>
        <Link>Carrier</Link>
        <Link>We are hiring</Link>
        <Link>Blog</Link>
        
        
    </div>
    <div className="Footer-content">
        <h4>Legal</h4>
       
        <Link>About Us</Link>
        <Link>Carrier</Link>
        <Link>We are hiring</Link>
        <Link>Blog</Link>
        
        
    </div>
    <div className="Footer-content">
        <h4>Features</h4>
      
        <Link>Business Marketing</Link>
        <Link>User Analytic</Link>
        <Link>Live Chat</Link>
        <Link>Unlimited Support</Link>
        
        
    </div>
    <div className="Footer-content">
        <h4>Resources</h4>
      
        <Link>IOS & Andriod</Link>
        <Link>Watch a Demo</Link>
        <Link>Customers</Link>
        <Link>API</Link>
        
        
    </div>
    <div className="Footer-content">
        <h4>Get In Touch</h4>
       <form action="" method="post">
        <input className='input' type="text" placeholder='Your Email'/>
        <input className='submit-btn' type="button" value='Subscribe' />
       </form>
        
    </div>
  
</div>
<p>Made With Love By Finland All Right Reserved</p>
    </div>
  )
}

export default Footer