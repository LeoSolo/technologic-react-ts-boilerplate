import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { StoreState } from '../reducers'
import { ApplicationState } from '../reducers/application'
import { Hello } from '../components/Hello'

interface AppProps {
    application: ApplicationState
}

export class App extends React.Component<AppProps> {
    render() {
        return (
            <div>
	            <Hello
		            compiler='TypeScript'
		            framework='React'
	            />
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
