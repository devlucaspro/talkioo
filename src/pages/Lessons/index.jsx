import React, { useContext } from 'react'
import './lessons.css'
import { useNavigate } from 'react-router-dom'
import { appContext } from '../../contexts/auth'

const Lessons = () => {

  const { user, userSignOut } = useContext(appContext);
  const navigate = useNavigate();

  async function handleSignOut() {
    await userSignOut()
    user ? navigate('/lessons') : navigate('/')
  }

  return (
    <div>
      <button onClick={handleSignOut}>Sair</button>
    </div>
  )
}

export default Lessons