import { combineReducers } from 'redux'
import { ApplicationState, applicationReducer } from './application'

export interface StoreState {
    application: ApplicationState
}

export const reducers = combineReducers<StoreState>({
    application: applicationReducer
})
