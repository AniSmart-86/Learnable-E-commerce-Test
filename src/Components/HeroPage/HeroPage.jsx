import React from 'react'
import bg1 from './Hero-img/bg.png'
import bg2 from './Hero-img/media bg-cover (2).png'
import bg3 from './Hero-img/media bg-cover (3).png'
import bg4 from './Hero-img/media bg-cover.png'


const HeroPage = () => {
  return (
    <div  className='HeroPage'>
     <div className="right-img">
      <div className="tag1">
      <h2>Furniture</h2>
      <p>Read More</p>
      </div>
      
      <img src={bg1} alt="" />
     </div>

     <div className="left-img">
      <div className="tag2">
      <h2>Furniture</h2>
      <p>Read More</p>
      </div>
     <img src={bg4} alt="" />

      <div className="sub-img">
      <div className="sub-img1">

        <div className="tag3">
        <h2>Furniture</h2>
      <p>Read More</p>
        </div>
    <img src={bg2} alt="" />
      </div>

      <div className="sub-img2">
        <div className="tag4">
        <h2>Furniture</h2>
      <p>Read More</p>
        </div>
      <img src={bg3} alt="" />
      </div>
      </div>
      

     </div>
    </div>
  )
}

export default HeroPage