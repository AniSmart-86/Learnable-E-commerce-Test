import React from 'react'
import './Shopping.css'
import { Link } from 'react-router-dom'
import img1 from './brand-img/card-item.png'

const ShoppingReview = () => {
  return (
    <div className='shoppingReview'>
<div className="layer-nav">
    <Link>Description</Link>
    <Link>Additional Information</Link>
    <Link>Reviews(0)</Link>
</div>
<div className='review-Page'>
<div className="review-section">
    <h1>The quick fox jumps over </h1>
    <div className="text-review">
        <div>
   <p>Met minim Mollie non desert Alamo est sit cliquey 
    dolor do met sent. RELIT official consequent door 
    ENIM RELIT Mollie. Excitation venial consequent sent 
    nostrum met. <br /> <br /> Met minim Mollie non
     desert Alamo est sit cliquey dolor do met sent. 
     RELIT official consequent door ENIM RELIT Mollie.
      Excitation venial consequent sent nostrum met.
       <br /> <br />Met minim Mollie non desert Alamo 
       est sit cliquey dolor do met sent. RELIT official 
       consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met. </p>
   <p>Met minim Mollie non desert Alamo est sit cliquey 
    dolor do met sent. RELIT official consequent door 
    ENIM RELIT Mollie. Excitation venial consequent sent 
    nostrum met. <br /> <br /> Met minim Mollie non
     desert Alamo est sit cliquey dolor do met sent. 
     RELIT official consequent door ENIM RELIT Mollie.
      Excitation venial consequent sent nostrum met.
       <br /> <br />Met minim Mollie non desert Alamo 
       est sit cliquey dolor do met sent. RELIT official 
       consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met. </p>
   <p>Met minim Mollie non desert Alamo est sit cliquey 
    dolor do met sent. RELIT official consequent door 
    ENIM RELIT Mollie. Excitation venial consequent sent 
    nostrum met. <br /> <br /> Met minim Mollie non
     desert Alamo est sit cliquey dolor do met sent. 
     RELIT official consequent door ENIM RELIT Mollie.
      Excitation venial consequent sent nostrum met.
       <br /> <br />Met minim Mollie non desert Alamo 
       est sit cliquey dolor do met sent. RELIT official 
       consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met. </p>
        </div>
        </div>
</div>
<div className="left-section">
    <img src={img1} alt="" />

   
</div>
    </div>
    </div>
  )
}

export default ShoppingReview