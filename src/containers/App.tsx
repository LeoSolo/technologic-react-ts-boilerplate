import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RouterState } from 'react-router-redux'

import { StoreState } from '../reducers'
import { ApplicationState } from '../reducers/application'
import { Hello } from '../components/Hello'
import { setLoading, SetLoadingAction, ApplicationActions} from '../actions/application'

interface AppProps {
	application: ApplicationState
	routing: RouterState
	setLoading: (isLoading: boolean) => SetLoadingAction
}

export class App extends React.Component<AppProps> {
	setLoading = () => {
		const { isLoading } = this.props.application
		const { setLoading } = this.props
		setLoading(!isLoading)
	}

	render() {
		return (
			<div>
				<Hello
					compiler="TypeScript"
					framework="React"
				/>
				<button onClick={this.setLoading}>isLoading: {this.props.application.isLoading.toString()}</button>
			</div>
		)
	}
}

function mapStateToProps(state: StoreState) {
	return {
		application: state.application,
		routing: state.routing
	}
}

function mapDispatchToProps(dispatch: Dispatch<ApplicationActions>) {
	return bindActionCreators(
		{
			setLoading
		},
		dispatch
	)
}

export const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
