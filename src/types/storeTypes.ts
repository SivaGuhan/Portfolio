export interface AppState {
    activeMenu: string;
    notifier: {
        type: string;
        message: string;
        show: boolean;
    }
}

type ActionMap = {
    SET_ACTIVE_MENU: string;
    SET_NOTIFIER: Partial<AppState['notifier']>;
    RESET_NOTIFIER: undefined;  // No payload
};

export type AppAction = {
    [K in keyof ActionMap]: ActionMap[K] extends undefined
        ? { type: K }
        : { type: K; payload: ActionMap[K] }
}[keyof ActionMap];
