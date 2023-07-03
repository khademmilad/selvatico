import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Navbar from '../Navbar';

type Props = {}

const MainLayout = (props: any) => {
  return (
    <div>
    <Navbar />
    <Header />
    <Footer />
  </div>
  )
}

export default MainLayout