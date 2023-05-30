import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Login/login.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { appContext } from '../../contexts/auth'

const Register = () => {

  const { signUp, loading, user } = useContext(appContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('');

  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault();

    if(name !== '' && email !== '' && password !== '') {
      await signUp(email, password, name);
    }
  }

  return (
    <div>
      <Header />

      <div className='container-login'>
        <h1>Cadastrar</h1>
        <p>Crie sua conta e aprenda Inglês com a Talkioo!</p>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Digite seu nome' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">{!loading ? 'Cadastrar' : 'Carregando...'}</button>
        </form>
        <Link to='/login'>Já possui uma conta? Faça Login</Link>
      </div>

      <Footer />
    </div>
  )
}

export default Register;