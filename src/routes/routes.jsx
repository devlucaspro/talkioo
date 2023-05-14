import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp;