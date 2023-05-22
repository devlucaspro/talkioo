import React, { useContext, useEffect } from 'react'
import { appContext } from '../contexts/auth';
import { useNavigate } from 'react-router-dom';

const Private = ({ children }) => {

  const {user, setUser} = useContext(appContext);
  const navigate = useNavigate()

  useEffect(() => {
    if(user === null) {
      navigate('/')
    } else {
      navigate('/lessons')
    }
  }, [user]);

  return children;
}

export default Private;