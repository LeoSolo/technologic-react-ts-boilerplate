import { createStore, applyMiddleware, compose, Store } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { History } from 'history'
import { reducers, StoreState } from '../reducers'
import { loadState, saveState } from '../utils/localStorage'
import throttle from 'lodash.throttle'
import createSagaMiddleware from 'redux-saga'
import { sagas } from '../sagas/'

export function configureStore(history: History): Store<StoreState> {
    const sagaMiddleware = createSagaMiddleware()
    const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolsCompose } = window
    const composeEnhancers = devToolsCompose || compose
    const persistedState = loadState('test')
    const store = createStore<StoreState>(
		reducers,
        persistedState,
		composeEnhancers(
			applyMiddleware(
			    sagaMiddleware,
				routerMiddleware(history)
			)
		)
	)
    store.subscribe(throttle(() => {
        saveState('test', store.getState())
    }, 1000))

    sagaMiddleware.run(sagas)

    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(require('../reducers').reducers)
        })
    }

    return store
}
