import { createStore, applyMiddleware, compose, Store } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { History } from 'history'
import { reducers, StoreState } from '../reducers'

export function configureStore(history: History): Store<StoreState> {
    const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolsCompose } = window
    const composeEnhancers = devToolsCompose || compose
    const store = createStore<StoreState>(
		reducers,
		composeEnhancers(
			applyMiddleware(
				routerMiddleware(history)
			)
		)
	)

    if (module.hot) {
        module.hot.accept(() => {
			store.replaceReducer(require('../reducers').reducers)
		})
	}

	return store
}
