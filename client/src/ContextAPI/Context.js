import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export const AppState = createContext();
export const AppDispatch = createContext();
export const CommerceState = createContext();
export const CommerceDispatch = createContext();
export const ProfileState = createContext();
export const ProfileDispatch = createContext();

const initialState = {
    value: 0,
    selectedIndex: 0,
    currentCategory: [],
    currentImages: [],
    isLoggedIn: false,
};

export const AppProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppState.Provider value={state}>
            <AppDispatch.Provider value={dispatch}>{props.children}</AppDispatch.Provider>
        </AppState.Provider>
    );
};
