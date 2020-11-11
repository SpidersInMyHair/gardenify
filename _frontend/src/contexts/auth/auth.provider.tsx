import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './auth.context';
import { getUser } from 'utils/api/user';

const isBrowser = typeof window !== 'undefined';
const INITIAL_STATE = {
  isAuthenticated: false,
  isLoading: true,
  currentForm: 'signIn',
  user: undefined
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        isLoading: false,
        currentForm: 'signIn',
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.user
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'SIGNUP':
      return {
        ...state,
        isLoading: false,
        currentForm: 'signUp',
      };
    case 'FORGOTPASS':
      return {
        ...state,
        isLoading: false,
        currentForm: 'forgotPass',
      };
    default:
      
      return {
        ...state,
        isLoading: false
      };
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    if (!isBrowser) return
    getUser().then(user => {
      if (user) authDispatch({type: "SIGNIN_SUCCESS", user: user});
      else authDispatch({type: "SIGNIN_FAILURE"})
    })
  }, [])
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
