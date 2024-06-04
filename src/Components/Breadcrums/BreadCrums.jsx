import React from 'react'
import arrow from '../Posts/img/next-arrow-icon.png'
const BreadCrums = (props) => {
    const{product} = props;
  return (
    <div className='BreadCrums'>
        HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.title} <img src={arrow} alt="" /> {product.description}
    </div>
  )
}

export default BreadCrums