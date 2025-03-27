import makepost from "./createpost.js";
import makereply from "./createreply.js";
import datapost from "../DATA/data.js";
import datareply from "../DATA/comment.js";

const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");

const incrementPost = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		const element = array[i];
		main1.appendChild(makepost(element));
	}
};

incrementPost(datapost);

const incrementreply = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		const element = array[i];
		main2.appendChild(makereply(element));
	}
};

incrementreply(datareply);
