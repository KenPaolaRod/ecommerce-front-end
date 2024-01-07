import React from 'react'
import Header from '../Header'
import HeroSection from './HeroSection'
import ProductsSection from './ProductsSection'
import Footer from '../Footer'

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductsSection/>
      <Footer />
    </div>
  )
}

export default Home