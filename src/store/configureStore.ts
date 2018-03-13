import { createStore, applyMiddleware, compose, Store } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { History } from 'history'
import { reducers, StoreState } from '../reducers'

export function configureStore(history: History): Store<StoreState> {
    const store = createStore<StoreState>(
        reducers,
        applyMiddleware(
            routerMiddleware(history)
        )
    )

    return store
}
