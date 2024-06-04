import React from 'react'
import HeroPage from '../Components/HeroPage/HeroPage'
import Feature from '../Components/FeatProdt/Feature'
import Posts from '../Components/Posts/Posts'
import Review from '../Components/ReviewPage/Review'
import FooterBanner from '../Components/FooterBanner/FooterBanner'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
      <HeroPage/>
      <Feature/>
      <Posts/>
      <Review/>
      <FooterBanner/>
      <Footer/>
    </div>
  )
}

export default Home