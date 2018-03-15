import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'react-router-redux'
import { Routes } from './containers/Routes'
import './scss/base.scss'

import { configureStore } from './store/configureStore'

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
