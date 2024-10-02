import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
import list from "../../public/list.json"

function courses() {
  return (
    <>
    <Navbar/>
    <div className= "min-h-screen">
      <Course/>
      </div>
    <Footer/>
      
    </>
  );
}

export default courses
