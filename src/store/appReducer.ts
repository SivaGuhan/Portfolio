import { AppState, AppAction } from "../types";

export const appReducer = (state: AppState, action: AppAction) : AppState => {
    switch (action.type) {
        case 'SET_ACTIVE_MENU':
            return {
                ...state,
                activeMenu: action.payload
            }
        default:
            return state;
    }
}