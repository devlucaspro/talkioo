import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {

  function openMenu() {
    let menu = document.getElementById('menu')
    menu.classList.toggle('menu-active')
  }

  return (
    <header>
      <img src="./assets/logo.png" alt="Talkioo"/>
      <button className='btn-menu' onClick={openMenu}>Menu <i className="fa-solid fa-chevron-down"></i></button>
      <ul id='menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/lessons'>Lessons <i className="fa-solid fa-paperclip fa-sm"></i></Link></li>
      </ul>
      <Link to='/login' className='btn-login'>Login <i className="fa-solid fa-right-to-bracket fa-sm"></i></Link>
    </header>
  )
}

export default Header;