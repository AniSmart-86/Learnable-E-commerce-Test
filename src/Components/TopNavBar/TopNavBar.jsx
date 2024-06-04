import React from 'react'
import { FaPhone, FaEnvelope, FaInstagram, FaYoutubeSquare, FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import './TopNavBar.css'
import { Link } from 'react-router-dom';


const style = { margin: "0px 10px", color: "#fff"};

function TopNavBar() {

  
  return (
    <div className='TopNavBar'>
<div className="right-content">
<FaPhone/>
<Link><h6>(225) 555-0118</h6></Link>


<FaEnvelope/>
<Link><h6>michelle.rivera@example.com</h6></Link>

</div>

<div className="center-content">
  <h6>Follow Us  and get a chance to win 80% off</h6>
</div>
<div className="left-content">
<h6>Follow Us  :</h6>
<Link><FaInstagram style={style}/></Link>
<Link><FaYoutubeSquare style={style}/></Link>
<Link><FaFacebookSquare style={style}/></Link>
<Link><FaTwitter style={style}/></Link>
</div>
    </div>
  )
}

export default TopNavBar