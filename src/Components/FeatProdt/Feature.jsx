import React, { useState, useEffect } from 'react'
import { useAllProductsQuery, usePaginateProductsQuery } from '../ApiData/ApiData'
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
import Button from './Button'







 const style = { margin: "10px 0px", color: "#23A6F0"};

const Feature = () => {

  const { data, isLoading: isLoadingDatas } = useAllProductsQuery();
  const { data: paginateData, isLoading: isLoadingData } =
    usePaginateProductsQuery();

    const dispatch = useDispatch();
    const navigate = useNavigate();
 
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    if (!isLoadingData) setShowData(paginateData);
  }, [isLoadingData, setShowData, paginateData]);

  const isLoading = isLoadingDatas || isLoadingData;

  function handleAllData() {
    if (!isLoading && showData !== data) setShowData(data);
    if (!isLoading && showData === data) setShowData(paginateData);
  }

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
      
        {showData?.products.map((item) =>{
            return (
                <div className="img-container" onClick={() =>handleAddToCart(item)}>
                <div>
                  <Link to={`/products/${item.id}`} key={item.id}>
                  <Item  title={item.title} image={item.images[0]} category={item.category} price={item.price}/>
                  </Link>
           
           
           <div className="layer">
           <FaShoppingCart style={style} />
           <Link> <FaHeart style={style}/></Link>
          
           </div>
            </div>
            
                </div>
               
            )
           
})}
  
  </div>
  <Button onClick={handleAllData} disabled={isLoading}>
          {isLoading ? (
            <div>LOADING...</div>
          ) : showData === paginateData ? (
            "LOAD MORE PRODUCTS"
          ) : (
            "LOAD LESS PRODUCTS"
          )}
        </Button>



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