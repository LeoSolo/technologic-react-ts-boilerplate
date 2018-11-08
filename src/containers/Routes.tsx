import * as React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import { connect, Dispatch } from 'react-redux'

import { AppContainer } from './App'
import { NewsContainer } from './News'
import { GalleryContainer } from './Gallery'
import { ContactsContainer } from './Contacts'

import { LINKS } from '../constants/links'

import { Header } from '../components/Header/Header'

import { StoreState } from '../reducers'

interface RoutesProps {
    store: StoreState
}

export class Routes extends React.Component<RoutesProps> {

    constructor(props) {
        super(props)
    }

    render() {

        return (
			<React.Fragment>
                {/*<Header />*/}
				<Switch>
					<Route
						exact={true}
						path={LINKS.MAIN}
						component={AppContainer}
					/>
                    <Route
                        exact={true}
                        path={LINKS.NEWS}
                        component={NewsContainer}
                    />
                    <Route
                        exact={true}
                        path={LINKS.GALLERY}
                        component={GalleryContainer}
                    />
                    <Route
                        exact={true}
                        path={LINKS.CONTACTS}
                        component={ContactsContainer}
                    />
				</Switch>
			</React.Fragment>
        )

    }
}

function mapStateToProps(state: StoreState) {
    return {
        routing: state.routing
    }
}

export const RoutesContainer = connect(
    mapStateToProps
)(Routes)
