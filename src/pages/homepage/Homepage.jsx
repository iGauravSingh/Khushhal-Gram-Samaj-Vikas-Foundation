import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Banner2 from '../../components/banners/Banner2'
import Banner1 from '../../components/banners/Banner1'
import Team from '../../components/team/Team'
import Banner3 from '../../components/banners/Banner3'
import Footer from '../../components/footer/Footer'
import TEam2 from '../../components/team/TEam2'
import News from '../../components/news/News'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Banner1 />
    <News />
    <TEam2 />
    <Banner3 />
    <Footer />
    </>
  )
}

export default Homepage