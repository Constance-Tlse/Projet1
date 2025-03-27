import makepost from "./createpost.js";
import makereply from "./createreply.js";
import datapost from "../DATA/data.js";
import datareply from "../DATA/comment.js";

const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");

const incrementPost = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		const post = array[i];
		main1.appendChild(makepost(post));
	}
};

incrementPost(datapost);

const incrementReplyPost = (array) => {
	for (let i = 0; i <= 0; i++) {
		const post = array[i];
		main2.appendChild(makepost(post));
	}
};

incrementReplyPost(datapost);

const incrementreply = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		const reply = array[i];
		main2.appendChild(makereply(reply));
	}
};

incrementreply(datareply);
