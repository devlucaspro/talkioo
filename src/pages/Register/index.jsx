import React from 'react'
import { Link } from 'react-router-dom'
import '../Login/login.css'

const Register = () => {



  return (
    <div className='container-login'>
      <h1>Cadastrar</h1>
      <form>
        <input type="text" placeholder='Digite seu nome' />
        <input type="text" placeholder='Digite seu email' />
        <input type="text" placeholder='Digite sua senha' />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to='/login'>Já possui uma conta? Faça Login</Link>
    </div>
  )
}

export default Register;