import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {



  return (
    <div className='container-login'>
      <h1>Faça Login</h1>
      <form>
        <input type="text" placeholder='Digite seu email' />
        <input type="text" placeholder='Digite sua senha' />
        <button type="submit">Entrar</button>
      </form>
      <Link to='/register'>Não possui uma conta? Criar</Link>
    </div>
  )
}

export default Login;