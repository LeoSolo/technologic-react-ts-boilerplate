import { combineReducers } from 'redux'
import { routerReducer, RouterState } from 'react-router-redux'
import { ApplicationState, applicationReducer } from './application'

export interface StoreState {
    application: ApplicationState
    routing: RouterState
}

export const reducers = combineReducers<StoreState>({
    application: applicationReducer,
    routing: routerReducer
})
