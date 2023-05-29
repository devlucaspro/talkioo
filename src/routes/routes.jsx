import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Lessons from '../pages/Lessons'
import Blog from '../pages/Blog'
import About from '../pages/About'
import Error from '../pages/Error'

import Private from "./Private";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/lessons" element={<Private> <Lessons/> </Private>}/>
        <Route path="/blog" element={<Private> <Blog/> </Private>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp;