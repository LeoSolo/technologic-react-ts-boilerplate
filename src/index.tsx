import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createHashHistory, createBrowserHistory } from 'history'
import { ConnectedRouter } from 'react-router-redux'
import { RoutesContainer } from './containers/Routes'
import './styles/base.scss'

import { configureStore } from './store/configureStore'

const history = process.env.NODE_ENV === 'development' ? createHashHistory() : createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<RoutesContainer />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
