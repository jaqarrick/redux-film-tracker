import * as actions from "./actionTypes";
import { v4 as uuid } from "uuid";

const initialState = {
	byId: {},
	allIds: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_FILM:
			{
				const id = uuid();
				const filmData= action.payload;
				
				return {
					...state,
					allIds: [...state.allIds, id],
					byId: {
						...state.byId,
						[id]: filmData,
					},
				};
			}
		case actions.REMOVE_FILM: {
			const id = action.payload.id;
			const updatedById = {
				...state.byId
			}
			return {
				...state,
				allIds: state.allIds.filter(idString => idString !== id),
				byId: updatedById
				
			};
		}
		// case actions.COUNT_DECREMENTED:
		// 	return { value: state.value - 1 }
		default:
			return state;
	};
};

export default reducer;
