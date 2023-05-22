import React, { createContext, useState } from 'react'
import { auth, db } from '../firebaseconnection';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export const appContext = createContext({});

const AuthProvider = ({ children }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  async function signUp(e) {
    e.preventDefault()
    
    await createUserWithEmailAndPassword(auth, email, password)
    .then( async (values) => {
      setLoading(true);

      const userUid = values.user.uid
      const docRef = doc(db, 'user', userUid);
      await setDoc(docRef, {
        name: name,
        uid: values.user.uid,
        email: values.user.email,
      })

      let data = {
        name: name,
        uid: values.user.uid,
        email: values.user.email,
      }

      setLoading(false);
      setUser(data);
      storage(data);
    })
    .catch( async (e) => {
      console.log(`Erro: ${e}`);
      alert('Tente novamente! Algo deu errado, confira se preencheu todos os campos');
      setLoading(false);
    })
    
  }

  async function signIn(e) {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
    .then( async (values) => {

      setLoading(true);

      const userUid = values.user.uid
      const docRef = doc(db, 'user', userUid);
      await setDoc(docRef, {
        name: name,
        uid: values.user.uid,
        email: values.user.email,
      })

      let data = {
        name: name,
        uid: values.user.uid,
        email: values.user.email,
      }

      setLoading(false);
      setUser(data);
      storage(data);
    })
    .catch((e) => {
      console.log(`Erro: ${e}`);
    })
  }

  async function userSignOut() {
    await signOut(auth)
    setUser(null)
    localStorage.removeItem('userToken');
  }

  function storage(e) {
    localStorage.setItem('userToken', JSON.stringify(e));
  }

  return (
    <appContext.Provider value={{ name, email, password, setName, setEmail, setPassword, signUp, signIn, userSignOut, loading, user, setUser }}>
      { children }
    </appContext.Provider>
  )
}

export default AuthProvider;