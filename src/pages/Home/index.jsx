import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import Btn from '../../components/Btn'

const Home = () => {
  return (
    <main>
      <div className='cta'>
        <p className='card-cta'>Learn English</p>
        <h1>Learn at Talkioo<span>.</span></h1>
        <p>Aprenda Inglês na Talkioo, o melhor site para aprender Inglês.</p>
        <div className='btn-div'>
          <Btn to='/login'>Começar</Btn>
          <Link to='/about'>Conheça-nos</Link>
        </div>
      </div>
      <img className='cta-img' src="./assets/cta-img.png" alt="CTA Image" />
    </main>
  )
}

export default Home;