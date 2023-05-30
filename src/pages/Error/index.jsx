import React from 'react'
import './error.css'
import Btn from '../../components/Btn';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Error = () => {
  return (
    <div>
      <Header />

      <div className='container-erro'>
        <div className='text'>
          <h1>Olá, aluno...</h1>
          <p>
            Infelizmente não conseguimos encontrar o local onde você deseja chegar, qualquer dúvida consulte com o Desenvolvedor <a href="https://lucasdeveloper.netlify.app"><strong>Lucas Ribeiro</strong></a>.
          </p>
          <Btn to='/'>Voltar</Btn>
        </div>
        <div>
          <img src="./assets/cta-img.png" alt="404 Image" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Error;