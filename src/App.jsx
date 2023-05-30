import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes/routes'
import AuthProvider from './contexts/auth'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return(
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer position='top-right' autoClose={3000}  />
        <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;