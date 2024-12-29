import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Build from '../components/Build/Build';
import img from '../assets/img8.png';
import Pdfreader from '../components/PdfReader/pdfreader';
import Footer from '../components/Footer/Footer';

const Article = () => {
  return (
    <div>
      <Navbar />
      <Build />
      <Pdfreader />
      <Footer />
    </div>
  )
}

export default Article