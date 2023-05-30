import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './menu.css'
import Btn from '../../components/Btn'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { appContext } from '../../contexts/auth'

const Home = () => {

  const {user} = useContext(appContext);
  const navigate = useNavigate();

  useEffect(() => {
    function loadUser() {
      if(user) {
        navigate('/lessons')
      }
    }

    loadUser()
  }, [])

  return (
    <div>
      <Header />

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

      <Footer />
    </div>
  )
}

export default Home;