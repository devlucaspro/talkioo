import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { appContext } from '../contexts/auth';

const Private = ({ children, redirectPath = '/' }) => {

  const {user, setUser} = useContext(appContext);

  useEffect(() => {
    function loadPage() {
      if(user) {
        let storage = localStorage.getItem('userToken');
        if(storage) {
          setUser(JSON.parse(storage));
        }
      }
    }

    loadPage()
  }, [])

  if(!user) {
    return <Navigate to={redirectPath} replace />
  }

  return children;
}

export default Private;