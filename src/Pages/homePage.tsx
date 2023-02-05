import React from 'react'
import Navbar from '../Component/Navbar'
import HomeBody from '../Component/Body'
import Footer from '../Component/Footer'


function HomePage() {
  return (
    <div className='font-Rubik'>
        <Navbar />
        <HomeBody />
        <Footer/>
    </div>
  )
}

export default HomePage