import React, { createContext, useEffect, useState } from 'react'
import { auth, db } from '../firebaseconnection';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const appContext = createContext({});

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem('userToken');

      if(storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadUser();
  }, [])

  async function signUp(email, password, name) {
    
    await createUserWithEmailAndPassword(auth, email, password)
    .then( async (values) => {
      setLoading(true);

      const userUid = values.user.uid
      const docRef = doc(db, 'user', userUid);
      await setDoc(docRef, {
        uid: values.user.uid,
        name: name,
        email: values.user.email,
      })
      .then(() => {

        let data = {
          name: name,
          uid: values.user.uid,
          email: values.user.email,
        }
  
        setLoading(false);
        setUser(data);
        storage(data);
        toast.success('Bem vindo a Talkioo!')
        navigate('/lessons')
      })

    })
    .catch( async (e) => {
      console.log(`Erro: ${e}`);
      alert('Tente novamente! Algo deu errado, confira se preencheu todos os campos');
      setLoading(false);
      toast.error('Ops, algo está errado!')
    })
    
  }

  async function signIn(email, password) {

    await signInWithEmailAndPassword(auth, email, password)
    .then( async (values) => {

      setLoading(true);

      const userUid = values.user.uid;
      const docRef = doc(db, 'user', userUid);

      const docSnap = await getDoc(docRef)

      let data = {
        uid: userUid,
        name: docSnap.data().name,
        email: values.user.email,
      }

      setLoading(false);
      setUser(data);
      storage(data);
      toast.success('Bem vindo de volta a Talkioo!');
      navigate('/lessons')
    })
    .catch((e) => {
      console.log(`Erro: ${e}`);
      toast.error('Ops, algo está errado!')
    })
  }

  async function userSignOut() {
    await signOut(auth)
    setUser(null)
    localStorage.removeItem('userToken');
    toast.success('Você saiu, até logo!');
  }

  function storage(e) {
    localStorage.setItem('userToken', JSON.stringify(e));
  }

  return (
    <appContext.Provider value={{ signUp, signIn, userSignOut, loading, user, setUser }}>
      { children }
    </appContext.Provider>
  )
}

export default AuthProvider;