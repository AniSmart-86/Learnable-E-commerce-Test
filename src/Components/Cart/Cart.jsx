import React from 'react'
import { useAllProductsQuery } from '../ApiData/ApiData';
import { FaShoppingCart, FaHeart, FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { addToCart, decreaseCart, getTotals, removeFromCart } from '../../Pages/CartSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowCircleLeft, FaTrash } from 'react-icons/fa';
import payicon1 from './Paystack - png.png'
import payicon2 from './Mastercard - png.png'
import payicon3 from './Visa Inc. - png.png'
import star1 from '../ReviewPage/img/icn bxs-star.png'
import star2 from '../ReviewPage/img/Vector.png'
import './Cart.css'
import { useEffect } from 'react';
import Footer from '../Footer/Footer';








 const style = { margin: "10px 10px", color: "#23A6F0"};

const Cart = () => {

  const {cartTotalQuantity} = useSelector(state => state.cart)

    const {data, isError, isLoading} = useAllProductsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) =>{
      dispatch(addToCart(item));
      navigate("/cart");
       }
       
       const cart = useSelector((state) => state.cart);

useEffect(() =>{
dispatch(getTotals())
}, [cart, dispatch]);



       const handleRemoveFromCart = (cartItem) =>{
        dispatch(removeFromCart(cartItem));
       }


       const handleDcreaseCart = (cartItem) =>{
        dispatch(decreaseCart(cartItem));
       }
       const handleIncreaseCart = (cartItem) =>{
        dispatch(addToCart(cartItem));
       }
  return (
    <div>
    <div className='shopping-content'>


  {cart.cartItems.length === 0 ? (
    <div className="cart-empty">
      <p>Your cart is currently empty</p>
      <div className="start-shopping">
        <Link to="/Home"><FaArrowCircleLeft/></Link><span>Start Shopping</span>
      </div>
    </div>
  ) : (<div className='cart-details'>
  <h2>Shopping Cart</h2>
  
 
  <div className="cart-wrapper">

    
  <div className="cart-items">

  <div className="titles">
    <h3 className="product-title">Item Details</h3>
    <h3 className="Quantity">Quantity</h3>
    <h3 className="price">Price</h3>
    
   
  </div>
    {cart.cartItems?.map(cartItem =>(
      <div className="cart-item" key={cartItem.id}>
<div className="cart-product">
  <div>
  <img src={cartItem.images[0]} alt="" />
  </div>
  

  <h3>{cartItem.title}</h3>
  <p>In Stock: {cartItem.stock}</p>
  <div className="stars">
  <img src={star1} alt="" />
<img src={star1} alt="" />
<img src={star1} alt="" />
<img src={star1} alt="" />
<img src={star1} alt="" />
<span>Review(23)</span>
  </div>


</div>


<div className="product-Quantity">
  <button onClick={() => handleDcreaseCart(cartItem)}>-</button>
  <div className="count">{cartItem.cartQuantity}</div>
  <button className='plus-btn' onClick={() => handleIncreaseCart(cartItem)}>+</button>
</div>

<div className="total-price">
  $ {cartItem.price*cartItem.cartQuantity}
  <p> $ {cartItem.price*cartItem.cartQuantity} x {cartItem.cartQuantity} Item</p>
</div>

<div className='delete' onClick={() => handleRemoveFromCart(cartItem)}>
<FaTrash/><span>Remove</span>
</div>

      </div>
      
    ))}
  </div>




  <div className="cart-summary">
  <div className="summary">
  <div className="cart-heading">
    <h3>Order Summary</h3>
    <p>{cartTotalQuantity} item(s)</p>
  </div>
  <hr />

  <div className="Delivery">
    <h5>Delivery Charges</h5>
    <p>Add your <br /> delivery 
      address  to <br /> checkout to 
      see delivery charges.</p>
  </div>
  <hr />

  <div className="sub-total">
    <h6>Subtotal</h6>
    <p>$ {cart.cartTotalAmount}</p>
  </div>
  <hr />

  <div className="sub-total">
    <h4>Total</h4>
    <p>$ {cart.cartTotalAmount}</p>
  </div>
  </div>
  <p>Excluding Delivery Charges</p>
  <button>Proceed to Checkout</button>
  <hr />
<img src={payicon1} alt="" />
<img src={payicon2} alt="" />
<img src={payicon3} alt="" />
</div>
</div>


  </div>)}







      <h3> PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
      <div className="feature-wrapper">
      
        {data?.products.slice(0, 15).map((item) =>{
            return (
                <div className="img-container"  onClick={() =>handleAddToCart(item)}>
                <div>
                <img  src={item.images[0]} alt="" key={item.id}/>
           <h5>{item.title}</h5>
            <h6>{item.review}</h6>
            <div className="prices">
            <p>${item.price}</p>
            <span>$6.48</span>
            </div>
           <div className="layer">
           <FaShoppingCart style={style}/>
          
           <Link> <FaHeart style={style}/></Link>
          
           </div>
            </div>
            
                </div>
               
            )
           
})}
  
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
  <Footer/>
  </div>
  )
  
}

export default Cart