export interface AppState {
    activeMenu: string;
}

export type AppAction = 
{ type: 'SET_ACTIVE_MENU', payload: string }