import makepost from "../JS/boring.js";
import { data } from "../DATA/data.js";

const incrementPost = (array) => {
	for (let i = 0; i < array.length; i++) {
		const data = array[i];
		main1.appendChild(makepost(data));
	}
};

incrementPost(data);
