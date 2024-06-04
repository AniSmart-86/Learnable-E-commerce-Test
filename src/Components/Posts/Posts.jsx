import React from 'react'

import './Posts.css'
import img1 from './img/New-img (1).png'
import img2 from './img/New-img (2).png'
import img3 from './img/New-img (3).png'
import AlarmIcon from './img/alarm.png'
import ChartIcon from './img/chart-icon.png'
import NextIcon from './img/next-arrow-icon.png'
import { Link } from 'react-router-dom'


const postData = [
    {
        id: 1,
        img: img3,
        title: 'Loudest à la Madison #1 (L integral)',
        text: 'We focus on ergonomics and meeting you where you work. Its only a keystroke away.'
    },
    {
        id: 1,
        img: img2,
        title: 'Loudest à la Madison #1 (L integral)',
        text: 'We focus on ergonomics and meeting you where you work. Its only a keystroke away.'
    },
    {
        id: 1,
        img: img1,
        title: 'Loudest à la Madison #1 (L integral)',
        text: 'We focus on ergonomics and meeting you where you work. Its only a keystroke away.'
    },
];



function Posts() {

    
  
  return (
    <div className='post-container'>
        <h3>Featured Posts</h3>
        <div className="wrapper">
        {
        postData.map((item) =>{
            return (
<div className="post-content" key={item.id}>
    <span>NEW</span>
<img className='post-img' src={item.img} alt="" />
<div className="heading">
    <Link>Google</Link>
    <Link>Trending</Link>
    <Link>New</Link>
</div>
<h5>{item.title}</h5>
<p>{item.text}</p>
<div className="review">
    <div>
        <img src={AlarmIcon} alt="" />
        <p>22 April 2021</p>
    </div>
    <div>
        <img src={ChartIcon} alt="" />
        <p>10 comments</p>
    </div>
</div>
<div className="learnMore">
    <Link>Learn More</Link>
    <img src={NextIcon} alt="" />
</div>
                </div>
            )
            })
        }
        </div>
    </div>
  )
  
}

export default Posts