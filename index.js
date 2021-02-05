import store from "./src/store";
import { addFilm, removeFilm } from "./src/actions";
const incrementBtn = document.querySelector("#increment");
const displayElement = document.querySelector("#display");
store.subscribe(() => {
	console.log(store.getState());
	displayElement.textContent = "";
	const state = store.getState();
	const byId = state.byId;
	const allIds = state.allIds;
	allIds.forEach(id => {
		const entry = byId[id];
		const filmBlock = document.createElement("div");
		const titleElement = document.createElement("h3");
		if (entry.Title) {
			titleElement.innerHTML = entry.Title;
			filmBlock.appendChild(titleElement);
			const directorElement = document.createElement("h5");
			directorElement.innerHTML = entry.Director ?? "";
			filmBlock.appendChild(directorElement);
			const yearElement = document.createElement("p");
			yearElement.innerHTML = entry.Year ?? "";
			filmBlock.appendChild(yearElement);
			filmBlock.classList.add("film-block");

			const removeButton = document.createElement("button");
			const payload = { id };
			removeButton.addEventListener("click", () => {
				console.log("test");
				console.log(removeFilm);
				store.dispatch(removeFilm(payload));
			});
			removeButton.innerHTML = "X";
			filmBlock.appendChild(removeButton);
			displayElement.appendChild(filmBlock);
		}
	});
});

const titleInput = document.querySelector("#title");

incrementBtn.onclick = () => {
	const title = titleInput.value;
	if (!title) return;
	store.dispatch(addFilm(title));
};
