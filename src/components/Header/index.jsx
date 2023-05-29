import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import Btn from '../Btn'
import { appContext } from '../../contexts/auth';

const Header = () => {

  const {user} = useContext(appContext);

  function openMenu() {
    let menu = document.getElementById('menu')
    menu.classList.toggle('menu-active')

    let divI = document.getElementById('invisible-div');
    divI.classList.toggle('div-visible');

    if(divI.classList.contains('div-visible')) {
      document.body.classList.add('overflow');
    } else {
      document.body.classList.remove('overflow');
    }

    divI.addEventListener('click', () => {
      divI.classList.remove('div-visible');
      menu.classList.remove('menu-active');
      document.body.classList.remove('overflow');
    });
  };

  return (
    <header>
      <img className='logo' src="./assets/logo.png" alt="Talkioo"/>
      <button className='btn-menu' onClick={openMenu}>Menu <i className="fa-solid fa-chevron-down"></i></button>
      <ul id='menu'>
        {user ? true : <li><Link to='/'>Home</Link></li>}
        <li><Link to='/lessons'>Lessons <i className="fa-solid fa-paperclip fa-sm"></i></Link></li>
        {user && <li><Link to='/blog'>Blog</Link></li>}
      </ul>
      {user ? <button className='btn-bell'><i className="fa-solid fa-bell fa-xl"></i></button> : <Btn to='/login'>Login <i className="fa-solid fa-right-to-bracket fa-sm"></i></Btn>}

      <div id='invisible-div'>
        .
      </div>
    </header>
  )
}

export default Header;