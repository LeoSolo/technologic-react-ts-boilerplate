export interface ApplicationState {
    isLoading: boolean
}

const initialState: ApplicationState = {
    isLoading: false
}

export function applicationReducer(state: ApplicationState = initialState, action: any): ApplicationState {
    return state
}
