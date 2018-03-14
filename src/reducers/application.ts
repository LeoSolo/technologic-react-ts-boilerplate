import { ApplicationActions } from '../actions/application'
import * as constants from '../constants/application'

export interface ApplicationState {
	isLoading: boolean
}

const initialState: ApplicationState = {
	isLoading: false
}

export function applicationReducer(state: ApplicationState = initialState, action: ApplicationActions): ApplicationState {
	switch (action.type) {
		case constants.APPLICATION_SET_LOADING:
			const { isLoading } = action.payload
			return {
				isLoading
			}
	}
	return state
}
