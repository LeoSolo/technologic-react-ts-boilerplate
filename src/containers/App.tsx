import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { StoreState } from '../reducers'
import { ApplicationState } from '../reducers/application'

interface AppProps {
    application: ApplicationState
}

export class App extends React.Component<AppProps> {
    render() {
        return (
            <div>
                Hello, world!
            </div>
        )
    }
}

function mapStateToProps(state: StoreState) {
    return {
        application: state.application
    }
}

export const AppContainer = connect(mapStateToProps)(App)
