import React from 'react'
import UserNavbar from '../components/UserNavbar'
import UserFooter from '../components/UserFooter'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Hero3 from '../components/Hero3'

const Home = () => {
  return (
    <>
      <UserNavbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <UserFooter />
    </>
  )
}

export default Home