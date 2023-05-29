import React, { useContext } from 'react'
import './lessons.css'
import { Link, useNavigate } from 'react-router-dom'
import { appContext } from '../../contexts/auth'

const Lessons = () => {

  const { user, userSignOut } = useContext(appContext);
  const navigate = useNavigate();

  async function handleSignOut() {
    await userSignOut()
    user ? navigate('/lessons') : navigate('/')
  }

  const lessons = [
    {
      title: 'Learn the Grammar',
      exercises: '6 lessons',
      color: 'var(--yellow)'
    },
    {
      title: 'Expressions',
      exercises: '10 lessons',
      color: 'var(--red)'
    },
    {
      title: 'English Tips',
      exercises: '10 lessons',
      color: 'var(--blue)'
    },
  ];

  const recommend = [
    {
      title: 'English Chat',
      exercises: '2 tools',
      to: '/chat',
      color: 'var(--green)'
    },
    {
      title: 'How to learn a language',
      exercises: 'Videos',
      to: 'yt',
      color: 'var(--green-light)'
    },
    {
      title: 'Our blog',
      exercises: 'Visit us',
      to: '/blog',
      color: 'var(--orange)'
    }
  ];

  return (
    <div className='container'>

      <h2>Overview</h2>
      <div className='flex-card'>
        {lessons.map((lesson, index) => (
          <div className='card' key={index} style={{ backgroundColor: lesson.color }}>
            <h3>{lesson.title}</h3>
            <div className="card-footer">
              <p>{lesson.exercises}</p>
              <Link to='/exercises'><i className="fa-solid fa-play"></i></Link>
            </div>
          </div>
          )
        )}
      </div>

      <h2>We recommend</h2>
      <div className='flex-card'>
        {recommend.map((recommend, index) => (
          <div className='card' key={index} style={{ backgroundColor: recommend.color }}>
            <h3>{recommend.title}</h3>
            <div className="card-footer">
              <p>{recommend.exercises}</p>
              <Link to={recommend.to}><i className="fa-solid fa-play"></i></Link>
            </div>
          </div>
          )
        )}
      </div>

      <button title='Sair' aria-label='sair' onClick={handleSignOut} className='btn-logout'><i className="fa-solid fa-arrow-right-from-bracket fa-xl"></i></button>
    </div>
  )
}

export default Lessons;