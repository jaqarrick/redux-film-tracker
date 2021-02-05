import * as actions from "./actionTypes";
import { apiKey as key } from "../apiKey";

export const removeFilm = payload => ({
	type: actions.REMOVE_FILM,
	payload: payload,
});

export const addFilm = payload => {
	const title = payload;
	return async (dispatch, getState) => {
		const filmData = await fetch(
			`http://www.omdbapi.com/?apikey=${key}&t=${title}`
		).then(res => res.json());

		dispatch({
			type: actions.ADD_FILM,
			payload: filmData,
		});
	};
};
