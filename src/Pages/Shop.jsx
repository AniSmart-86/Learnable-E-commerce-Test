import React from 'react'
import Footer from '../Components/Footer/Footer'
import Shopping from '../Components/Shop/Shopping'
import ShoppingReview from '../Components/Shop/ShoppingReview'

function Shop() {
  return (
    <div>
      <ShoppingReview/>
      <Shopping/>
      <Footer/>
    </div>
  )
}

export default Shop