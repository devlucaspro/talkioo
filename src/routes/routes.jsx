import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Lessons from '../pages/Lessons'
import About from '../pages/About'
import Error from '../pages/Error'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/lessons" element={<Lessons/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp;