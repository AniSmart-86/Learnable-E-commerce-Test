import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>

<h5>{props.title}</h5>
            <h6>{props.category}</h6>
            <div className="prices">
            <p>${props.price}</p>
            <span>$6.48</span>
        </div>
        </div>
  )
}

export default Item