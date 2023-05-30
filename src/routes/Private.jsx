import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { appContext } from '../contexts/auth';

const Private = ({ children, redirectPath = '/' }) => {

  const {user} = useContext(appContext);

  if(!user) {
    return <Navigate to={redirectPath} replace />
  }

  return children;
}

export default Private;