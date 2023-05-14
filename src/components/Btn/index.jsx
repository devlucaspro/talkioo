import React from 'react'
import { Link } from 'react-router-dom'
import './btn.css'

const Btn = ({ children, to }) => {
  return (
    <Link className='btn-login' to={to}>{children}</Link>
  )
}

export default Btn;