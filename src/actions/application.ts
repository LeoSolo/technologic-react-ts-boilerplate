import * as constants from '../constants/application'

export interface SetLoadingAction {
    type: string
    payload: {
        isLoading: boolean
    }
}

export type ApplicationActions = SetLoadingAction

export function setLoading(isLoading: boolean): SetLoadingAction {
    return {
	    type: constants.APPLICATION_SET_LOADING,
	    payload: {
		    isLoading: isLoading
	    }
    }
}
