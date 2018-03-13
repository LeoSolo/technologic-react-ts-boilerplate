import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import { AppContainer } from './containers/App'
import { configureStore } from './store/configureStore'

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('example')
)
