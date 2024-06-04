import React from 'react'
import img1 from './img/img (1).png'
import img2 from './img/img (2).png'
import img3 from './img/img (3).png'
import img4 from './img/img (4).png'
import img5 from './img/img (5).png'
import img6 from './img/img (6).png'
import img7 from './img/img (7).png'
import img8 from './img/img (8).png'
import img9 from './img/img (9).png'
import user1 from './img/test1.png'
import user2 from './img/test2.png'
import user3 from './img/test3.png'
import user4 from './img/user-img.png'
import star1 from './img/icn bxs-star.png'
import star2 from './img/Vector.png'
import "./Review.css"

const Review = () => {
  return (
    <div className='reviewPage'>
<div className="right-section">
    <h1>What they say about us</h1>
    <div>
    <img src={user4} alt="" className='userImg' />
    </div>

   <img src={star1} alt="" />
   <img src={star1} alt="" />
   <img src={star1} alt="" />
   <img src={star1} alt="" />
   <img src={star2} alt="" />
  
   <p>late helps you see how many more days <br /> you need to work to reach your financial goal</p>
<h6>Regina Miles</h6>
<h5>Designer</h5>
</div>
<div className="left-section">
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    <img src={img4} alt="" />
    <img src={img5} alt="" />
    <img src={img6} alt="" />
    <img src={img7} alt="" />
    <img src={img8} alt="" />
    <img src={img9} alt="" />
   
</div>
    </div>
  )
}

export default Review