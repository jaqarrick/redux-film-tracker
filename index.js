import store from "./src/store"
import { countDecremented, countIncremented } from "./src/actions"
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")
const countText = document.querySelector("#count")
store.subscribe(() => {
	countText.value = store.getState().value
	console.log(store.getState())
})

incrementBtn.onclick = () => store.dispatch(countIncremented())
decrementBtn.onclick = () => store.dispatch(countDecremented())
