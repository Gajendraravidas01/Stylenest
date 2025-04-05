import React from 'react'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsLetter from '../components/Newsletter'
import Announcement from '../components/Announcement'


const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
