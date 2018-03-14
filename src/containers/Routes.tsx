import * as React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import { AppContainer } from './App'

export class Routes extends React.Component {
    render() {
        return (
			<React.Fragment>
				<Switch>
					<Route
						exact={true}
						path='/'
						component={AppContainer}
					/>
				</Switch>
			</React.Fragment>
        )
    }
}
