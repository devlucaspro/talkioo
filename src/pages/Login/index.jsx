import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './login.css'

import { appContext } from '../../contexts/auth'

const Login = () => {

  const { email, setEmail, password, setPassword, signIn, loading, user } = useContext(appContext);

  const navigate = useNavigate()

  async function handleLogin(e) {
    await signIn(e)
    navigate('/lessons')
  }

  return (
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
  )
}

export default Login;