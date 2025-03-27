import makepost from "./createpost.js";
import data from "../DATA/data.js";
const main1 = document.querySelector(".main1")


const incrementPost = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		const element = array[i];
		main1.appendChild(makepost(element));
	}
};

incrementPost(data);
