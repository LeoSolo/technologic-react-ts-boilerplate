import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RouterState } from 'react-router-redux'

import { StoreState } from '../reducers'
import { ApplicationState } from '../reducers/application'
import { setLoading, SetLoadingAction, ApplicationActions } from '../actions/application'

interface NewsProps {
	application: ApplicationState
	routing: RouterState
	setLoading: (isLoading: boolean) => SetLoadingAction
}

export class News extends React.Component<NewsProps, {}> {

	constructor(props) {
		super(props)

	}

	render() {
		return (
			<div>
				<div className="devText">Page in development...</div>

				<ul className="news-list">
					<li>
						<div className="img" />
						<div className="content">
                            <h3>Первая новость</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
						</div>
					</li>
                    <li>
                        <div className="img" />
                        <div className="content">
                            <h3>Вторая новость</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="img" />
                        <div className="content">
                            <h3>Третья новость</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </li>
				</ul>

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

export const NewsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(News)
