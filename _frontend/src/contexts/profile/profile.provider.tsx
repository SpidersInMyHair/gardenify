import React, { useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { ProfileContext } from './profile.context';

type Action =
  | { type: 'HANDLE_ON_INPUT_CHANGE'; payload: any }
  | { type: 'ADD_OR_UPDATE_CONTACT'; payload: any }
  | { type: 'DELETE_CONTACT'; payload: any }
  | { type: 'ADD_OR_UPDATE_ADDRESS'; payload: any }
  | { type: 'DELETE_ADDRESS'; payload: any }
function reducer(state: any, action: Action): any {
  switch (action.type) {
    case 'HANDLE_ON_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value };
    case 'ADD_OR_UPDATE_CONTACT':
      if (action.payload.id) {
        return {
          ...state,
          contact: state.contact.map((item: any) =>
            item.id === action.payload.id
              ? { ...item, ...action.payload }
              : item
          ),
        };
      }
      const newContact = {
        ...action.payload,
        id: uuidV4(),
        type: state.contact.length === '0' ? 'primary' : 'secondary',
      };
      return {
        ...state,
        contact: [...state.contact, newContact],
      };

    case 'DELETE_CONTACT':
      return {
        ...state,
        contact: state.contact.filter(
          (item: any) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

type ProfileProviderProps = {
  initData: any;
};

export const ProfileProvider: React.FunctionComponent<ProfileProviderProps> = ({
  children,
  initData,
}) => {
  const [state, dispatch] = useReducer(reducer, { ...initData });
  // console.log(state, 'profile provider state');

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
