import makepost from "../JS/boring.js";
import data from "../DATA/data.js";
const main1 = document.querySelector(".main1")


const incrementPost = (array) => {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		main1.appendChild(makepost(element));
	}
};

const zbla = incrementPost(data);

console.log(zbla)