import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import About1 from '../../components/about/About1.2'



export default function AboutPage() {

  const [nav, setNav] = useState(false)

  const changeBackground = () => {
      if(window.scroll >= 50) {
        setNav(true)
      } else {
        setNav(false)
      }
    }

  window.addEventListener('scroll', changeBackground);


  return (
        <>
        <Navbar className={nav ? 'nav active' : 'nav'}/>
        <About1 />
        <Footer />
        </>
  )
}