import { AppState, AppAction } from "../types";

export const appReducer = (state: AppState, action: AppAction) : AppState => {
    switch (action.type) {
        case 'SET_ACTIVE_MENU':
            return {
                ...state,
                activeMenu: action.payload
            }
        case 'SET_NOTIFIER':
            return {
                ...state,
                notifier: {
                    ...state.notifier,
                    ...action.payload,
                }
            }
        case 'RESET_NOTIFIER':
            return {
                ...state,
                notifier: {
                    ...state.notifier,
                    type: '',
                    message: '',
                    show: false,
                }
        }
        default:
            return state;
    }
}