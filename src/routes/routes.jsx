import { Routes, Route } from "react-router-dom";
import React from 'react'
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
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/lessons" element={<Private> <Lessons/> </Private>}/>
        <Route path="/blog" element={<Private> <Blog/> </Private>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="*" element={<Error/>}/>
      </Routes>
  )
}

export default RoutesApp;