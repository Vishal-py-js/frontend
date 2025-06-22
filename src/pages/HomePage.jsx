import React from 'react'
import Header from '../components/header/header'
import BrandShowcase from '../components/brands/Brands'
import CarSlider from '../components/cars/Cars'
import AdSection from '../components/ad-section/Adsection'
import Adsection2 from '../components/ad-section/Adsection2'
import PopularMakes from '../components/popular/Popularmakes'
import ShopBox from '../components/shopbox/Shopbox'
import CustomerTestimonial from '../components/customer-testimonials/CustomerTestimonials'
import BlogPostsSection from '../components/blogpost/Blogpost'
import CarActionsSection from '../components/action/CarAction'
import Footer from '../components/footer/Footer'

function HomePage() {
  return (
    <div className='w-full'>
        <Header />
        <BrandShowcase />
        <CarSlider />
        <AdSection />
        <Adsection2 />
        <PopularMakes />
        <ShopBox />
        <CustomerTestimonial />
        <BlogPostsSection />
        <CarActionsSection />
        <Footer />
    </div>
  )
}

export default HomePage