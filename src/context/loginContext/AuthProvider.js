'use client'
import React from 'react'
import { useReducer } from 'react'
import AuthContext from './AuthContext'

const INITIAL_STATE = {
  currentUser: null
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        currentUser: action.payload
      }
  }
}

const AuthProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(authReducer, INITIAL_STATE)


 

  return (
    <AuthContext.Provider value={dispatchUser} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
