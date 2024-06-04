import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram,  FaFacebookSquare, FaTwitter } from 'react-icons/fa'



const style = { margin: "0px 10px", color: "#528cf7"};

const FooterBanner = () => {
  return (
    <div className='Banner-container'>
        <div className="Banner">
            <div className="Banner-content">
            <h2>Problems trying to resolve <br /> 
the conflict between </h2>
<p>Problems trying to resolve  the conflict between the two major <br /> realms of Classical physics: </p>
  <span>$16.48</span> 
  <button>ADD YOUR TO ACTON</button>  
            </div>
              
        </div>
        <div className="Banner-social">
            <h4>Bandage</h4>
            <div>
                <Link> <FaInstagram style={style}/></Link>
                <Link><FaFacebookSquare style={style}/></Link>
                <Link><FaTwitter style={style}/></Link>
           


            </div>
        </div>
    </div>
  )
}

export default FooterBanner