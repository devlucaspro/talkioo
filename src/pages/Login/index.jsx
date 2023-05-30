import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './login.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { appContext } from '../../contexts/auth'

const Login = () => {

  const {signIn, loading } = useContext(appContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault();

    if(email !== '' && password !== '') {
      await signIn(email, password);
    }
  }

  return (
    <div>
      <Header />

      <div className='container-login'>
        <h1>Faça Login</h1>
        <p>Comece já a aprender Inglês com a Talkioo de forma simples!</p>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">{!loading ? 'Entrar' : 'Carregando...'}</button>
        </form>
        <Link to='/register'>Não possui uma conta? Criar</Link>
      </div>

      <Footer />
    </div>
  )
}

export default Login;