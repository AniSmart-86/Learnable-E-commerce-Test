import React from 'react'
import { useHomeDecorationProductsQuery } from '../ApiData/ApiData';
import './Feature.css'
import Icon1 from './Icons/sub-icons (1).png'
import Icon2 from './Icons/sub-icons (2).png'
import Icon3 from './Icons/sub-icons (3).png'
import { FaShoppingCart, FaHeart} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import { addToCart } from '../../Pages/CartSlice';
import { useNavigate } from 'react-router-dom';
 const style = { margin: "10px 0px", color: "#23A6F0"};



const Feature = () => {

    const {data, isError, isLoading} = useHomeDecorationProductsQuery(10);
  const dispatch = useDispatch();
   const navigate = useNavigate();


 const handleAddToCart = (item) =>{
dispatch(addToCart(item));
navigate("/cart");
 }
  
  return (
    <div className='feature-content'>
        <h4>Featured Products</h4>
      <h3>BESTSELLER PRODUCTS</h3>
      <p>Problems trying to resolve the conflict between </p>
      <div className="feature-wrapper">
      
        {data?.products.map((item,i) =>{
            return (
                <div className="img-container">
                <div>
             <Item key={i} id={item.id} title={item.title} image={item.images[0]} category={item.category} price={item.price}/>
           
           <div className="layer">
           <FaShoppingCart style={style} onClick={() =>handleAddToCart(item)}/>
           <Link> <FaHeart style={style}/></Link>
          
           </div>
            </div>
            
                </div>
               
            )
           
})}
  
  </div>
  
<button className='more-btn'>LOAD MORE PRODUCTS</button>


  <div className="sub-feature">
  <h4>Featured Products</h4>
      <h3>THE BEST SERVICES</h3>
      <p>Problems trying to resolve the conflict between </p>
  <div className="sub-content">
    <div className="sub-feature-content">
    <img src={Icon3} alt="Easy wins" />
    <h3>Easy Wins</h3>
    <p>Get your best looking smile now!</p>
    </div>
    <div className="sub-feature-content">
    <img src={Icon2} alt="concrete img" />
    <h3>Concrete</h3>
    <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
    </div>
    <div className="sub-feature-content">
    <img src={Icon1} alt="Growth img" />
    <h3>Hack Growth</h3>
    <p>Overcame any hurdle or any other problem.</p>
    </div>
    
  </div>
  
  </div>
    </div>
  )
  
}

export default Feature