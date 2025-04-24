import { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';
import { AppState, AppAction } from '../types';
import { appReducer } from './appReducer';

const initialState: AppState = {
    activeMenu: 'about'
}

const AppContext = createContext<{
    state: AppState;
    dispatch: Dispatch<AppAction>;
}>({state: initialState, dispatch: () => {}});

export const AppProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
}
