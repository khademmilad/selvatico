"use client"
import React from 'react'
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
    <Navbar />
    <div className='' id='header'> 
      <h1 className="text-center">"Revolutionizing Customer Support: Empowering Users, Redefining Satisfaction with Innovative Solutions!"</h1>
    </div>
    </div>
  )
}

export default Header