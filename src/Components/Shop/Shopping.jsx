import React from 'react'
import { useHomeDecorationProductsQuery } from '../ApiData/ApiData';
import './Shopping.css'
import { FaShoppingCart, FaHeart, FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import brand1 from './brand-img/brand-img (1).png'
import brand2 from './brand-img/brand-img (2).png'
import brand3 from './brand-img/brand-img (3).png'
import brand4 from './brand-img/brand-img (4).png'
import brand5 from './brand-img/brand-img (5).png'
import brand6 from './brand-img/brand-img (6).png'
import { addToCart } from '../../Pages/CartSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';




 const style = { margin: "10px 10px", color: "#23A6F0"};

const Shopping = () => {

    const {data, isError, isLoading} = useHomeDecorationProductsQuery(10);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) =>{
      dispatch(addToCart(item));
      navigate("/cart");
       }
   
   
 
  
  return (
    <div className='shopping-content'>
      <h3>BESTSELLER PRODUCTS</h3>
      <div className="feature-wrapper">
      
        {data?.products.map((item) =>{
            return (
                <div className="img-container">
                <div>
                <img  src={item.images[0]} alt="" key={item.id}/>
           <h5>{item.title}</h5>
            <h6>{item.review}</h6>
            <div className="prices">
            <p>${item.price}</p>
            <span>$6.48</span>
            </div>
           <div className="layer">
           <FaShoppingCart style={style} onClick={() =>handleAddToCart(item)}/>
           <Link> <FaHeart style={style}/></Link>
          
           </div>
            </div>
            
                </div>
               
            )
           
})}
  
  </div>

  <div className="brand">
    <img src={brand6} alt="" />
    <img src={brand5} alt="" />
    <img src={brand4} alt="" />
    <img src={brand3} alt="" />
    <img src={brand2} alt="" />
    <img src={brand1} alt="" />
    
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

export default Shopping