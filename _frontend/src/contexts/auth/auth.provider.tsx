import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './auth.context';
import { getUser } from 'utils/api/user';

const isBrowser = typeof window !== 'undefined';
const INITIAL_STATE = {
  isAuthenticated: false,
  currentForm: 'signIn',
  user: undefined
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        currentForm: 'signIn',
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    case 'SIGNUP':
      return {
        ...state,
        currentForm: 'signUp',
      };
    case 'FORGOTPASS':
      return {
        ...state,
        currentForm: 'forgotPass',
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    if (!isBrowser) return
    getUser().then(user => {
      if (user) authDispatch({type: "SIGNIN_SUCCESS", user: user});
    })
  }, [])
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
