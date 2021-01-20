import * as actions from "./actionTypes"

const reducer = (state = { value: 0 }, action) => {
	switch (action.type) {
		case actions.COUNT_INCREMENTED:
			return { value: state.value + 1 }
		case actions.COUNT_DECREMENTED:
			return { value: state.value - 1 }
		default:
			return state
	}
}

export default reducer
